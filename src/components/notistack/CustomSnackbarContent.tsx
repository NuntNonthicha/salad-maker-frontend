import React, { forwardRef } from 'react';
import styles from './snackbar.module.css';
import IconSnackbar from './IconSnackbar';

interface CustomSnackbarContentProps {
    id: string;
    message: React.ReactNode;
    variant: 'default' | 'success' | 'error' | 'warning' | 'info';
}

export const CustomSnackbarContent = forwardRef<HTMLDivElement, CustomSnackbarContentProps>(
    ({ id, message, variant }, ref) => {
        const variantClass = {
            default: styles.snackbarDefault,
            success: styles.snackbarSuccess,
            error: styles.snackbarError,
            warning: styles.snackbarWarning,
            info: styles.snackbarInfo,
        }[variant];

        return (
            <div className={`${styles.snackbar} ${variantClass}`} id={id} ref={ref}>
                <IconSnackbar type={variant} />
                <span className='pl-2 text-white text-lg'>{message}</span>
            </div>
        );
    }
);

CustomSnackbarContent.displayName = 'CustomSnackbarContent';
