<?php

namespace App\Controller\Main;

use App\Repository\ProductRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;

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
