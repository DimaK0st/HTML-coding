<?php

namespace App\Controller\Main;

use App\Entity\Cart;
use App\Entity\CartProduct;
use App\Repository\CartProductRepository;
use App\Repository\CartRepository;
use App\Repository\ProductRepository;
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
    public function saveCart(Request $request, CartRepository $cartRepository, CartProductRepository $cartProductRepository, ProductRepository $productRepository): Response
    {
        $sessionId = $request->cookies->get('PHPSESSID');
        $productId = $request->request->get('productId');

        $product = $productRepository->findOneBy(['uuid'=>$productId]);

        $cart = $cartRepository->findOneBy(['sessionId'=>$sessionId]);

        if (!$cart) {
            $cart = new Cart();
            $cart->setSessionId($sessionId);
        }

        $cartProduct = $cartProductRepository->findOneBy(['cart'=>$cart, 'product'=>$product]);

        if ($cartProduct) {
            $cartProduct->setQuantity($cartProduct->getQuantity() + 1);
        } else {
            $cartProduct = new CartProduct();
            $cartProduct->setCart($cart);
            $cartProduct->setProduct($product);
            $cartProduct->setQuantity(1);
        }


        $entityManager = $this->getDoctrine()->getManager();
        $entityManager->persist($cart);
        $entityManager->persist($cartProduct);
        $entityManager->flush();


        return new JsonResponse([
            'success' => true,
            'data' => [
                'message' => 'Cart saved successfully',
            ]
        ]);
    }
}
