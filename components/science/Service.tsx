import Image from 'next/image';
import React from 'react';

const Service = () => {
  return (
    <div className="mx-0 mt-20 text-center">
      <h2 className="text-2xl font-bold">
        We Ensure you always the best results
      </h2>
      <ul
        className="mx-10 my-8 flex flex-col items-center justify-between gap-10 p-8 sm:grid sm:grid-cols-2
          md:flex md:flex-row  lg:flex lg:flex-row"
      >
        <li className="flex flex-col items-center justify-center">
          <Image
            className="mb-2"
            src="/life/comfort.svg"
            width={100}
            height={100}
            alt="tan"
          />
          <h2 className="mb-2 text-2xl font-bold">Star Comforts</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur,
            eos?
          </p>
        </li>
        <li className="flex flex-col items-center justify-center">
          <Image
            className="mb-2"
            src="/main/prof.svg"
            width={100}
            height={100}
            alt="tan"
          />
          <br />

          <h2 className="mb-2 text-2xl font-bold">Professional Staffs</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur,
            eos?
          </p>
        </li>
        <li className="flex flex-col items-center justify-center">
          <Image
            className="mb-2"
            src="/main/exp.png"
            width={100}
            height={100}
            alt="tan"
          />
          <br />

          <h2 className="mb-2 text-2xl font-bold"> Years of Experience</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur,
            eos?
          </p>
        </li>
        <li className="flex flex-col items-center justify-center">
          <Image
            className="mb-2"
            src="/main/supply.png"
            width={100}
            height={100}
            alt="tan"
          />
          <br />

          <h2 className="mb-2 text-2xl font-bold"> Suppliers</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur,
            eos?
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Service;
