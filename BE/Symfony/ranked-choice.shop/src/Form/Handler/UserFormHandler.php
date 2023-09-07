<?php

namespace App\Form\Handler;

use App\Entity\User;
use App\Utils\Manager\UserManager;

class UserFormHandler
{

    private UserManager $userManager;

    /**
     * @param UserManager $userManager
     */
    public function __construct(UserManager $userManager){

        $this->userManager = $userManager;
    }

    public function processEditForm(User $user){
dd($user);
        $this->userManager->save($user);
        return $user;
    }
}