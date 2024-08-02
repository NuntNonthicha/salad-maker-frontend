//Icon Graph Type Health Button : show category/type (bmi/pressure/,,)
import { cn } from '@/utils/className';
import React from 'react';
import { IconType } from 'react-icons';
import { ImSpinner2 } from 'react-icons/im';


const ButtonVariant = [
    'gray',
    'black',
    'red',
] as const;
const ButtonSize = ['sm', 'base'] as const;

type ButtonProps = {
    isLoading?: boolean;
    isDarkBg?: boolean;
    variant?: (typeof ButtonVariant)[number] | string;
    icon?: IconType;
    classNames?: {
        icon?: string;
    };
    size?: (typeof ButtonSize)[number];
} & React.ComponentPropsWithRef<'button'>;

const IconButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            children,
            className,
            disabled: buttonDisabled,
            isLoading,
            variant = 'black',
            icon: Icon,
            classNames,
            size = 'base',
            ...rest
        },
        ref
    ) => {
        const disabled = isLoading || buttonDisabled;

        return (
            <button
                ref={ref}
                type='button'
                disabled={disabled}
                className={cn(
                    'inline-flex items-center justify-center overflow-hidden rounded-[20px]',
                    'text-base md:text-lg text-center',
                    'px-1.5 py-2 md:px-3',
                    'w-fit shadow-sm',
                    'focus:outline-none focus-visible:ring active:ring',
                    'transition-colors duration-75',
                    //#region  //*=========== Size ===========
                    [
                        size === 'base' && ['px-3 py-1.5', 'text-base md:text-lg'],
                        size === 'sm' && ['px-2 py-1', 'text-sm md:text-base'],
                    ],
                    //#endregion  //*======== Size ===========
                    //#region  //*=========== Variants ===========
                    [
                        variant === 'gray' && [
                            'text-center border-gray-200 text-default-gray border rounded-2xl',
                            'hover:shadow-default-shadow ',
                            'active:border-default-gray active:border',
                        ],
                        variant === 'red' && [
                            'text-default-red border-default-red',
                            'hover:shadow-default-shadow ',
                            'border-light-red active:border',
                            'disabled:border-light-gray disabled:text-stone-800 disabled:opacity-40',
                        ],
                        variant === 'black' && [
                            'border-light-gray border text-black',
                            'hover:shadow-default-shadow',
                            'active:border-default-gray active:border',
                        ],
                    ],
                    //#endregion  //*======== Variants ===========
                    'disabled:cursor-not-allowed',
                    isLoading &&
                    'relative text-transparent transition-none hover:text-transparent disabled:cursor-wait',
                    className
                )}
                {...rest}
            >
                {isLoading && (
                    <div
                        className={cn(
                            'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2',
                            {
                                'text-white': ['blue', 'yellow'].includes(variant),
                            }
                        )}
                    >
                        <ImSpinner2 className='animate-spin' />
                    </div>
                )}
                {Icon && (
                    <Icon
                        size='1em'
                        className={cn(
                            'object-contain] flex h-8 w-8 rounded-full p-1.5 text-center md:h-10 md:w-10',
                            classNames?.icon
                        )}
                    />
                )}
                <div className='flex'>
                    <span className='text-wrap text-start text-sm font-medium md:text-base'>
                        {children}
                    </span>
                </div>
            </button>
        );
    }
);

export default IconButton;
