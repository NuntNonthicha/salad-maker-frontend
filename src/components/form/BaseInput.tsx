import * as React from 'react'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string
}

export const BaseInput = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, ...props }, ref) => {
        return (
            <input
                type={type}
                name="input"
                className={`w-full h-10 xl:h-12 px-3 xl:px-4 py-1 border-[1.5px] border-[#E8EAEB] rounded-lg disabled:bg-light-gray/25 disabled:text-default-gray disabled:cursor-not-allowed transition-all duration-300 focus:ring-1 focus:ring-inset focus:ring-black placeholder:text-[#A5ABB0] ${className}`}
                ref={ref}
                {...props}

            />
        )
    }
)

