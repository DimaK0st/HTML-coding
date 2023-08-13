<?php

namespace App\Form\DTO;

use App\Entity\Product;

class EditProductModel
{
    /**
     * @var int|null
     */
    public ?int $id = null;

    /**
     * @var string|null
     */
    public ?string $title = null;

    /**
     * @var string|null
     */
    public ?string $description = null;

    /**
     * @var string|null
     */
    public ?string $price = null;

    /**
     * @var int|null
     */
    public ?int $quantity = null;

    /**
     * @var bool
     */
    public ?bool $isPublished = null;

    /**
     * @var bool|null
     */
    public ?bool $isDeleted = null;

    /**
     * @var string|null
     */
    public ?string $newImage = null;

    public static function makeFromProduct(?Product $product): self
    {
        $model = new self();

        if (!$product) {
            return $model;
        }

        $model->id = $product->getId();
        $model->title = $product->getTitle();
        $model->description = $product->getDescription();
        $model->price = $product->getPrice();
        $model->quantity = $product->getQuantity();
        $model->isPublished = $product->getIsPublished();
        $model->isDeleted = $product->getIsDeleted();

        return $model;
    }
}