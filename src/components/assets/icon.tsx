"use client";

import { IconProps } from "@/types/assets";
import { cn } from "@/utils/className";

function LocationIcon({ className, onClick }: IconProps) {
    return (
        <svg
            className={cn("w-[24px] h-[24px] fill-current", className)}
            onClick={onClick}
            width="25"
            height="29"
            viewBox="0 0 25 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M0 24.1606C0 27.024 6.48 28.3273 12.5 28.3273C18.52 28.3273 25 27.024 25 24.1606C25 21.8873 21.065 20.8606 18.23 20.4173L20.1667 18.494C21.6818 16.9789 22.7137 15.0486 23.1318 12.9471C23.5499 10.8457 23.3354 8.66739 22.5154 6.68781C21.6955 4.70822 20.307 3.01623 18.5254 1.82581C16.7439 0.635387 14.6493 0 12.5067 0C10.364 0 8.26945 0.635387 6.48789 1.82581C4.70634 3.01623 3.31781 4.70822 2.49788 6.68781C1.67796 8.66739 1.46348 10.8457 1.88156 12.9471C2.29964 15.0486 3.33151 16.9789 4.84667 18.494L6.77667 20.424C3.935 20.8606 0 21.8873 0 24.1606ZM14.1667 6.66065C14.1667 6.50589 14.2098 6.35418 14.2911 6.22254C14.3725 6.09089 14.4889 5.9845 14.6273 5.91529C14.7657 5.84608 14.9207 5.81678 15.0748 5.83068C15.229 5.84458 15.3762 5.90112 15.5 5.99398C16.5319 6.76821 17.3888 7.75154 18.0146 8.87966C18.6404 10.0078 19.0211 11.2553 19.1317 12.5406C19.1683 12.9355 19.0619 13.3304 18.8318 13.6534C18.6018 13.9764 18.2634 14.2061 17.8783 14.3006L15.8333 14.8123V16.6606C15.8333 16.8817 15.7455 17.0936 15.5893 17.2499C15.433 17.4062 15.221 17.494 15 17.494C14.779 17.494 14.567 17.4062 14.4107 17.2499C14.2545 17.0936 14.1667 16.8817 14.1667 16.6606V6.66065ZM6.66667 8.32731V6.66065C6.66667 6.43963 6.75446 6.22767 6.91074 6.07139C7.06702 5.91511 7.27899 5.82731 7.5 5.82731C7.72101 5.82731 7.93298 5.91511 8.08926 6.07139C8.24554 6.22767 8.33333 6.43963 8.33333 6.66065V8.32731C8.33665 8.61472 8.41536 8.89622 8.5616 9.14366C8.70784 9.3911 8.91649 9.59581 9.16667 9.73731V6.66065C9.16667 6.43963 9.25446 6.22767 9.41074 6.07139C9.56702 5.91511 9.77899 5.82731 10 5.82731C10.221 5.82731 10.433 5.91511 10.5893 6.07139C10.7455 6.22767 10.8333 6.43963 10.8333 6.66065V9.73731C11.0835 9.59581 11.2922 9.3911 11.4384 9.14366C11.5846 8.89622 11.6634 8.61472 11.6667 8.32731V6.66065C11.6667 6.43963 11.7545 6.22767 11.9107 6.07139C12.067 5.91511 12.279 5.82731 12.5 5.82731C12.721 5.82731 12.933 5.91511 13.0893 6.07139C13.2455 6.22767 13.3333 6.43963 13.3333 6.66065V8.32731C13.3306 9.06416 13.0837 9.77932 12.6314 10.361C12.1791 10.9427 11.5468 11.3581 10.8333 11.5423V16.6606C10.8333 16.8817 10.7455 17.0936 10.5893 17.2499C10.433 17.4062 10.221 17.494 10 17.494C9.77899 17.494 9.56702 17.4062 9.41074 17.2499C9.25446 17.0936 9.16667 16.8817 9.16667 16.6606V11.5423C8.45321 11.3581 7.8209 10.9427 7.36858 10.361C6.91626 9.77932 6.66943 9.06416 6.66667 8.32731ZM8.25667 21.904L10.7317 24.3806C10.9638 24.613 11.2395 24.7973 11.5429 24.923C11.8463 25.0487 12.1716 25.1134 12.5 25.1134C12.8284 25.1134 13.1537 25.0487 13.4571 24.923C13.7605 24.7973 14.0362 24.613 14.2683 24.3806L16.7433 21.904C21.3233 22.434 23.3333 23.6406 23.3333 24.1606C23.3333 24.9073 19.6483 26.6606 12.5 26.6606C5.35167 26.6606 1.66667 24.9073 1.66667 24.1606C1.66667 23.6406 3.67667 22.434 8.25667 21.904Z" />
        </svg>

    );
}

export default LocationIcon;