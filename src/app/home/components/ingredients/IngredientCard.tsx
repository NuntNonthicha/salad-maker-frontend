import { IIngredientData } from "@/types/ingredient";
import React from "react";
import DisplayImage from "@/components/common/DisplayImage";
import AddToCartButton from "./AddToCartButton";

interface Props {
    product: IIngredientData;
}

const IngredientCard = (props: Props) => {
    return (
        <div className="flex flex-col p-4 gap-1 bg-white rounded hover:drop-shadow-md w-full md:max-w-[350px]">
            <div className='flex md:flex-col justify-center items-center gap-2'>
                <DisplayImage pathName={props.product.image} className="w-full max-h-[200px] xl:min-w-[300px]" />

                <div className="flex flex-col w-full">
                    <p className='text-lg capitalize text-wrap '>{props.product.ingredient}</p>
                    <h1 className='text-[24px] font-bold'> {props.product.calories}<span className='pl-2 text-[28px] font-medium text-default-yellow'>Cal</span></h1>
                    <div className='flex w-full md:justify-end'>
                        <AddToCartButton product={props.product} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IngredientCard;
