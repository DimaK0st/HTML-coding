<?php

namespace App\Form\Handler;

use App\Entity\Product;
use App\Utils\File\FileSaver;
use App\Utils\Manager\ProductManager;
use Symfony\Component\Form\FormInterface;

class ProductFormHandler
{
    /**
     * @var ProductManager
     */
    private ProductManager $productManager;
    private FileSaver $fileSaver;

    public function __construct(ProductManager $productManager, FileSaver $fileSaver)
    {
        $this->productManager = $productManager;
        $this->fileSaver = $fileSaver;
    }

    public function processEditForm(Product $product, FormInterface $form): Product
    {
        $this->productManager->save($form->getData());
        $newImageFile = $form->get('newImage')->getData();
        $tempImageFileName = $newImageFile? $this->fileSaver->saveUploadedFileIntoTemp($newImageFile) : null;


        $this->productManager->updateProductImages($product, $tempImageFileName);
        $this->productManager->save($product);

        return $product;
    }
}