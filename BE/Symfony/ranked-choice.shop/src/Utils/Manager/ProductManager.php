<?php

namespace App\Utils\Manager;

use App\Entity\Product;
use Doctrine\ORM\EntityManagerInterface;

class ProductManager
{
    private EntityManagerInterface $entityManager;
    private string $productImagesDir;
    private ProductImageManager $imageManager;

    public function __construct(EntityManagerInterface $entityManager, ProductImageManager $imageManager, string $productImagesDir)
    {
        $this->entityManager = $entityManager;
        $this->productImagesDir = $productImagesDir;
        $this->imageManager = $imageManager;
    }

    public function getRepository()
    {
        return $this->entityManager->getRepository(Product::class);
    }

    public function save(Product $product)
    {
        $this->entityManager->persist($product);
        $this->entityManager->flush();
    }

    public function remove(Product $product)
    {
        $this->entityManager->remove($product);
        $this->entityManager->flush();
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
        if (!$tempImageFileName){
            return $product;
        }

        $productImageDir = $this->getProductImagesDir($product);

        $productImage = $this->imageManager->saveImageForProduct($productImageDir, $tempImageFileName);

        $productImage->setProduct($product);
        $product->addProductImage($productImage);
        return $product;
        dd($productImageDir);
    }
}