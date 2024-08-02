'use client';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { categoryMappings, IngredientCategory } from "@/types/category";
import { setIngredientFilters } from "@/redux/slices/ingredientSlice";
import BaseCheckbox from '@/components/form/BaseCheckbox';

export default function SelectCategories() {
    const dispatch = useDispatch();
    const [selectedCategories, setSelectedCategories] = useState<Set<string>>(new Set());

    const handleSelectCategory = (category: string) => {
        const updatedCategories = new Set(selectedCategories);
        if (updatedCategories.has(category)) {
            updatedCategories.delete(category);
        } else {
            updatedCategories.add(category);
        }
        setSelectedCategories(updatedCategories);

        dispatch(setIngredientFilters(Array.from(updatedCategories)));
    };

    return (
        <div className='flex'>
            <div className='flex flex-wrap gap-4 md:gap-6'>
                {Object.keys(IngredientCategory).map((category) => {
                    const { imageSrc, label } = categoryMappings[category as keyof typeof categoryMappings] || {};

                    return (
                        <BaseCheckbox
                            key={category}
                            checked={selectedCategories.has(category)}
                            onChange={() => handleSelectCategory(category)}
                            className="w-[130px] md:w-[160px] md:h-[160px]"
                            id={`checkbox-${category}`}
                            imageSrc={imageSrc}
                            label={label}
                        />
                    );
                })}
            </div>
        </div>
    );
}
