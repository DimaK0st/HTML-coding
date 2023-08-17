<?php

namespace App\Form\Handler;

use App\Entity\Category;
use App\Utils\Manager\CategoryManager;

class CategoryFormHandler
{

    private CategoryManager $categoryManager;

    /**
     * @param CategoryManager $categoryManager
     */
    public function __construct(CategoryManager $categoryManager){

        $this->categoryManager = $categoryManager;
    }

    public function processEditForm(Category $category){
        $this->categoryManager->save($category);
    }
}