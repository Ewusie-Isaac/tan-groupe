import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Offer = () => {
  return (
    <div className="m-4 flex flex-col gap-4 lg:grid lg:grid-cols-2">
      <Image alt="farms" src="/farm/farm-18.jpg" width={600} height={600} />
      <div>
        <p className="text-sm text-green-700">TAN Ecofarms</p>
        <h1 className="mb-4 text-xl font-bold capitalize lg:text-3xl">
          Best of Agric Practices for Africa and Global food security
        </h1>
        <h4 className="mb-4 bg-gray-200/80 p-3 text-lg font-semibold ">
          Empowering Global Food Security with Africa’s Best Agricultural
          Practices
        </h4>
        <p className="mb-4">
          As dedicated farmers, we bring you the most effective and sustainable
          farming techniques, tailored for Africa’s unique environment and
          adaptable for global application. Our commitment to innovative
          practices not only boosts productivity and soil health but also
          secures a brighter, food-secure future for communities worldwide. Join
          us in cultivating prosperity and nourishment for all.
        </p>
        <Link
          href=""
          className="mt-5 rounded-md bg-green-700 px-4 py-2 text-white hover:bg-green-800"
        >
          Contact us
        </Link>
      </div>
    </div>
  );
};

export default Offer;
