<?php

namespace App\Entity\StaticStorage;

class UserStaticStorage
{
    public const ROLE_USER = 'ROLE_USER';
    public const ROLE_ADMIN = 'ROLE_ADMIN';

    public static function getRoles(): array
    {
        return [
            self::ROLE_USER => 'User',
            self::ROLE_ADMIN => 'Admin',
        ];
    }
}