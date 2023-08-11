<?php

namespace App\Utils\Manager;

use App\Entity\Product;
use App\Entity\ProductImage;
use App\Utils\File\ImageResizer;
use App\Utils\Filesystem\FilesystemWorker;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\Persistence\ObjectRepository;

class ProductImageManager extends AbstractBaseManager
{
    private FilesystemWorker $filesystemWorker;
    private string $uploadsTempDir;
    private ImageResizer $imageResizer;

    /**
     * @param EntityManagerInterface $entityManager
     * @param FilesystemWorker $filesystemWorker
     * @param ImageResizer $imageResizer
     * @param string $uploadsTempDir
     */
    public function __construct(EntityManagerInterface $entityManager, FilesystemWorker $filesystemWorker, ImageResizer $imageResizer, string $uploadsTempDir)
    {
        parent::__construct($entityManager);
        $this->filesystemWorker = $filesystemWorker;
        $this->uploadsTempDir = $uploadsTempDir;
        $this->imageResizer = $imageResizer;
    }

    /**
     * @return ObjectRepository
     */
    public function getRepository(): ObjectRepository
    {
        return $this->entityManager->getRepository(ProductImage::class);
    }

    public function saveImageForProduct(string $productDir, string $tempImageFileName=null): ?ProductImage
    {
        if (!$tempImageFileName){
            return null;
        }

        $this->filesystemWorker->createFolderIfItNotExists($productDir);
        $filenameId = uniqid();

        $imageSmallParams = [
            'width' => 60,
            'height' => null,
            'newFolder' => $productDir,
            'newFilename' => $filenameId . '_small.jpg'
        ];
        $imageSmall = $this->imageResizer->resizeImageAndSave($this->uploadsTempDir, $tempImageFileName, $imageSmallParams);

        $imageMiddleParams = [
            'width' => 430,
            'height' => null,
            'newFolder' => $productDir,
            'newFilename' => $filenameId . '_middle.jpg'
        ];
        $imageMiddle = $this->imageResizer->resizeImageAndSave($this->uploadsTempDir, $tempImageFileName, $imageMiddleParams);

        $imageBigParams = [
            'width' => 800,
            'height' => null,
            'newFolder' => $productDir,
            'newFilename' => $filenameId . '_big.jpg'
        ];
        $imageBig = $this->imageResizer->resizeImageAndSave($this->uploadsTempDir, $tempImageFileName, $imageBigParams);

        $productImage = new ProductImage();
        $productImage->setFilenameSmall($imageSmall);
        $productImage->setFilenameMiddle($imageMiddle);
        $productImage->setFilenameBig($imageBig);

        return $productImage;

    }

    public function removeImageFromProduct(ProductImage $productImage, string $productImageDir): void
    {
        $imagePath = [
            $productImageDir. '/'.$productImage->getFilenameSmall(),
            $productImageDir. '/'.$productImage->getFilenameMiddle(),
            $productImageDir. '/'.$productImage->getFilenameBig(),
        ];

        foreach ($imagePath as $path){
            $this->filesystemWorker->remove($path);
        }

        $product=$productImage->getProduct();
        $product->removeProductImage($productImage);

        $this->entityManager->flush();
    }
}