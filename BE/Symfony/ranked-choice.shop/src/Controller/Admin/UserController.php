<?php

namespace App\Controller\Admin;

use App\Entity\Category;
use App\Form\Admin\EditCategoryFormType;
use App\Form\DTO\EditCategoryModel;
use App\Form\Handler\CategoryFormHandler;
use App\Repository\CategoryRepository;
use App\Repository\UserRepository;
use App\Utils\Manager\OrderManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/admin/user", name="admin_user_")
 */
class UserController extends AbstractController
{
    /**
     * @Route("/list", name="list")
     */
    public function list(UserRepository $userRepository): Response
    {
        $users = $userRepository->findBy(['isDeleted' => false], ['id' => 'DESC']);

        return $this->render('admin/user/list.html.twig', [
            'users' => $users,
        ]);
    }

    /**
     * @Route("/edit/{id}", name="edit")
     * @Route("/add", name="add")
     */
    public function edit(Request $request, CategoryFormHandler $categoryFormHandler, Category $category = null): Response
    {
//        $editCategoryModel = EditCategoryModel::makeFromCategory($category);
//
//        $form = $this->createForm(EditCategoryFormType::class, $editCategoryModel);
//        $form->handleRequest($request);
//
//        if ($form->isSubmitted() && $form->isValid()) {
//            $category = $categoryFormHandler->processEditForm($editCategoryModel);
//
//            $this->addFlash('success', 'Category saved');
//
//            return $this->redirectToRoute('admin_category_edit', ['id' => $category->getId()]);
//        }
//
//        if ($form->isSubmitted() && !$form->isValid()) {
//            $this->addFlash('warning', 'Form is not valid');
//        }

        return $this->render('admin/category/edit.html.twig', [
//            'form' => $form->createView(),
            'category' => $category,
        ]);
    }

    /**
     * @Route("/delete/{id}", name="delete")
     */
    public function delete(Category $category, OrderManager $categoryManager): Response
    {
//        $categoryManager->remove($category);
//
//        $this->addFlash('success', 'Category deleted');

        return $this->redirectToRoute('admin_category_list');
    }
}
