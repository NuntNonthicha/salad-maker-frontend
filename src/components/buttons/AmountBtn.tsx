import React from "react";
import { FaCirclePlus } from "react-icons/fa6";
import { FaMinusCircle } from "react-icons/fa";

interface Props {
    onIncrease: () => void;
    onDecrease: () => void;
    amount: number;
}
const AmountBtn = (props: Props) => {
    return (
        <div className="flex gap-3 justify-center items-center">
            <FaMinusCircle
                className='text-default-yellow w-10 h-10 cursor-pointer hover:text-dark-yellow'
                onClick={props.onDecrease}
            >
            </FaMinusCircle>
            <h2 className="text-[24px] font-bold">{props.amount}</h2>
            <FaCirclePlus
                className='text-default-yellow w-10 h-10 cursor-pointer hover:text-dark-yellow'
                onClick={props.onIncrease}
            >
            </FaCirclePlus>
        </div>
    );
};

export default AmountBtn;
