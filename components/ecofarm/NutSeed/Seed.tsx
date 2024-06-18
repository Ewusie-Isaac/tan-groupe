import Image from 'next/image';
import React from 'react';

const Seed = () => {
  return (
    <section className="m-5">
      <div className="lg:flex-2 flex flex-col gap-6">
        <Image
          src="/farm/seed.jpg"
          width={500}
          height={500}
          alt="TAN Ecofarms photo"
        />
        <div className="flex flex-col  justify-between gap-5 ">
          <h2 className="bg-yellow-500 p-3 font-bold text-gray-800 lg:text-2xl">
            Cashew Nut
          </h2>
          <p className="lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quo
            laudantium voluptatem quae consectetur aut labore? Magni ullam,
            consectetur deleniti deserunt expedita maxime architecto praesentium
            qui laboriosam nostrum maiores aliquid?
          </p>
          <ul className="lg:text-lg">
            <li>
              {' '}
              <span>&#10004;</span> laboriosam nostrum maiores aliquid
            </li>
            <li>
              {' '}
              <span>&#10004;</span> fugiat aut inventore quis!
            </li>
            <li>
              {' '}
              <span>&#10004;</span> consectetur adipisicing elit
            </li>
            <li>
              {' '}
              <span>&#10004;</span> adipisicing elit. Dolor
            </li>
          </ul>
          <div className="flex items-start justify-start gap-3">
            <h2 className="bg-gray-800 p-4 text-gray-200">
              Delivery worldwide
            </h2>
            <button className="mb-10 bg-green-700 p-4 align-top text-gray-200">
              Order Now
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="m-1">
          <h3 className="text-xl font-bold uppercase text-gray-800 lg:text-3xl lg:capitalize">
            Other Seeds and Nuts Available
          </h3>
          <div className="px-5">
            <ul className="grid-1-1 ">
              <li className="nut-1 relative text-gray-200">
                <div className="absolute -bottom-4 -left-8 w-3/4 bg-gray-200 p-2 text-gray-800">
                  <h4>Some Seed</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </li>
              {/* <li className="seed-2 relative text-gray-200">
                <div className="absolute -bottom-4 -left-8 w-3/4 bg-gray-200 p-2 text-gray-800">
                  <h4>Some Seed</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </li> */}
              <li className="nut-4 relative text-gray-200">
                <div className="absolute -bottom-4 -left-8 w-3/4 bg-gray-200 p-2 text-gray-800">
                  <h4>Some Seed</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </li>
              <li className="nut-3 relative text-gray-200">
                <div className="absolute -bottom-4 -left-8 w-3/4 bg-gray-200 p-2 text-gray-800">
                  <h4>Some Seed</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </li>
              <li className="seed-4 relative text-gray-200">
                <div className="absolute -bottom-4 -left-8 w-3/4 bg-gray-200 p-2 text-gray-800">
                  <h4>Some Seed</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </li>
              <li className="nut-2 relative text-gray-200">
                <div className="absolute -bottom-4 -left-8 w-3/4 bg-gray-200 p-2 text-gray-800">
                  <h4>Some Seed</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </li>
              <li className="seed-5 relative text-gray-200">
                <div className="absolute -bottom-4 -left-8 w-3/4 bg-gray-200 p-2 text-gray-800">
                  <h4>Some Seed</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Seed;
