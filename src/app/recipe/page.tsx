"use client";

import React from 'react'
import AllRecipe from './allRecipe/page';
import RecipeSectionLayout from './layout';

export default function ReceipePage() {
    return (
        <div className='w-full'>
            <RecipeSectionLayout>
                <h1 className='font-bold text-[36px] py-4'>Recipe</h1>
                <AllRecipe />
            </RecipeSectionLayout>
        </div>
    )
}
