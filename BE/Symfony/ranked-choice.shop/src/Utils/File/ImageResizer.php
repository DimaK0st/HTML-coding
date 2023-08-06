<?php

namespace App\Utils\File;

use Imagine\Gd\Imagine;

class ImageResizer
{
    private Imagine $imagine;

    public function __construct()
    {
        $this->imagine = new Imagine();
    }

    public function resizeImageAndSave(string $originalFileFolder, string $originalFileName, array $targetParams){
        $originalFilePath = $originalFileFolder . '/' . $originalFileName;

        list($imageWidth, $imageHeight) = getimagesize($originalFilePath);
        dd($imageWidth, $imageHeight);

    }

}