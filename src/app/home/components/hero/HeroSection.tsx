"use client";

import { Ellipse, Salad1, Salad2 } from '@/components/assets';
import React from 'react'

export default function HeroSection() {
    return (
        <div className='flex h-[240px] bg-light-yellow rounded relative overflow-hidden'>
            <Ellipse className="absolute -bottom-2/4 left-0 h-56 w-56" />
            <div className='absolute inset-y-0 left-0 p-8 space-y-4 z-10'>
                <h1 className='text-[32px] leading-normal'>Fresh & <br /> tasty salads</h1>
                <p className='text-sm'>Relax please, we&apos; ve got you <br />
                    covered every day of the week</p>
            </div>

            <Ellipse className="absolute -top-2/4 left-96 h-56 w-56" />

            <div className="absolute -inset-x-20 bottom-0 object-cover opacity-30 md:opacity-100">
                <Ellipse className="absolute right-96 -top-28 h-56 w-56" />
                <Salad1 className='absolute right-96 -top-48 -rotate-[32deg] w-96' />
            </div>
            <div className='absolute right-0 bottom-6 object-cover opacity-30 md:opacity-100'>
                <Salad2 className='w-96 h-96 ' />
            </div>
        </div>
    )
}
