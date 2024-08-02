import React from 'react';
import { BsFillRocketTakeoffFill } from 'react-icons/bs';
import { FaCircleInfo } from 'react-icons/fa6';
import { IoWarning } from 'react-icons/io5';
import { MdError } from 'react-icons/md';

interface IconProps {
    type: 'success' | 'error' | 'warning' | 'info' | 'default';
    color?: string;
}

const IconSnackbar: React.FC<IconProps> = ({ type }) => {

    switch (type) {
        case 'success':
            return <BsFillRocketTakeoffFill />;
        case 'error':
            return <MdError />;
        case 'warning':
            return <IoWarning />;
        case 'info':
            return <FaCircleInfo />;
        case 'default':
        default:
            return <FaCircleInfo />;
    }
};

export default IconSnackbar;
