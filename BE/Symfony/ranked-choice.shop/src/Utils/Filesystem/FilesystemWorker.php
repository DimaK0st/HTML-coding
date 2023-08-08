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

    public function removeFolder(string $folderPath)
    {
        if ($this->filesystem->exists($folderPath)) {
            $this->filesystem->remove($folderPath);
        }
    }

    public function remove(string $filePath)
    {
        if ($this->filesystem->exists($filePath)) {
            $this->filesystem->remove($filePath);
        }
    }
}