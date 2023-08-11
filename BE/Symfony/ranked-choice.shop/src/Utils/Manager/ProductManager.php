<?php

namespace App\Utils\Manager;

use App\Entity\Product;
use App\Entity\ProductImage;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\Persistence\ObjectRepository;

class ProductManager extends AbstractBaseManager
{
    private string $productImagesDir;
    private ProductImageManager $imageManager;

    public function __construct(EntityManagerInterface $entityManager, ProductImageManager $imageManager, string $productImagesDir)
    {
        parent::__construct($entityManager);
        $this->productImagesDir = $productImagesDir;
        $this->imageManager = $imageManager;
    }

    public function getRepository(): ObjectRepository
    {
        return $this->entityManager->getRepository(Product::class);
    }

    public function remove(object $product)
    {
        $product->setIsDeleted(true);
        $this->save($product);
    }

    /**
     * @param Product $product
     * @return string
     */
    public function getProductImagesDir(Product $product): string
    {
        return sprintf('%s/%s', $this->productImagesDir, $product->getId());
    }

    public function updateProductImages(Product $product, string $tempImageFileName = null): Product
    {
        if (!$tempImageFileName) {
            return $product;
        }

        $productImageDir = $this->getProductImagesDir($product);
        $productImage = $this->imageManager->saveImageForProduct($productImageDir, $tempImageFileName);

        $productImage->setProduct($product);
        $product->addProductImage($productImage);

        return $product;
    }

}