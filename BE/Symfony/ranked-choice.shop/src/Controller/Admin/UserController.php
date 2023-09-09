<?php

namespace App\Controller\Admin;

use App\Entity\Category;
use App\Entity\StaticStorage\UserStaticStorage;
use App\Entity\User;
use App\Form\Admin\EditCategoryFormType;
use App\Form\Admin\EditUserFormType;
use App\Form\DTO\EditCategoryModel;
use App\Form\Handler\CategoryFormHandler;
use App\Form\Handler\UserFormHandler;
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
        if (!$this->isGranted(UserStaticStorage::ROLE_SUPER_ADMIN)) {
            $this->redirectToRoute('admin_dashboard_show');
        }

        $users = $userRepository->findBy(['isDeleted' => false], ['id' => 'DESC']);

        return $this->render('admin/user/list.html.twig', [
            'users' => $users,
        ]);
    }

    /**
     * @Route("/edit/{id}", name="edit")
     * @Route("/add", name="add")
     */
    public function edit(Request $request,UserFormHandler $formHandler, User $user = null): Response
    {
        if (!$this->isGranted(UserStaticStorage::ROLE_SUPER_ADMIN)) {
            $this->redirectToRoute('admin_dashboard_show');
        }

        if (!$user) {
            $user = new User();
        }

        $form = $this->createForm(EditUserFormType::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $user = $formHandler->processEditForm($form);

            $this->addFlash('success', 'User saved');

            return $this->redirectToRoute('admin_user_edit', ['id' => $user->getId()]);
        }

        if ($form->isSubmitted() && !$form->isValid()) {
            $this->addFlash('warning', 'Form is not valid');
        }

        return $this->render('admin/user/edit.html.twig', [
            'form' => $form->createView(),
            'user' => $user,
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
