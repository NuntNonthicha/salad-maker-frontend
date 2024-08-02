"use client"
import React from 'react';
import { SnackbarProvider as NotistackSnackbarProvider } from 'notistack';
import { CustomSnackbarContent } from './CustomSnackbarContent';

interface Props {
    children: React.ReactNode;
}

const SnackbarProvider: React.FC<Props> = ({ children }) => {
    return (
        <NotistackSnackbarProvider
            maxSnack={3}
            anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
            autoHideDuration={2000}
            Components={{
                default: CustomSnackbarContent,
                success: CustomSnackbarContent,
                error: CustomSnackbarContent,
                warning: CustomSnackbarContent,
                info: CustomSnackbarContent,
            }}
        >
            {children}
        </NotistackSnackbarProvider>
    );
};

export default SnackbarProvider;
