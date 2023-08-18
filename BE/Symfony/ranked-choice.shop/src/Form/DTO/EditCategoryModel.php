<?php

namespace App\Form\DTO;

use App\Entity\Category;
use Symfony\Component\Validator\Constraints as Assert;

class EditCategoryModel
{
    /**
     * @var string|null
     */
    public ?string $id = null;

    /**
     * @Assert\NotBlank(message="Please enter category title")
     * @var string|null
     */
    public ?string $title = null;

    public static function makeFromCategory(?Category $category): self
    {
        $model = new self();
        if (!$category) {
            return $model;
        }

        $model->id = $category->getId();
        $model->title = $category->getTitle();

        return $model;
    }
}