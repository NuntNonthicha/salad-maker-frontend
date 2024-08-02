"use client";

import { decrement, increment, productAmountInCartSelector } from "@/redux/slices/cartSlice";
import React from "react";
import { IIngredientData } from "@/types/ingredient";
import { FaCirclePlus } from "react-icons/fa6";
import AmountBtn from "@/components/buttons/AmountBtn";
import { useAppDispatch, useAppSelector } from "@/redux/store";

interface Props {
    product: IIngredientData;
}

const AddToCartButton = (props: Props) => {
    const amount = useAppSelector((state) =>
        productAmountInCartSelector(state, props.product._id)
    );
    const dispatch = useAppDispatch();
    if (!amount)
        return (
            <div className="flex justify-center">
                <FaCirclePlus
                    className='text-default-yellow w-10 h-10 cursor-pointer hover:text-dark-yellow'
                    onClick={() => dispatch(increment(props.product))}
                />

            </div>
        );
    return (
        <AmountBtn
            onDecrease={() => dispatch(decrement(props.product))}
            onIncrease={() => dispatch(increment(props.product))}
            amount={amount}
        />
    );
};

export default AddToCartButton;
