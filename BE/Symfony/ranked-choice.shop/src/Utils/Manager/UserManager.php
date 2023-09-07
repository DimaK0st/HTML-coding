<?php

namespace App\Utils\Manager;

use App\Entity\User;
use Doctrine\Persistence\ObjectRepository;

class UserManager extends AbstractBaseManager {

    public function getRepository(): ObjectRepository
    {
        return $this->entityManager->getRepository(User::class);
    }

    /**
     * @param User $entity
     * @return void
     */
    public function remove(object $entity): void
    {
        $entity->setIsDeleted(true);

        $this->save($entity);
    }
}