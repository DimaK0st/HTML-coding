<?php

namespace App\Form\DTO;

use App\Entity\Product;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\Validator\Constraints as Assert;

class EditProductModel
{
    /**
     * @var int|null
     */
    public ?int $id = null;

    /**
     * @Assert\NotBlank(message="Please enter product title")
     * @var string|null
     */
    public ?string $title = null;

    /**
     * @Assert\NotBlank(message="Please enter product description")
     * @var string|null
     */
    public ?string $description = null;

    /**
     * @Assert\NotBlank(message="Please enter product price")
     * @Assert\GreaterThanOrEqual(value="0", message="Price must be greater than or equal to 0")
     * @var string|null
     */
    public ?string $price = null;

    /**
     * @Assert\NotBlank(message="Please enter product quantity")
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
     * @Assert\NotBlank(message="Please select image")
     * @Assert\File(mimeTypes={"image/jpeg", "image/png"}, maxSize="5M", mimeTypesMessage="Please upload valid image")
     * @var UploadedFile|null
     */
    public ?UploadedFile $newImage = null;

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