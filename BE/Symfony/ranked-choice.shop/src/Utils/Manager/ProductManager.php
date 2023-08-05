<?php

namespace App\Utils\Manager;

use App\Entity\Product;
use Doctrine\ORM\EntityManagerInterface;

class ProductManager
{
    private EntityManagerInterface $entityManager;
    private string $productImagesDir;

    public function __construct(EntityManagerInterface $entityManager, string $productImagesDir)
    {
        $this->entityManager = $entityManager;
        $this->productImagesDir = $productImagesDir;
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

//        $productImage = $this->productImageManager->saveImageForProduct($product, $tempImageFileName);
//        $product->addProductImage($productImage);
//        return $product;
        dd($productImageDir);
    }
}