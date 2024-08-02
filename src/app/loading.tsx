import { Metadata } from 'next';
import Image from 'next/image';
import * as React from 'react';

export const metadata: Metadata = {
    title: 'Loading',
};

export default function Loading() {
    return (
        <section className='bg-transparent'>
            <div className='layout flex min-h-screen flex-col items-center justify-center text-center'>
                <div className='text-default-yellow repeat-infinite animate-text text-default-blue animate-pulse py-2 text-center text-3xl font-semibold tracking-wide'>
                    Loading ...
                </div>
            </div>
        </section>
    );
}

