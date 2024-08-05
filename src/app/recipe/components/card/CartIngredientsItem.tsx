import IconButton from '@/components/buttons/IconButton'
import DisplayImage from '@/components/common/DisplayImage'

type IngredientItemProps = {
    image: string
    ingredientName: string
    calories: number
    amount: number
    onDelete: () => void
    onIncrese: () => void
    onDecrease: () => void
}

export default function CartIngredientsItem({
    image,
    ingredientName,
    calories,
    amount,
    onDelete,
    onIncrese,
    onDecrease,
}: IngredientItemProps) {
    const sumCalories = calories * amount
    return (
        <div className='flex items-center justify-between'>
            <div className="flex items-center justify-center gap-4">
                <DisplayImage pathName={image} className="w-[120px] h-[100px] object-contain" />
                <div className='flex flex-col items-start'>

                    <p className='font-semibold'>{ingredientName}</p>

                    <div className='flex items-center gap-4 py-2'>
                        <div className='flex items-center gap-2'>
                            <IconButton
                                variant="gray"
                                className="text-black"
                                onClick={onDecrease}
                            >
                                -
                            </IconButton>
                            <p className='text-sm'>x{amount}</p>
                            <IconButton
                                variant="gray"
                                className="text-black"
                                onClick={onIncrese}
                            >
                                +
                            </IconButton>
                        </div>

                        <button
                            onClick={onDelete}
                            className='text-sm text-default-red hover:text-dark-red underline cursor-pointer '
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>

            <div className='flex items-center gap-2 md:gap-[10px] text-[18px] font-semibold'>
                <p className="text-[#2E2E2E] capitalize font-semibold">+{sumCalories}</p>
                <p className='text-default-yellow'>Cal</p>
            </div>

        </div>
    )
}
