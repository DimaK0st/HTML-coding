<?php

namespace App\Utils\Manager;

use App\Entity\Cart;
use App\Entity\CartProduct;
use App\Entity\Order;
use App\Entity\OrderProduct;
use App\Entity\StaticStorage\OrderStaticStorage;
use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\Persistence\ObjectRepository;

class OrderManager extends AbstractBaseManager {

    private CartManager $cartManager;

    public function __construct(EntityManagerInterface $entityManager, CartManager $cartManager)
    {
        parent::__construct($entityManager);
        $this->cartManager = $cartManager;
    }

    public function getRepository(): ObjectRepository
    {
        return $this->entityManager->getRepository(Order::class);
    }

    /**
     * @param string $sessionId
     * @param User $user
     * @return null
     */
    public function createOrderFromCartBySessionId(string $sessionId, User $user){
        $cart = $this->cartManager->getRepository()->findOneBy(['sessionId' => $sessionId]);
        if (!$cart){
            return null;
        }

        return $this->createOrderFromCart($cart, $user);
    }

    /**
     * @param Cart $cart
     * @param User $user
     * @return void
     */
    public function createOrderFromCart(Cart $cart, User $user){
        $order = new Order();
        $order->setOwner($user);
        $order->setStatus(OrderStaticStorage::ORDER_STATUS_CREATED);

        $orderTotalPrice = 0;
        /**
         * @var CartProduct $cartProduct
         */
        foreach ($cart->getCartProducts() as $cartProduct){
            $product = $cartProduct->getProduct();
            $orderProduct = new OrderProduct();
            $orderProduct->setProduct($product);
            $orderProduct->setAppOrder($order);
            $orderProduct->setQuantity($cartProduct->getQuantity());
            $orderProduct->setPricePerOne($product->getPrice());

            $order->addOrderProduct($orderProduct);
            $this->entityManager->persist($orderProduct);


            $orderTotalPrice += $orderProduct->getQuantity() * $orderProduct->getPricePerOne();
        }
        $order->setTotalPrice($orderTotalPrice);
        $order->setUpdatedAt(new \DateTimeImmutable());

        $this->entityManager->persist($order);
        $this->entityManager->flush();

        $this->cartManager->remove($cart);
        dd($order);
    }

    /**
     * @param Order $order
     * @return void
     */
    public function remove(object $order): void
    {
        $order->setIsDeleted(true);
        $this->save($order);
    }
}