<?php

namespace App\Form\Handler;

use App\Entity\User;
use App\Utils\Manager\UserManager;
use Symfony\Component\Form\Form;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class UserFormHandler
{

    private UserManager $userManager;
    private UserPasswordEncoderInterface $passwordEncoder;

    /**
     * @param UserManager $userManager
     */
    public function __construct(UserManager $userManager, UserPasswordEncoderInterface $passwordEncoder)
    {
        $this->userManager = $userManager;
        $this->passwordEncoder = $passwordEncoder;
    }

    public function processEditForm(Form $form)
    {
        $plainPassword = $form->get('plainPassword')->getData();
        /** @var User $user */
        $user = $form->getData();

        if ($plainPassword) {
            $user->setPassword($this->passwordEncoder->encodePassword($user,$plainPassword));
        }

        $this->userManager->save($user);
        return $user;
    }
}