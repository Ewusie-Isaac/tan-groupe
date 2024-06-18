import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Category = () => {
  return (
    <section id="categories" className="m-5 scroll-smooth p-5 ">
      <h1 className="text-center text-5xl font-bold">Top Categories</h1>
      <div className="grid-1">
        {/* <Link
          href="/ecofarm/cereal"
          className="flex-1 shadow-sm transition-all duration-75 hover:shadow-md"
        >
          <Image
            className="rounded-lg"
            src="/farm/cereal-1.jpg"
            alt="ecofarms"
            height={200}
            width={200}
          />
          <div className="mt-2 flex-1 p-2">
            <h1 className="text-xl font-semibold">Cereals</h1>
            <p>Most Organic Cereal from the farm</p>
          </div>
        </Link> */}
        <Link
          href="/ecofarm/nut-and-seeds"
          className="flex-1 shadow-sm transition-all duration-75 hover:shadow-md"
        >
          <Image
            className="rounded-lg"
            src="/farm/nuts.jpg"
            alt="ecofarms"
            height={400}
            width={350}
          />
          <div className="mt-2 flex-1 p-2">
            <h1 className="text-xl font-semibold">Seed and Nuts</h1>
            <p>Fresh Seeds and Nuts from the farm</p>
          </div>
        </Link>
        <Link
          href="/ecofarm/grains"
          className="flex-1 shadow-sm transition-all duration-75 hover:shadow-md"
        >
          <Image
            className="rounded-lg"
            src="/farm/grain-1.jpg"
            alt="ecofarms"
            height={400}
            width={400}
          />
          <div className="mt-2 flex-1 p-2">
            <h1 className="text-xl font-semibold">Grains and Cereals</h1>
            <p>Most Organic Grains from the farm</p>
          </div>
        </Link>
        <Link
          href="/ecofarm/byproducts"
          className="flex-1 shadow-sm transition-all duration-75 hover:shadow-md"
        >
          <Image
            className="rounded-lg"
            src="/farm/byproduct.jpg"
            alt="ecofarms"
            height={400}
            width={400}
          />
          <div className="mt-2 flex-1 p-2">
            <h1 className="text-xl font-semibold">By-Products</h1>
            <p>Most reliable & Affordable By-Products</p>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Category;
