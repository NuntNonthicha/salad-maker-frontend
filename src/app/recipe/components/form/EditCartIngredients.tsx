"use client"
import { useEffect, useMemo, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { decreaseIngredient, fetchRecipeById, increaseIngredient, removeIngredient, selectRecipeById, updateRecipe } from '@/redux/slices/recipeSlice';
import { RootState } from '@/redux/store';
import { SubmitHandler, useForm } from 'react-hook-form';
import ActionButton from '@/components/buttons/Actionbutton';
import { useSnackbar } from 'notistack';
import CartIngredientsItem from '../card/CartIngredientsItem';

const EditRecipePage = ({ id }: { id: string }) => {
    const { enqueueSnackbar } = useSnackbar();

    const dispatch = useAppDispatch();
    const recipe = useAppSelector((state: RootState) => selectRecipeById(state, id));

    const [isUpdating, setIsUpdating] = useState(false);

    useEffect(() => {
        if (id) {
            dispatch(fetchRecipeById(id));
        }
    }, [dispatch, id]);


    const newTotalCalories = useMemo(() => {
        return recipe?.detail?.reduce(
            (acc, item) => acc + item.calories * item.amount,
            0
        ) || 0;
    }, [recipe]);

    //  Increase,Decrease,Delete //
    const handleIncreaseIngredient = (ingredientId: string) => {
        dispatch(increaseIngredient({ recipeId: id, ingredientId, amount: 1 }));
    };

    const handleDecreaseIngredient = (ingredientId: string) => {
        dispatch(decreaseIngredient({ recipeId: id, ingredientId, amount: 1 }));
    };

    const handleDeleteIngredient = (ingredientId: string) => {
        if (recipe) {
            dispatch(removeIngredient({ recipeId: recipe.id, ingredientId }));
        }
    };

    //  Form //
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit: SubmitHandler<any> = async (formData) => {
        if (recipe) {
            setIsUpdating(true);
            try {
                await dispatch(updateRecipe({ id, recipeData: { ...recipe, ...formData } }));
                //console.log('Recipe updated successfully');
                enqueueSnackbar('Update Recipe Success', { variant: 'success' });

            } catch (error: any) {
                enqueueSnackbar(error.response?.data, { variant: 'error' });

            } finally {
                setIsUpdating(false);
            }
        }
    };

    if (!recipe) return <div>Loading...</div>;
    if (!recipe.detail) return <div>No ingredients found.</div>;

    return (
        <div className=' flex flex-col gap-4'>
            <h2 className='font-bold text-[24px]'>Your ingredients to make a salad Recipe</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='space-y-2'>
                    {recipe.detail.map(item => (
                        <CartIngredientsItem
                            key={item._id}
                            image={item.image}
                            ingredientName={item.ingredient}
                            calories={item.calories}
                            amount={item.amount}
                            onDelete={() => handleDeleteIngredient(item._id)}
                            onIncrese={() => handleIncreaseIngredient(item._id)}
                            onDecrease={() => handleDecreaseIngredient(item._id)}

                        />
                    ))}
                </div>

                <div className='border-x-0 border-b-0 border-t-2 my-4 border-[#DBDBDB]' />

                <div className='flex items-center justify-between py-4'>
                    <p className='text-[18px] font-medium'>Total Calorie</p>
                    <p className='text-[24px] font-medium'>
                        {newTotalCalories}{' '}
                        <span className='text-[24px] font-bold text-default-yellow'>
                            Cal
                        </span>
                    </p>
                </div>

                <ActionButton
                    type="submit"
                    variant='yellow'
                    className='w-full text-white text-lg font-bold rounded'
                    onClick={() => updateRecipe}
                >
                    Update Recipe
                </ActionButton>
            </form>
        </div>
    );
};

export default EditRecipePage;
