<?php

namespace App\Entity\StaticStorage;

class OrderStaticStorage{
    
        public const ORDER_STATUS_CREATED = 0;
        public const ORDER_STATUS_PROCESSED = 1;
        public const ORDER_STATUS_COMPLECTED = 2;
        public const ORDER_STATUS_DELIVERED = 3;
        public const ORDER_STATUS_CANCELED = 4;
    
        public static function getStatuses(): array
        {
            return [
                self::ORDER_STATUS_CREATED => 'Created',
                self::ORDER_STATUS_PROCESSED => 'Paid',
                self::ORDER_STATUS_COMPLECTED => 'Sent',
                self::ORDER_STATUS_DELIVERED => 'Delivered',
                self::ORDER_STATUS_CANCELED => 'Canceled',
            ];
        }
    
        public static function getStatusName(int $status): string
        {
            return self::getStatuses()[$status];
        }
}