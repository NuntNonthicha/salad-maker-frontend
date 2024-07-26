"use client";

import { IImageProps } from "@/types/assets";
import Image from "next/image";

function Salad1({
    width = 1000,
    height = 1000,
    ...props
}: IImageProps) {
    return (
        <Image
            src="/images/salad1.png"
            alt="salad in home page image"
            width={width}
            height={height}
            {...props}
        />
    );
}

function Salad2({
    width = 1000,
    height = 1000,
    ...props
}: IImageProps) {
    return (
        <Image
            src="/images/salad2.png"
            alt="salad in home page image"
            width={width}
            height={height}
            {...props}
        />
    );
}

function Ellipse({
    width = 350,
    height = 350,
    ...props
}: IImageProps) {
    return (
        <Image
            src="/images/ellipse.png"
            alt="ellipse in home page image"
            width={width}
            height={height}
            {...props}
        />
    );
}
export { Salad1, Salad2, Ellipse };
