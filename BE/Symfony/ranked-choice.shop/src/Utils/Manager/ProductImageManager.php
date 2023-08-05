<?php

namespace App\Utils\Manager;

use App\Entity\ProductImage;
use App\Utils\Filesystem\FilesystemWorker;
use Doctrine\ORM\EntityManagerInterface;

class ProductImageManager
{

    private EntityManagerInterface $entityManager;
    private FilesystemWorker $filesystemWorker;
    private string $uploadsTempDir;

    public function __construct(EntityManagerInterface $entityManager, FilesystemWorker $filesystemWorker, string $uploadsTempDir)
    {
        $this->entityManager = $entityManager;
        $this->filesystemWorker = $filesystemWorker;
        $this->uploadsTempDir = $uploadsTempDir;
    }

    public function saveImageForProduct(string $productDir, string $tempImageFileName=null): ?ProductImage
    {
        if (!$tempImageFileName){
            return null;
        }

        $this->filesystemWorker->createFolderIfItNotExists($productDir);
        $filenameId = uniqid();

        $imageSmall = $this->filesystemWorker->resizeImage($tempImageFileName, 100, 100);
        $imageSmallParams = [
            'width' => 60,
            'height' => null,
            'newFolder' => $productDir,
            'newFilename' => $filenameId . '_small.jpg'
        ];

        $imageMiddle = $this->filesystemWorker->resizeImage($tempImageFileName, 300, 300);
        $imageMiddleParams = [
            'width' => 430,
            'height' => null,
            'newFolder' => $productDir,
            'newFilename' => $filenameId . '_middle.jpg'
        ];

        $imageBig = $this->filesystemWorker->resizeImage($tempImageFileName, 600, 600);
        $imageBigParams = [
            'width' => 800,
            'height' => null,
            'newFolder' => $productDir,
            'newFilename' => $filenameId . '_big.jpg'
        ];

        $productImage = new ProductImage();
        $productImage->setFilenameSmall($filenameId . '_small.jpg');
        $productImage->setFilenameMiddle($filenameId . '_middle.jpg');
        $productImage->setFilenameBig($filenameId . '_big.jpg');

        return $productImage;

    }

}