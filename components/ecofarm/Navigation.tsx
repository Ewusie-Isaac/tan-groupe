'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import Action from './Action';

const Navigation = () => {
  // let segment = useSelectedLayoutSegment();
  // let active = segment;
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <header className="m-2">
      <nav className=" flexBetween max-container relative z-30 px-6 pb-5 lg:px-2 3xl:px-0">
        <Link href="/ecofarm">
          <Image
            src="/farm/ecofarms.png"
            alt="TanFreight Logo"
            width={54}
            height={32}
          />
        </Link>
        <ul className="hidden h-full gap-10  lg:flex">
          <Link
            href="/ecofarm"
            className="regular-18 link  flexCenter relative cursor-pointer pb-1.5 text-green-700 transition-all duration-75 hover:font-bold"
          >
            Home
          </Link>
          <Link
            href="/ecofarm#categories"
            className="regular-18 link  flexCenter relative cursor-pointer pb-1.5 text-green-700 transition-all duration-75 hover:font-bold"
          >
            Services
          </Link>
          <Link
            href="/ecofarm/about"
            className="regular-18 link flexCenter relative cursor-pointer pb-1.5 text-green-700 transition-all duration-75 hover:font-bold"
          >
            About EcoFarms
          </Link>
          <Link
            href="/ecofarm/contact-us"
            className="regular-18 link flexCenter relative cursor-pointer pb-1.5 text-green-700 transition-all duration-75 hover:font-bold"
          >
            Contact Us
          </Link>
        </ul>
        <div className="lg:flexCenter hidden">
          <Action />
        </div>
        <Image
          onClick={() => setIsOpen(!isOpen)}
          width={32}
          height={32}
          src="/menu.svg"
          alt="menu"
          className="inline-block cursor-pointer lg:hidden"
        />
      </nav>
      {/* <!-- Mobile menu, show/hide based on menu state. --> */}
      {isOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <ul className="space-y-1 px-2 pb-3 pt-2">
            <Link
              href="/ecofarm"
              className="regular-18 link  flexCenter relative cursor-pointer pb-1.5 text-green-700 transition-all duration-75 hover:font-bold"
            >
              Home
            </Link>
            <Link
              href="/ecofarm#categories"
              className="regular-18 link  flexCenter relative cursor-pointer pb-1.5 text-green-700 transition-all duration-75 hover:font-bold"
            >
              Services
            </Link>
            <Link
              href="#"
              className="regular-16 link flexCenter relative cursor-pointer pb-1.5 text-gray-50 transition-all duration-75 hover:font-bold"
            >
              About EcoFarms
            </Link>
            <Link
              href="/ecofarm/contact-us"
              className="regular-16 link flexCenter relative cursor-pointer pb-1.5 text-gray-50 transition-all duration-75 hover:font-bold"
            >
              Contact Us
            </Link>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navigation;
