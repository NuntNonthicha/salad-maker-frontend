"use client";

import { useFieldArray, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import useModal from '@/hooks/useModal';

import { useAppSelector } from '@/redux/store';
import { totalCaloriesSelector, totalCartItemsSelector } from '@/redux/slices/cartSlice';
import { IRecipe } from '@/types/ingredient';
import { useEffect } from 'react';
import { createRecipeSchema } from '@/components/form/validation/FormValidator';
import ActionButton from '@/components/buttons/Actionbutton';
import { LocationIcon } from '@/components/assets';
import ErrorMessage from '@/components/form/ErrorMessage';
import { BaseInput } from '@/components/form/BaseInput';

interface CreateRecipeModalProps {
    onCreate: (data: IRecipe) => void;
    isLoading?: boolean;
}

const CreateRecipeModal = ({ onCreate, isLoading }: CreateRecipeModalProps) => {
    const { Modal, openModal, closeModal } = useModal();
    const cartItems = useAppSelector((state) => state.cart.cartItems);
    const totalCalories = useAppSelector(totalCaloriesSelector);
    const totalAmount = useAppSelector(totalCartItemsSelector);
    // console.log("Cart Items:", cartItems);
    // console.log("Total Calories from Selector:", totalCalories);
    // console.log("Total Amount from Selector:", totalAmount);

    const form = useForm<z.infer<typeof createRecipeSchema>>({
        resolver: zodResolver(createRecipeSchema),
        defaultValues: {
            name: '',
            detail: [],
            totalAmount: 0,
            totalCalories: 0,
        },
    });

    const { control, handleSubmit, setError, formState: { errors }, watch } = form;

    useEffect(() => {
        form.reset({
            name: form.getValues('name'),
            detail: cartItems.map((item) => ({
                ingredient: item.product.ingredient || '',
                category: item.product.category || '',
                image: item.product.image || '',
                calories: item.product.calories || 0,
                amount: item.amount || 0,
            })),
            totalAmount: totalAmount,
            totalCalories: totalCalories,
        });
    }, [cartItems, totalAmount, totalCalories, form]);

    // console.log("Watched Name:", watch("name"));
    // console.log("Watched Total Amount:", watch("totalAmount"));
    // console.log("Watched Detail:", watch("detail"));
    // console.log("Watched Total Calories:", watch("totalCalories"));

    const { fields, append, remove } = useFieldArray({
        control,
        name: 'detail',
    });

    const handleConfirm = (data: z.infer<typeof createRecipeSchema>) => {
        //console.log("Form Data:", data);
        onCreate(data as unknown as IRecipe);
        closeModal();
    };

    return (
        <div className='min-w-[100px] md:min-w-[290px]'>
            <ActionButton
                className='rounded w-full h-full text-xl md:text-[32px]'
                type="button"
                variant='green'
                onClick={openModal}>
                Create Recipe
            </ActionButton>

            <Modal>
                <form onSubmit={form.handleSubmit(handleConfirm)}>
                    <div className='flex flex-col items-center px-10 py-6 gap-4'>
                        <LocationIcon className='text-default-yellow w-[72px] h-[72px]' />
                        <h1 className='text-xl font-bold'>Recipe Name</h1>

                        <BaseInput
                            {...form.register('name')}
                            className='w-full'
                            placeholder='Input Your Recipe Name...'
                        />

                        <ErrorMessage error={errors.detail?.message} />
                        <ErrorMessage error={errors.name?.message} />

                        <div className='flex gap-4 pt-8 pb-4 w-full lg:min-w-[450px] 2xl:w-[500px]'>
                            <ActionButton
                                type='reset'
                                variant='gray'
                                onClick={closeModal}
                                className='w-full'
                            >
                                Cancel
                            </ActionButton>
                            <ActionButton
                                type='submit'
                                variant='green'
                                className='w-full'
                                disabled={isLoading}
                            >
                                Create New Recipe
                            </ActionButton>
                        </div>
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default CreateRecipeModal;
