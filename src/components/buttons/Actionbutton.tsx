import { cn } from '@/utils/className';
import * as React from 'react';
import { ImSpinner2 } from 'react-icons/im';

const ActionButtonVariant = ['green', 'gray', 'red', 'yellow'] as const;
const ButtonSize = ['base', 'sm'] as const;

type ActionButtonProps = {
    isLoading?: boolean;
    variant?: (typeof ActionButtonVariant)[number];
    size?: (typeof ButtonSize)[number];
} & React.ComponentPropsWithRef<'button'>;

const ActionButton = React.forwardRef<HTMLButtonElement, ActionButtonProps>(
    (
        {
            children,
            className,
            disabled: buttonDisabled,
            isLoading,
            variant = 'green',
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
                    'w-fit min-w-[90px]',
                    'button inline-flex items-center justify-center font-bold',
                    'focus:outline-none focus-visible:ring focus-visible:ring-pink-500',
                    'transition duration-100',
                    //#region  //*=========== Size ===========
                    [
                        size === 'base' && ['px-4 py-3', 'text-base md:text-lg'],
                        size === 'sm' && ['px-4 py-2.5', 'text-sm md:text-base'],
                    ],
                    //#region  //*=========== Variant ===========
                    variant === 'green' && [
                        'bg-default-green text-white rounded-lg',
                        'hover:bg-dark-green',
                        'active:bg-dark-green active:ring-light-blue focus:outline-none active:ring-2',
                        'disabled:opacity-36 disabled: disabled:bg-[#8998E6] disabled:text-white',
                    ],
                    variant === 'gray' && [
                        'w-fit min-w-[90px] rounded-lg',
                        'text-black bg-gray-50',
                        'hover:bg-gray-100 ',
                        'active:ring-light-gray focus:outline-none active:bg-gray-100 active:ring-2',
                        'disabled:text-gray-300',
                    ],
                    variant === 'red' && [
                        'bg-default-red text-white rounded-lg',
                        'hover:bg-red-500 ',
                        'active:ring-light-red focus:outline-none active:bg-red-600 active:ring-2',
                        'disabled:bg-red-200',
                    ],
                    variant === 'yellow' && [
                        'bg-default-yellow text-white rounded-lg',
                        'hover:bg-dark-yellow ',
                        'active:ring-dark-yellowfocus:outline-none active:bg-dark-yellow active:ring-2',
                        'disabled:bg-red-200',
                    ],
                    //#endregion  //*======== Variant ===========
                    'disabled:cursor-not-allowed disabled:no-underline disabled:brightness-105',
                    className
                )}
                {...rest}
            >
                {isLoading && (
                    <div
                        className={cn(
                            'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2',
                            {
                                'text-white': ['green'].includes(variant),
                            }
                        )}
                    >
                        <ImSpinner2 className='animate-spin' />
                    </div>
                )}
                {children}
            </button>
        );
    }
);

export default ActionButton;

ActionButton.displayName = 'ActionButton';
