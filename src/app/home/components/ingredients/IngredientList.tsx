"use client"

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IIngredientData } from "@/types/ingredient";
import { AppDispatch } from "@/redux/store";
import { fetchIngredients, selectIngredients } from "@/redux/slices/ingredientSlice";
import SelectCategories from "@/app/home/components/ingredients/SelectCategory";
import IngredientCard from "@/app/home/components/ingredients/IngredientCard";
import SearchBar from "@/components/common/search-bar";
import SearchField from "@/components/common/search-field";

const IngredientList = () => {

    const dispatch: AppDispatch = useDispatch();

    const { filteredIngredients, loading } = useSelector(selectIngredients);


    useEffect(() => {
        dispatch(fetchIngredients());
    }, [dispatch]);


    if (loading) {
        return <p className="text-center">Loading...</p>;
    }

    return (
        <div className="w-full">
            <div className="flex flex-col gap-6 py-4">
                <h2 className="text-[24px] font-bold">Select Category</h2>
                <SelectCategories />
            </div>

            <h2 className="text-[24px] font-bold">Choose your ingredients to make a salad</h2>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4 py-4">
                {filteredIngredients.map((ingredient: IIngredientData) => (
                    <IngredientCard key={ingredient._id} product={ingredient} />
                ))}
            </div>
        </div>
    );
};

export default IngredientList;
