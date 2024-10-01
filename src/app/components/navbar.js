"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import darkLogo from '../images/brand_assets/dark_logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to track menu visibility

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <div className='bg-[#ffc108] text-xs flex space-x-4 p-5'>
                <FontAwesomeIcon icon={faPhone} className="mr-2" />
                <span className='text-white'>+123-456-7890</span>
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                <span className='text-white'>info@company.com</span>
            </div>
            <nav className="p-4 mt-6">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="text-lg font-bold">
                        <Image 
                            src={darkLogo} 
                            alt="Logo"
                            width={150} 
                            height={50} 
                        />
                    </div>
                    <div className="flex items-center md:hidden">
                        {/* Hamburger Menu Icon for Mobile */}
                        <button 
                            onClick={toggleMenu} 
                            className="text-[#ffc108] focus:outline-none" // Set the color to yellow
                        >
                            <FontAwesomeIcon icon={faBars} size="lg" />
                        </button>
                    </div>
                    {/* Desktop Menu */}
                    <ul className="hidden md:flex mx-auto text-[#9b9898] space-x-4">
                        <li className="relative group">
                            <Link href="/" className="text-gray-300 hover:text-[#9b9898]">
                                Home
                            </Link>
                            <span className="absolute left-0 right-0 -bottom-1 h-0.5 bg-[#ffc108] rounded-full scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                        </li>
                        <li className="relative group">
                            <Link href="/destination" className="text-gray-300 hover:text-[#9b9898]">
                                Destinations
                            </Link>
                            <span className="absolute left-0 right-0 -bottom-1 h-0.5 bg-[#ffc108] rounded-full scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                        </li>
                        <li className="relative group">
                            <Link href="/new" className="text-gray-300 hover:text-[#9b9898]">
                                New
                            </Link>
                            <span className="absolute left-0 right-0 -bottom-1 h-0.5 bg-[#ffc108] rounded-full scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                        </li>
                        <li className="relative group">
                            <Link href="/contact" className="text-gray-300 hover:text-[#9b9898]">
                                Contact
                            </Link>
                            <span className="absolute left-0 right-0 -bottom-1 h-0.5 bg-[#ffc108] rounded-full scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                        </li>
                    </ul>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden bg-white shadow-lg rounded-lg mt-2 p-4">
                        <ul className="flex flex-col space-y-2">
                            <li className="relative group">
                                <Link href="/" className="text-gray-700 hover:text-[#ffc108]">
                                    Home
                                </Link>
                            </li>
                            <li className="relative group">
                                <Link href="/destination" className="text-gray-700 hover:text-[#ffc108]">
                                    Destinations
                                </Link>
                            </li>
                            <li className="relative group">
                                <Link href="/new" className="text-gray-700 hover:text-[#ffc108]">
                                    New
                                </Link>
                            </li>
                            <li className="relative group">
                                <Link href="/contact" className="text-gray-700 hover:text-[#ffc108]">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                )}
            </nav>
        </>
    );
};

export default Navbar;
