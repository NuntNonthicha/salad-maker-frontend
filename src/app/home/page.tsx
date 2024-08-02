"use client";

import React, { Dispatch, SetStateAction, useEffect } from 'react'
import FooterCart from './components/cart/FooterCart';
import HomeSectionLayout from './layout';
import { AppDispatch } from '@/redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { fetchIngredients, selectIngredients, setSearchTerm } from '@/redux/slices/ingredientSlice';
import SearchBar from '@/components/common/search-bar';
import IngredientList from './components/ingredients/IngredientList';
import HeroSection from './components/hero/HeroSection';

export default function HomePage() {

    const dispatch: AppDispatch = useDispatch();

    const { ingredients, searchTerm } = useSelector(selectIngredients);

    useEffect(() => {
        dispatch(fetchIngredients());
    }, [dispatch]);

    const handleSearchChange: Dispatch<SetStateAction<string>> = (newValue) => {
        dispatch(setSearchTerm(newValue));
    };

    return (
        <div className='w-full'>

            <div className='px-4 md:px-6'>
                <HomeSectionLayout>
                    <div className='flex flex-wrap gap-4 py-4 md:justify-between items-center'>
                        <h1 className='font-bold text-[36px]'>Let's Create...your own salad!!!</h1>
                        <SearchBar
                            keyword={searchTerm}
                            setKeyword={handleSearchChange}
                        />
                    </div>
                    <HeroSection />
                    <IngredientList />
                </HomeSectionLayout>
            </div>

            <FooterCart />
        </div>
    )
}
