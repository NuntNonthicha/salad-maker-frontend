"use client";

import { totalCaloriesSelector, totalCartItemsSelector } from "@/redux/slices/cartSlice";
import { useAppSelector } from "@/redux/store";
import { FaShoppingCart } from "react-icons/fa";
import React from "react";

//footer yellow 
interface Props {
    className?: string;
}
const BottomCartAmount = (props: Props) => {

    const totalAmout = useAppSelector(totalCartItemsSelector);
    const totalCalories = useAppSelector(totalCaloriesSelector);

    return (
        <div className="flex justify-between items-center rounded w-full p-4 bg-default-yellow">
            <div className="flex justify-center items-center gap-3">
                <div className="flex items-center font-bold rounded bg-white p-3">
                    <span className="text-[32px] text-default-yellow "> {totalAmout}</span>
                </div>
                <h1 className="text-xl md:text-[32px] text-white">Your Ingredients</h1>
            </div>

            <h1 className="pl-2 text-xl md:text-[32px] text-white">{totalCalories} Cal</h1>

        </div>
    );
};

export default BottomCartAmount;
