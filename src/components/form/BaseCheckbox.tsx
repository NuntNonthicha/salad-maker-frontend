import Image from "next/image";
import { ICheckBoxProps } from "@/types/form";
import { FaCheckCircle } from "react-icons/fa";
import { cn } from "@/utils/className";

export default function BaseCheckbox({
    className,
    id,
    checked,
    onChange,
    onFocus,
    onBlur,
    disabled,
    imageSrc,
    label
}: ICheckBoxProps) {
    return (
        <div
            className={cn(
                'flex rounded',
                'w-full',
                disabled ? 'bg-default-gray cursor-not-allowed' : 'cursor-pointer',
                className
            )}
        >
            <label className='inline-flex w-full h-full'>
                <input
                    id={id}
                    type="checkbox"
                    checked={checked}
                    onChange={onChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    disabled={disabled}
                    className="hidden peer"
                />
                <div className='bg-white peer-checked:shadow-default-shadow flex w-full px-3 py-2 rounded'>
                    <div className="flex flex-col items-center justify-center space-y-3 w-[95%] pl-4">
                        {imageSrc && (
                            <Image
                                src={imageSrc}
                                alt="category-ingredients"
                                width={500}
                                height={500}
                                className="size-12 md:size-16"
                            />
                        )}
                        {label && <span className="capitalize text-default-gray text-base md:text-lg">{label}</span>}
                    </div>
                    <div className="flex">
                        <FaCheckCircle className={cn(
                            'w-6 h-6 transition-colors duration-300',
                            checked ? 'text-default-green' : 'text-white'
                        )} />
                    </div>

                </div>
            </label>
        </div>
    );
}
