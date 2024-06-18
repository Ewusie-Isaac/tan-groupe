'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import Action from './Action';
// import { useSelectedLayoutSegment } from 'next/navigation';

const Navigation = () => {
  // let segment = useSelectedLayoutSegment();
  // let active = segment;
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <header className="m-2">
      <nav className=" flexBetween max-container relative z-30 px-6 pb-5 lg:px-2 3xl:px-0">
        <Link href="/">
          <Image
            src="/tanlogo.png"
            alt="TanFreight Logo"
            width={74}
            height={32}
          />
        </Link>
        <ul className="hidden h-full gap-10 lg:flex">
          <Link
            href="/lifescience"
            className="regular-16 link flexCenter relative cursor-pointer pb-1.5 text-gray-50 transition-all duration-75 hover:font-bold"
          >
            Life Sciences
            <ul className="dropdrown">
              <Link className="dropdrown-list" href="/lifescience">
                001
              </Link>
              <Link className="dropdrown-list" href="/lifescience">
                002
              </Link>
              <Link className="dropdrown-list" href="/lifescience">
                003
              </Link>
            </ul>
          </Link>
          <Link
            href="#"
            className="regular-16 link flexCenter relative cursor-pointer pb-1.5 text-gray-50 transition-all duration-75 hover:font-bold"
          >
            EcoFarms
            <ul className="dropdrown">
              <Link className="dropdrown-list" href="#">
                001
              </Link>
              <Link className="dropdrown-list" href="#">
                002
              </Link>
              <Link className="dropdrown-list" href="#">
                003
              </Link>
            </ul>
          </Link>
          <Link
            href="#"
            className="regular-16 link flexCenter relative cursor-pointer pb-1.5 text-gray-50 transition-all duration-75 hover:font-bold"
          >
            Valkem Engineering
            <ul className="dropdrown">
              <Link className="dropdrown-list" href="#">
                001
              </Link>
              <Link className="dropdrown-list" href="#">
                002
              </Link>
              <Link className="dropdrown-list" href="#">
                003
              </Link>
            </ul>
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
              href="lifescience"
              className="regular-16 link flexCenter relative cursor-pointer pb-1.5 text-gray-50 transition-all duration-75 hover:font-bold"
            >
              Life Sciences
            </Link>
            <Link
              href="#"
              className="regular-16 link flexCenter relative cursor-pointer pb-1.5 text-gray-50 transition-all duration-75 hover:font-bold"
            >
              EcoFarms
            </Link>
            <Link
              href="#"
              className="regular-16 link flexCenter relative cursor-pointer pb-1.5 text-gray-50 transition-all duration-75 hover:font-bold"
            >
              Valkem Engineering
            </Link>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navigation;
