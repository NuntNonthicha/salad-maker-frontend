'use client';

import React, { useState } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Icon } from '@iconify/react';
import { SIDENAV_ITEMS } from '@/constants/navbar';
import { SideNavItem } from '@/types/navbar';

const SideNav = () => {
    return (
        <div className="md:w-64 bg-white h-screen flex-1 fixed border-r border-zinc-200 hidden md:flex">
            <div className="flex flex-col space-y-6 w-full">
                <Link
                    href="/"
                    className="flex flex-row space-x-3 items-center justify-center md:justify-start md:px-6 border-b border-zinc-200 h-12 w-full"
                >
                    <p className='font-bold text-[30px] hidden md:flex'>
                        SALADMAKER<span className='text-default-yellow'>.</span>
                    </p>
                </Link>

                <div className="flex flex-col space-y-2  md:px-6 ">
                    {SIDENAV_ITEMS.map((item, idx) => {
                        return <MenuItem key={idx} item={item} />;
                    })}
                </div>
            </div>
        </div>
    );
};

export default SideNav;

const MenuItem = ({ item }: { item: SideNavItem }) => {
    const pathname = usePathname();
    const [subMenuOpen, setSubMenuOpen] = useState(false);
    const toggleSubMenu = () => {
        setSubMenuOpen(!subMenuOpen);
    };

    return (
        <div className=''>
            {item.submenu ? (
                <>
                    <button
                        onClick={toggleSubMenu}
                        className={` hover:bg-dark-yellow flex w-full flex-row items-center justify-between rounded-lg p-2 ${pathname.includes(item.path) ? 'bg-dark-yellow' : ''
                            }`}
                    >
                        <div className='flex flex-row items-center justify-center space-x-4'>
                            {item.icon}
                            <span className='flex text-lg font-medium'>{item.title}</span>
                        </div>

                        <div className={`${subMenuOpen ? 'rotate-180' : ''} flex`}>
                            <Icon icon='lucide:chevron-down' width='24' height='24' />
                        </div>
                    </button>

                    {subMenuOpen && (
                        <div className='my-4 ml-12 flex flex-col space-y-6'>
                            {item.subMenuItems?.map((subItem, idx) => {
                                return (
                                    <Link
                                        key={idx}
                                        href={subItem.path}
                                        className={`${subItem.path === pathname ? 'font-medium' : ''
                                            }`}
                                    >
                                        <span>{subItem.title}</span>
                                    </Link>
                                );
                            })}
                        </div>
                    )}
                </>
            ) : (
                <Link
                    href={item.path}
                    className={`hover:bg-dark-yellow flex flex-row items-center space-x-4 rounded-lg p-2 ${item.path === pathname ? 'bg-dark-yellow text-white' : 'text-default-gray'
                        }`}
                >
                    {item.icon}
                    {/* Show only icon when sidebar is collapsed */}
                    <span className={`${!open ? 'hidden' : 'flex'} text-xl font-medium`}>
                        {item.title}
                    </span>
                </Link>
            )}
        </div>
    );
};