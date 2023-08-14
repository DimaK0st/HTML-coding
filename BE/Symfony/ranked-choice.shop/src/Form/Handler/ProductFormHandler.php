<?php

namespace App\Form\Handler;

use App\Entity\Product;
use App\Form\DTO\EditProductModel;
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

    public function processEditForm(EditProductModel $editProductModel, FormInterface $form): Product
    {
        $product = new Product();

        if ($editProductModel->id) {
            $product = $this->productManager->find($editProductModel->id);
        }

        $product->setTitle($editProductModel->title);
        $product->setDescription($editProductModel->description);
        $product->setPrice($editProductModel->price);
        $product->setQuantity($editProductModel->quantity);
        $product->setIsPublished($editProductModel->isPublished);
        $product->setIsDeleted($editProductModel->isDeleted);


        $this->productManager->save($product);
        $newImageFile = $form->get('newImage')->getData();
        $tempImageFileName = $newImageFile? $this->fileSaver->saveUploadedFileIntoTemp($newImageFile) : null;


        $this->productManager->updateProductImages($product, $tempImageFileName);
        $this->productManager->save($product);

        return $product;
    }
}