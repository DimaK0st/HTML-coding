<?php

namespace App\Controller\Admin;

use App\Entity\Order;
use App\Entity\StaticStorage\OrderStaticStorage;
use App\Form\Admin\EditOrderFormType;
use App\Form\DTO\EditCategoryModel;
use App\Repository\OrderRepository;
use App\Utils\Manager\OrderManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/admin/order", name="admin_order_")
 */
class OrderController extends AbstractController
{
    /**
     * @Route("/list", name="list")
     */
    public function list(OrderRepository $categoryRepository): Response
    {
        $orders = $categoryRepository->findBy(['isDeleted' => false], ['id' => 'DESC']);

        return $this->render('admin/order/list.html.twig', [
            'orders' => $orders,
            'orderStatuses' => OrderStaticStorage::getStatuses(),
        ]);
    }

    /**
     * @Route("/edit/{id}", name="edit")
     * @Route("/add", name="add")
     */
    public function edit(Request $request, Order $order = null): Response
    {
        if (!$order) {
            $order = new Order();
        }

        $form = $this->createForm(EditOrderFormType::class, $order);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            dd($order);

            $this->addFlash('success', 'Category saved');

            return $this->redirectToRoute('admin_order_edit', ['id' => $order->getId()]);
        }

        if ($form->isSubmitted() && !$form->isValid()) {
            $this->addFlash('warning', 'Form is not valid');
        }

        return $this->render('admin/order/edit.html.twig', [
            'form' => $form->createView(),
            'order' => $order,
        ]);
    }

    /**
     * @Route("/delete/{id}", name="delete")
     */
    public function delete(Order $order, OrderManager $orderManager): Response
    {
        $orderManager->remove($order);

        $this->addFlash('success', 'Order deleted');

        return $this->redirectToRoute('admin_category_list');
    }
}
