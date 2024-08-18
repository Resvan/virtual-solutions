'use client'
import Link from 'next/link';
import { useState } from 'react';

interface Navlink {
    text: string;
    url: string;
}

interface HamburgerMenuProps {
    navLinks: Array<Navlink>
}

export default function HamburgerMenu({ navLinks }: HamburgerMenuProps) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="block lg:hidden">
            <div className="flex items-center justify-between">
                <button
                    className="inline-block p-2 text-white rounded-md focus:outline-none"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <svg
                        className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16m-7 6h7"
                            className={isOpen ? 'hidden' : 'block'}
                        />
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                            className={isOpen ? 'block' : 'hidden'}
                        />
                    </svg>
                </button>
            </div>
            {
                isOpen &&
                (
                    <nav
                        className={`absolute top-full right-0 w-full bg-white transform transition-transform duration-300 z-[10] ${isOpen ? 'translate-y-0' : '-translate-y-full'
                            } md:translate-y-0`}
                    >
                        {
                            navLinks.map((link, idx) => (
                                <div key={idx} className='text-dark-blue font-rubik text-base font-normal leading-[136%] py-3 border-b border-gray'>
                                    <Link className='px-4' href={link.url}>{link.text}</Link>
                                </div>
                            ))
                        }
                    </nav>
                )
            }
        </nav>
    );
}
