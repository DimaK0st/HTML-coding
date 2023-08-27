<?php

namespace App\Controller\Main;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/api", name="main_api_")
 */
class CartApiController extends AbstractController
{
    /**
     * @Route("/cart", methods="POST", name="cart_save")
     */
    public function saveCart(Request $request): Response
    {
        $sessionId = $request->cookies->get('PHPSESSID');
        $productId = $request->request->get('productId');

        return new JsonResponse([
            'success' => true,
            'data' => [
                'message' => 'Cart saved successfully',
            ]
        ]);
    }
}
