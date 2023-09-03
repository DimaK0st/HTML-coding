<?php

namespace App\Form\Handler;

use App\Entity\Category;
use App\Form\DTO\EditCategoryModel;
use App\Utils\Manager\OrderManager;

class OrderFormHandler
{

    private OrderManager $categoryManager;

    /**
     * @param OrderManager $categoryManager
     */
    public function __construct(OrderManager $categoryManager){

        $this->categoryManager = $categoryManager;
    }

    public function processEditForm(EditCategoryModel $editCategoryModel){
        $category = new Category();

        if ($editCategoryModel->id) {
            $category = $this->categoryManager->find($editCategoryModel->id);
        }

        $category->setTitle($editCategoryModel->title);


        $this->categoryManager->save($category);
        return $category;
    }
}