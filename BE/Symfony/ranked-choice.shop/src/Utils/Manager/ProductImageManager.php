<?php

namespace App\Utils\Manager;

use App\Entity\ProductImage;
use App\Utils\File\ImageResizer;
use App\Utils\Filesystem\FilesystemWorker;
use Doctrine\ORM\EntityManagerInterface;

class ProductImageManager
{

    private EntityManagerInterface $entityManager;
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
        $this->entityManager = $entityManager;
        $this->filesystemWorker = $filesystemWorker;
        $this->uploadsTempDir = $uploadsTempDir;
        $this->imageResizer = $imageResizer;
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
        $imageMiddle = $this->imageResizer->resizeImageAndSave($this->uploadsTempDir, $tempImageFileName, $imageSmallParams);

        $imageBigParams = [
            'width' => 800,
            'height' => null,
            'newFolder' => $productDir,
            'newFilename' => $filenameId . '_big.jpg'
        ];
        $imageBig = $this->imageResizer->resizeImageAndSave($this->uploadsTempDir, $tempImageFileName, $imageSmallParams);

        $productImage = new ProductImage();
        $productImage->setFilenameSmall($filenameId . '_small.jpg');
        $productImage->setFilenameMiddle($filenameId . '_middle.jpg');
        $productImage->setFilenameBig($filenameId . '_big.jpg');

        return $productImage;

    }

}