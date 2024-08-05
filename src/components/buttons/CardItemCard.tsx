import { useAppDispatch } from "@/redux/store";
import { CartItem } from "@/types/ingredient";
import { decrement, increment } from "@/redux/slices/cartSlice";
import DisplayImage from "../common/DisplayImage";
import { cn } from "@/utils/className";
import IconButton from "./IconButton";

//แสดงรายการที่กดว่ามีอะไรบ้าง หน้า edit recipe
interface CartItemProps {
    cartItem: CartItem;
    isLast: boolean
    amount?: number;
}

const CartItemCard = ({ cartItem, isLast }: CartItemProps) => {
    const dispatch = useAppDispatch();

    const handleIncrease = () => dispatch(increment(cartItem.product));
    const handleDecrease = () => dispatch(decrement(cartItem.product));
    return (
        <div className={cn(
            'flex flex-col py-2',
            'w-full',
            isLast ? 'border-[#DBDBDB] border-b-2 pb-6' : 'border-none	',
        )}
        >
            <div className="flex items-center justify-between">
                <div className="flex gap-4">
                    <DisplayImage pathName={cartItem.product.image} className="w-[80px] h-[80px]" />

                    <div className="flex flex-col items-start">
                        <p className="text-[#2E2E2E] capitalize font-semibold">
                            {cartItem.product.ingredient}
                        </p>
                        <div className="flex items-center gap-2 py-2">
                            <IconButton
                                variant='gray'
                                className='text-black'
                                onClick={handleDecrease}
                            >
                                -
                            </IconButton>
                            <p className='text-sm text-[#A098AE]'>x{cartItem.amount}</p>
                            <IconButton
                                variant='gray'
                                className='text-black'
                                onClick={handleIncrease}
                            >
                                +
                            </IconButton>
                        </div>


                    </div>
                </div>

                <div className="flex text-lg font-semibold text-center gap-3">
                    <p>+{cartItem.amount * cartItem.product.calories}</p>
                    <p className="text-default-yellow">Cal</p>
                </div>
            </div>
        </div>
    );
};

export default CartItemCard;