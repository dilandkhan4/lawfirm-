
"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from "next/image";

const Navbar2 = () => {
    const [activeLink, setActiveLink] = useState('');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const links = [
        { label: 'Home', path: '/', key: 'home' },
        { label: 'About', path: '/about', key: 'about' },
        { label: 'Services', path: '/services', key: 'services' },
    { label: 'Case Study', path: '/case-study', key: 'case-study' },
    { label: 'Our Team', path: '/ourteam', key: 'our-team' },
        { label: 'Blogs', path: '/blogs', key: 'blogs' },
        { label: 'Client Files', path: '/client-files', key: 'client-files' },
    { label: 'Contact Us', path: '/contactus', key: 'contact' },
    ];

    const handleLinkClick = (label) => {
        setActiveLink(label);
        setIsDropdownOpen(false);
    };

    return (
        <div className=' relative border-b-2  border-dashed border-[#B68C5A] z-10'>
            <div className="navbar relative z-10 max-w-[1320px] mx-auto pt-6">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex={0} className="flex flex-col dropdown-content mt-3 w-36 p-2 text-[16px]">
                            {links.map((link, index) => (
                                <li key={link.key || index}>
                                    <Link
                                        href={link.path}
                                        className={activeLink === link.label ? 'text-[#B68C5A]' : ''}
                                        onClick={() => handleLinkClick(link.label)}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <Image src='/logo.png' height={46} width={157} alt="logo image"></Image>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex flex-row px-1 space-x-[30px] text-[16px] text-white">
                        {links.map((link, index) => (
                            <li key={link.key || index} className="relative">
                                <Link
                                    href={link.path}
                                    className={activeLink === link.label ? 'text-[#B68C5A]' : ''}
                                    onClick={() => handleLinkClick(link.label)}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link
                        href="/login"
                        className="px-4 py-2 border-2 border-[#B68C5A] text-white text-xl rounded-[4px] hover:bg-[#B68C5A] hover:text-white transition-colors duration-300 inline-block mr-2"
                    >
                        Login
                    </Link>
                </div>
                <div className="navbar-end">
                    <Link
                        href="/appointment"
                        className="px-2 py-2 border-2 border-[#B68C5A] text-[#B68C5A] text-xl rounded-[4px] hover:bg-[#B68C5A] hover:text-white transition-colors duration-300 inline-block"
                    >
                        Get Appointment
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default Navbar2;


