import React from 'react';

export default function HomeSectionLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className='w-full flex flex-col pt-2 space-y-2 bg-[#F5F5F5] flex-grow pb-4'>
            {children}
        </div>
    );
}
