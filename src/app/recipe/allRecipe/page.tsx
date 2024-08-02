"use client";

import React, { useEffect } from 'react';
import RecipeCard from '../components/card/RecipeCard';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { fetchRecipes, selectAllRecipes } from '@/redux/slices/recipeSlice';
import { IRecipe } from '@/types/ingredient';

export default function AllRecipe() {
    const dispatch = useAppDispatch();
    const recipes = useAppSelector(selectAllRecipes);

    useEffect(() => {
        dispatch(fetchRecipes());
        const interval = setInterval(() => {
            dispatch(fetchRecipes());
        }, 5000);

        return () => clearInterval(interval);
    }, [dispatch]);


    return (
        <div className='w-full p-6 bg-white rounded space-y-4'>
            <h2 className='font-bold text-[24px]'>Your Recipe</h2>
            <div className="flex flex-wrap gap-4">
                {recipes.map((recipe: IRecipe) => (
                    <RecipeCard
                        key={recipe.id}
                        id={recipe.id}
                        name={recipe.name}
                        totalCalories={recipe.totalCalories}
                    />
                ))}
            </div>
        </div>
    );
}
