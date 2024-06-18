import Image from 'next/image';
import React from 'react';

const Overview = () => {
  return (
    <div className="m-4 mt-8">
      <h1 className="p-3 text-2xl font-bold text-gray-800 lg:text-left lg:text-4xl">
        Overview
      </h1>
      <div>
        <div>
          <div className="flex  flex-col items-center justify-center gap-5 lg:grid lg:grid-cols-2">
            <div className="flex flex-col items-center justify-center  lg:grid lg:grid-cols-2">
              <div className="bg-green-700 p-4  text-gray-100">
                <h2 className="mb-4 text-2xl font-bold">Oraganic vegetables</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Autem numquam vero animi minus. Ducimus atque, hic similique
                  rem aliquam quidem!
                </p>
              </div>
              <div className="">
                <Image
                  alt="ecofarm image"
                  src="/farm/farm-6.jpg"
                  width={500}
                  height={500}
                />
              </div>
            </div>
            <div className="flex flex-col  lg:grid lg:grid-cols-2">
              <div className=" bg-green-700 p-4  text-gray-100">
                <h2 className="mb-4 text-2xl font-bold">Best Soil Practices</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Autem numquam vero animi minus. Ducimus atque, hic similique
                  rem aliquam quidem!
                </p>
              </div>
              <div>
                <Image
                  alt="ecofarm image"
                  src="/farm/seed-1.jpg"
                  width={500}
                  height={500}
                  className="items-stretch bg-cover bg-center"
                />
              </div>
            </div>
          </div>
          {/* <div className="m-3 grid grid-cols-2 gap-5">
            <Image
              alt="tan ecofarm image"
              src="/farm/seed-3.jpg"
              width={800}
              height={500}
            />
            <div className="flex flex-col items-center justify-center">
              <h2>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Veritatis!
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatum, repellat corporis, sit deserunt iure debitis
                eligendi quia voluptates, placeat consequatur officiis earum?
                Nihil, laborum maxime expedita nostrum magni quibusdam ad ullam
                fuga modi, rem illum veritatis! Fuga reiciendis sed soluta.
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Overview;
