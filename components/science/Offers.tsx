import Image from 'next/image';
import React from 'react';

const Offers = () => {
  return (
    <section className="m-10  rounded-xl bg-black/35 px-4 py-10">
      <div className="mb-6">
        <h2 className="text-xl font-semibold">Our Expect</h2>
        <p className="text-4xl font-bold">Services in Life Science</p>
      </div>
      <div className="offers ">
        <div className="flex flex-col">
          <Image
            className="mb-3 rounded-xl"
            src="/life/lab-7.jpg"
            width={400}
            height={400}
            alt="tan life science"
          />
          <u className="no-underline">
            <li className="list-none">
              <h1 className="text-3xl font-bold">Life Science</h1>
              <p className="">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos,
                sed!
              </p>
            </li>
          </u>
        </div>
        <div className="flex flex-col">
          <Image
            className="mb-3 rounded-xl"
            src="/main/lab-1.jpg"
            width={400}
            height={400}
            alt="tan life science"
          />
          <u className="no-underline">
            <li className="list-none">
              <h1 className="text-3xl font-bold">Life Science</h1>
              <p className="">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos,
                sed!
              </p>
            </li>
          </u>
        </div>
        <div className="flex flex-col">
          <Image
            className="mb-3 rounded-xl"
            src="/life/sample-de.jpg"
            width={400}
            height={400}
            alt="tan life science"
          />
          <u className="no-underline">
            <li className="list-none">
              <h1 className="text-3xl font-bold">Life Science</h1>
              <p className="">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos,
                sed!
              </p>
            </li>
          </u>
        </div>
      </div>
    </section>
  );
};

export default Offers;
