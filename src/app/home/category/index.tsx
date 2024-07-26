"use client";

import Image from "next/image";
import React from 'react'

export default function CategorySection() {
    return (
        <section className="w-full">
            Category
            <div className='flex flex-col rounded px-4 py-6 gap-2 items-center justify-center bg-white w-[130px] max-w-full'>
                <Image
                    src="/images/vegetables.svg"
                    alt="Education"
                    width={300}
                    height={300}
                    className="size-16 min-w-16"
                />
                <p className='capitalize text-default-gray'>vegetables</p>
            </div>

        </section>
    );
}
