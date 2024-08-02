"use client";

import { BiEdit } from "react-icons/bi";
import IconButton from '@/components/buttons/IconButton';
import React from 'react'
import { useRouter } from "next/navigation";
import { IAllRecipe } from "@/types/ingredient";
import DeleteModal from "@/components/modals/DeleteModal";
import { useAppDispatch } from "@/redux/store";
import { fetchRecipes } from "@/redux/slices/recipeSlice";
import { API_PATH } from "@/config/api";


export default function RecipeCard({ id, name, totalCalories }: IAllRecipe) {

    const router = useRouter()

    const dispatch = useAppDispatch();

    const loadRecipes = () => {
        dispatch(fetchRecipes());
    };

    return (
        <div className='flex flex-col justify-between bg-card-recipe w-[260px] h-[300px] rounded p-4'>
            <div className='flex flex-col w-full h-fit rounded bg-white p-4'>
                <p>{name}</p>
                <h1 className='font-bold gap-2'>{totalCalories} <span className='text-default-yellow'>Cal</span></h1>

            </div>
            <div className="flex w-full justify-between gap-2">
                <DeleteModal
                    loadData={loadRecipes}
                    api={API_PATH.DELETE_RECIPE(id)}
                />
                <IconButton
                    icon={BiEdit}
                    variant="black"
                    className="w-full md:h-[45px] bg-white font-medium text-lg"
                    onClick={() => router.push(`/recipe/edit/${id}`)}>
                    Edit
                </IconButton>

            </div>

        </div>

    )
}
