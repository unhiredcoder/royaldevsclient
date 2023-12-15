import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <nav className="flex item-center justify-between">
            <Link href="/">
                <div className="mob-nav flex items-center cursor-pointer">
                    <img src="/logo.png" style={{objectFit:'contain',height:'50%'}} />
                  
                </div>
            </Link>
            {/* <ul className="flex items-center">
                <li className="mr-6 font-medium text-gray-600">
                    <a href="#">Products</a>
                </li>
                <li className="mr-6 font-medium text-gray-600">
                    <a href="#">pricing</a>
                </li>
                <li className="mr-6 font-medium text-gray-600">
                    <a href="#">Docs</a>
                </li>
                <li className="mr-6 font-medium text-gray-600">
                    <a href="#">Company</a>
                </li>
            </ul>
            <ul className="flex items-center">
                <li className="mr-6 font-medium text-gray-600">
                    <a href="#" className="hover:text-gray-400">
                        Log in
                    </a>
                </li>
                <li className="font-medium text-gray-600">
                    <a
                        href="#"
                        className="bg-primary py-2 px-4 rounded-sm text-white hover:bg-primary-dark transition-all">
                        Sign up
                    </a>
                </li>
            </ul> */}
            
        </nav>
    );
};

export default Navbar;
