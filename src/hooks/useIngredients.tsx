import { useState, useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { fetchIngredients } from '@/redux/slices/ingredientSlice';
import { useSnackbar } from 'notistack';

export const useIngredients = () => {
    const dispatch = useAppDispatch();
    const { enqueueSnackbar } = useSnackbar();
    const ingredients = useAppSelector((state) => state.ingredients);
    const [isLoading, setIsLoading] = useState(false);

    const handleFetchIngredients = useCallback(async () => {
        setIsLoading(true);
        try {
            await dispatch(fetchIngredients());
        } catch (error: any) {
            enqueueSnackbar('Failed to fetch ingredients', { variant: 'error' });
        } finally {
            setIsLoading(false);
        }
    }, [dispatch, enqueueSnackbar]);

    return {
        ingredients,
        isLoading,
        handleFetchIngredients,
    };
};