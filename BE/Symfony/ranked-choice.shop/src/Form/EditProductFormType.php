<?php

namespace App\Form;

use App\Entity\Product;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
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
                    'class' => 'form-control',
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
                    'class' => 'form-control',
                    'placeholder' => 'Enter product price',
                    'min' => '0',
                    'step' => '0.03',
                ],
            ])
            ->add('quantity', IntegerType::class,[
                'label' => 'Product quantity',
                'attr' => [
                    'class' => 'form-control',
                    'placeholder' => 'Enter product quantity',
                    'min' => '0',
                ],
            ])
            ->add('description', TextareaType::class, [
                'label' => 'Product description',
                'attr' => [
                    'class' => 'form-control',
                    'placeholder' => 'Enter product description',
                ],
            ])
            ->add('newImage', FileType::class, [
                'label' => 'Choose new image',
                'mapped' => false,
                'required' => false,
                'attr' => [
                    'class' => 'form-control-file',
                ],
            ])
            ->add('isPublished', CheckboxType::class, [
                'label' => 'Publish product?',
                'required' => false,
                'attr' => [
                    'class' => 'form-check-input',
                ],
                'label_attr' => [
                    'class' => 'form-check-label',
                ],
            ])
            ->add('isDeleted', CheckboxType::class, [
                'label' => 'Delete product?',
                'required' => false,
                'attr' => [
                    'class' => 'form-check-input',
                ],
                'label_attr' => [
                    'class' => 'form-check-label',
                ],
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Product::class,
        ]);
    }
}
