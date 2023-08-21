<?php

namespace App\Utils\Manager;

use App\Entity\Category;
use App\Entity\Product;
use Doctrine\Persistence\ObjectRepository;

class CategoryManager extends AbstractBaseManager {

    public function getRepository(): ObjectRepository
    {
        return $this->entityManager->getRepository(Category::class);
    }

    /**
     * @param Category $entity
     * @return void
     */
    public function remove(object $entity): void
    {
        $entity->setIsDeleted(true);

        /**
         * @var Product $product
         */
        foreach ($entity->getProducts()->getValues() as $product) {
            $product->setIsDeleted(true);
        }
        $this->save($entity);
    }
}