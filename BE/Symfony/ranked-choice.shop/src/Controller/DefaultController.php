<?php

namespace App\Controller;

use App\Entity\Product;
use App\Form\EditProductFormType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DefaultController extends AbstractController
{
    /**
     * @Route("/", name="homepage")
     */
    public function index(): Response
    {
        $em = $this->getDoctrine()->getManager();
        $productList = $em->getRepository(Product::class)->findAll();

        return $this->render('main/default/index.html.twig', [
            'controller_name' => 'DefaultController',
        ]);
    }

    /**
     * @Route("/product-add", name="product_add_old")
     */
    public function productAdd(): Response
    {
        $product = new Product();
        $product->setTitle('Product ' . rand(1, 100));
        $product->setDescription('Description ' . rand(1, 100));
        $product->setPrice(rand(10, 100));
        $product->setQuantity(rand(1, 10));

        $em = $this->getDoctrine()->getManager();
        $em->persist($product);
        $em->flush();

        return $this->redirectToRoute('homepage');
    }

    /**
     * @Route("/edit-product/{id}", methods="GET|POST", name="product_edit", requirements={"id"="\d+"})
     * @Route("/add-product", methods="GET|POST", name="product_add")
     */
    public function editProduct(Request $request, int $id = null): Response
    {
        $em = $this->getDoctrine()->getManager();

        if ($id) {
            $product = $em->getRepository(Product::class)->find($id);
        } else {
            $product = new Product();
        }

        // Old type set form
//        $form = $this->createFormBuilder($product)
//            ->add('title', TextType::class)
//            ->add('price', NumberType::class)
//            ->add('quantity', IntegerType::class)
//            ->add('description', TextType::class)
//            ->getForm();

        $form = $this->createForm(EditProductFormType::class, $product);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em->persist($product);
            $em->flush();

            return $this->redirectToRoute('product_edit', ['id' => $product->getId()]);
        }

        return $this->render('main/default/edit_product.html.twig', [
            'form' => $form->createView(),
        ]);
    }
}
