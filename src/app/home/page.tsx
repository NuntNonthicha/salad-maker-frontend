"use client";


import { Ellipse, Salad1, Salad2 } from '@/components/assets';
import React from 'react'
import HeroSection from './hero';
import Category from './category';

export default function HomePage() {
    return (
        <div className='w-full'>
            <HeroSection />
            <Category />
        </div>
    )
}
