"use client"

import { createRecipe } from "@/redux/slices/recipeSlice";
import { useAppDispatch } from "@/redux/store";
import { IRecipe } from "@/types/ingredient";
import { useSnackbar } from "notistack";
import { useState } from "react";
import BottomCartAmount from "./BottomCartAmount";
import CreateRecipeModal from "@/app/recipe/components/form/CreateRecipeModal";


const FooterCart = () => {

    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useAppDispatch();
    const { enqueueSnackbar } = useSnackbar();

    const handleCreateRecipe = async (data: IRecipe) => {
        try {
            await dispatch(createRecipe(data));
            enqueueSnackbar('Recipe created Success', { variant: 'success' });

        } catch (error: any) {
            enqueueSnackbar(error.response?.data, { variant: 'error' });

        }
    };

    return (
        <footer className="sticky bottom-0 flex justify-between shadow-footer-shadow bg-white gap-3 p-4">
            <BottomCartAmount />
            <CreateRecipeModal
                onCreate={handleCreateRecipe}
                open={isOpen}
                onOpenChange={setIsOpen}
            />
        </footer>
    );
};

export default FooterCart;
