<?php

namespace App\Utils\Filesystem;

use Symfony\Component\Filesystem\Filesystem;

class FilesystemWorker
{
    private Filesystem $filesystem;

    public function __construct(Filesystem $filesystem)
    {
        $this->filesystem = $filesystem;
    }

    public function createFolderIfItNotExists(string $folderPath)
    {
        if (!$this->filesystem->exists($folderPath)) {
            $this->filesystem->mkdir($folderPath);
        }
    }
}