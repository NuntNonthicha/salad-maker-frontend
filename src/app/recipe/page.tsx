"use client";


import { Ellipse, Salad1, Salad2 } from '@/components/assets';
import React from 'react'

export default function ReceipePage() {
    return (
        <div className='flex justify-center bg-card-recipe w-[250px] h-[300px] rounded p-4'>
            <div className='flex flex-col w-full h-fit rounded bg-white p-4'>
                <p>Recipe name 01</p>
                <h1 className='font-bold gap-2'>188 <span className='text-default-yellow'>Cal</span></h1>
            </div>

        </div>
    )
}
