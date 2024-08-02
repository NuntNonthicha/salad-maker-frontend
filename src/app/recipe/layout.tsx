// RecipeSectionLayout.tsx
import React from 'react';

export default function RecipeSectionLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className='px-4 w-full flex flex-col pt-2 space-y-2 bg-[#F5F5F5] flex-grow pb-4'>
            {children}
        </div>
    );
}
