<?php

namespace App\Controller;

use App\Repository\ProductRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use function Symfony\Component\DependencyInjection\Loader\Configurator\param;

class EmbedController extends AbstractController
{

    public function similarProducts(ProductRepository $productRepository, $productCount = 2, $categoryId = null): Response
    {
        $params = [];
        if ($categoryId) {
            $params['category'] = $categoryId;
        }
        $products = $productRepository->findBy($params, ['id' => 'DESC'], $productCount);

        return $this->render('main/_embed/_similar_products.html.twig', [
            'products' => $products
        ]);
    }
}
