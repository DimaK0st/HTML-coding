<?php

namespace App\Form;

use App\Entity\Product;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\Validator\Constraints\NotBlank;

class EditProductFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('title', TextType::class, [
                'label' => 'Product title',
                'attr' => [
                    'placeholder' => 'Enter product title',
                ],
                'constraints' => [
                    new NotBlank([], 'Please enter product title'),
                    new Length(['min' => 3]),
                ],
            ])
            ->add('price', NumberType::class, [
                'label' => 'Product price',
                'scale' => 2,
                'html5' => true,
                'attr' => [
                    'placeholder' => 'Enter product price',
                    'step' => '0.03',
                ],
            ])
            ->add('quantity')
            ->add('description')
            ->add('isPublished')
            ->add('isDeleted')
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Product::class,
        ]);
    }
}
