// components/form/ErrorMessage.tsx
import { FC } from 'react';

interface ErrorMessageProps {
    error?: string;
}

const ErrorMessage: FC<ErrorMessageProps> = ({ error }) => {
    if (!error) return null;
    return <p className="text-red-500 text-sm">{error}</p>;
};

export default ErrorMessage;
