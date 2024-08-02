'use client';

import { getDownloadURL, ref } from 'firebase/storage';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { storage } from '../../../firebase.config';
import { cn } from '@/utils/className';

interface DisplayImageProps {
    className?: string
    pathName?: string | null;
}
const DisplayImage = ({ className, pathName }: DisplayImageProps) => {
    const [imageUrl, setImageUrl] = useState<string | null>(null);

    useEffect(() => {
        if (pathName) {
            const decodedPath = decodeURIComponent(pathName); // Decode the URL before passing it to Firebase storage
            const storageRef = ref(storage, decodedPath);
            getDownloadURL(storageRef)
                .then((url) => {
                    setImageUrl(url);
                })
                .catch((error) => {
                    console.error('Error getting download URL:', error);
                });
        }
    }, [pathName])

    return imageUrl ? (
        <div className={cn(
            'flex items-center  justify-center',
            //'w-full max-h-[200px] xl:min-w-[300px]',
            className
        )} >
            <Image
                src={imageUrl}
                className='h-full w-full object-contain'
                alt='Firebase Image'
                width={350}
                height={350}
                priority={false}
            />
        </div>
    ) : (
        <div className={cn(
            'flex items-center justify-center',
            //'w-full max-h-[200px] xl:min-w-[300px]',
            className
        )} >
            <Image
                src="/images/salad1.png"
                className='h-full w-full object-contain'
                alt='Firebase Image'
                width={350}
                height={350}
                priority={false}
            />
        </div>
    );
};

export default DisplayImage;
