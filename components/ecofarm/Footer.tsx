import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <section className="mt-4 bg-gray-300 p-8 text-gray-700 lg:mt-10">
      <div
        className="mt-4 flex flex-col items-start justify-start gap-3 lg:grid
       lg:grid-cols-2 lg:gap-8"
      >
        <div className="p-2">
          <Image
            src="/farm/ecofarms.png"
            height={100}
            width={100}
            alt="ecofarms"
          />
          <p>
            To champion Ecological Farming for Sustainable Africa. We are
            committed to promoting farming practices that prioritize ecological
            balance, biodiversity, and sustainability.
          </p>
        </div>
        <div className="text-md grid grid-cols-2 gap-3 p-4">
          <ul className=" ">
            <h2 className="mb-2 font-bold uppercase lg:text-2xl">
              Our Main Services
            </h2>
            <li>
              {' '}
              <span className=" text-green-700">&#10004;</span> Seed and Nuts
            </li>
            <li>
              {' '}
              <span className=" text-green-700">&#10004;</span>Cereals / Grains
            </li>
            <li>
              {' '}
              <span className=" text-green-700">&#10004;</span> By-products
            </li>
            <li>
              {' '}
              <span className=" text-green-700">&#10004;</span> Best farm
              practices
            </li>
          </ul>
          <div className="">
            <h2 className="mb-2 font-bold uppercase lg:text-2xl">Contact Us</h2>
            <ul className="flex flex-col items-start justify-start">
              <Link href="mailto:info@tanfreight.com">
                <span className="text-xl text-green-700">&#9993;</span>{' '}
                info@tanfreight.com
              </Link>
              <Link href="tel:+233204261569">
                {' '}
                <span className="text-xl text-green-700">&#9990;</span> +233 204
                261 569
              </Link>
              <li>
                <span className="text-xl text-green-700">&#9906;</span> 62,
                Boundary Road East Legon
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="text-center">
        &copy; {new Date().getFullYear()} all right reveseved - Ecofarms
      </p>
    </section>
  );
};

export default Footer;
