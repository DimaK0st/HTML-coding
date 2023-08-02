<?php

namespace App\Command;

use App\Entity\User;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\Exception\ORMException;
use Doctrine\ORM\OptimisticLockException;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Question\Question;
use Symfony\Component\Console\Style\SymfonyStyle;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoder;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Stopwatch\Stopwatch;

class AddUserCommand extends Command
{
    protected static $defaultName = 'app:add-user';
    protected static $defaultDescription = 'Create a new user';
    private UserRepository $userRepository;
    private EntityManager $entityManager;
    private UserPasswordEncoder $passwordEncoder;

    protected function configure(): void
    {
        $this
            ->setDescription(self::$defaultDescription)
            ->addOption('email', 'em', InputArgument::OPTIONAL, 'Email')
            ->addOption('password', 'p', InputArgument::OPTIONAL, 'Password')
            ->addOption('isAdmin', '', InputArgument::OPTIONAL, 'If set, the user is created as an admin', false);
    }

    public function __construct(
        string                       $name = null,
        EntityManagerInterface       $entityManager,
        UserPasswordEncoderInterface $passwordEncoder,
        UserRepository               $userRepository
    )
    {
        parent::__construct($name);
        $this->entityManager = $entityManager;
        $this->passwordEncoder = $passwordEncoder;
        $this->userRepository = $userRepository;
    }

    protected
    function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);
        $stopwatch = new Stopwatch();
        $stopwatch->start('add-user-command');

        $email = $input->getOption('email');
        $password = $input->getOption('password');
        $isAdmin = $input->getOption('isAdmin');

        $io->title('Add User Command');

        $io->text([
            'Create a new user',
            '============',
            '',
        ]);

        if (!$email) {
            $email = $io->ask('Email', null, function ($email) {
                if (empty($email)) {
                    throw new \RuntimeException('Email can not be empty');
                }
                return $email;
            });
        }

        if (!$password) {
            $password = $io->askHidden('Password (your type will be hidden)', function ($password) {
                if (empty($password)) {
                    throw new \RuntimeException('Password can not be empty');
                }
                return $password;
            });
        }

        if (!$isAdmin) {
            $question = new Question('Is this user an admin? (1 or 0)', 0);
            $isAdmin = $io->askQuestion($question);
        }

        try {
            $user = $this->createUser($email, $password, boolval($isAdmin));
        } catch (\RuntimeException $e) {
            $io->error($e->getMessage());
            return Command::FAILURE;
        }


        $successMessage1 = sprintf('%s was successfully created:', $isAdmin ? 'Admin user' : 'User');
        $successMessage2 = sprintf('Id:(%d) Email:(%s) Pass:(%s)', $user->getId(), $email, $password);
        $io->success($successMessage1);
        $io->success($successMessage2);

        $event = $stopwatch->stop('add-user-command');

        $stopwatchMessage = sprintf('Elapsed time: %.2f ms / Consumed memory: %.2f MB', $event->getDuration(), $event->getMemory() / (1024 ** 2));
        $io->comment($stopwatchMessage);

        return Command::SUCCESS;
    }

    /**
     * @throws OptimisticLockException
     * @throws ORMException
     */
    private function createUser(string $email, string $password, bool $isAdmin): User
    {
        $user = $this->userRepository->findOneBy(['email' => $email]);
        if ($user) {
            throw new \RuntimeException('User already exists');
        }

        $user = new User();
        $user->setEmail($email);
        $user->setPassword($this->passwordEncoder->encodePassword($user, $password));
        $user->setRoles($isAdmin ? ['ROLE_ADMIN'] : ['ROLE_USER']);
        $user->setIsVerified(true);

        $this->entityManager->persist($user);
        $this->entityManager->flush();

        return $user;
    }
}
