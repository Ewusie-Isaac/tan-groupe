import Image from 'next/image';
import React from 'react';

const Mission = () => {
  return (
    <section className="m-5">
      <div className="flex flex-col gap-5 p-5 md:grid md:grid-cols-2">
        <div className="p-8">
          <div className="mb-4 ">
            <h2 className="mb-3 text-xl font-semibold">We are Commited to</h2>
            <h1 className="mb-3 text-xl font-bold lg:text-4xl">
              Our Mission Statement
            </h1>
            <p className="mb-3">
              odio, aperiam ipsam enim provident suscipit quo, ad numquam porro
              neque sit, dolore architecto reiciendis! Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Architecto incidunt nobis eaque
              fugiat ex obcaecati cumque, quia hic beatae itaque consequuntur.
              Eum recusandae fuga harum repellendus ducimus iusto sequi sed!
            </p>
            <p className="mb-3">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste
              odio, aperiam ipsam enim provident suscipit quo, ad numquam porro
              neque sit, dolore architecto reiciendis! Lorem ipsum dolor sit
            </p>
          </div>
          <div>
            <Image
              className="rounded-xl"
              src="/life/life-doc.jpg"
              width={500}
              height={500}
              alt="tan life science mission"
            />
          </div>
        </div>
        <div>
          <div className="mb-3">
            <Image
              className="w-full rounded-lg"
              src="/life/life-2.jpg"
              width={500}
              height={500}
              alt="tan life science mission"
            />
          </div>
          <div className=" p-2">
            <ul className="grid grid-cols-2 content-center justify-center gap-5">
              <li className="flex flex-col items-center justify-center bg-red-500 p-5">
                <span className="text-3xl">34 &uArr;</span>

                <h2>Satisfied Customers</h2>
              </li>
              <li className="flex flex-col items-center justify-center bg-green-600 p-5">
                <span className="text-3xl">49 &uArr;</span>
                <h2> Hospitals Served</h2>
              </li>
              <li className="flex flex-col items-center justify-center bg-blue-400 p-5">
                <span className="text-3xl">16 &uArr;</span>
                <h2 className="">Satisfied clients</h2>
              </li>
              <li className="flex flex-col items-center justify-center bg-gray-400 p-5">
                <span className="text-3xl">67 &uArr;</span>
                <h2> Operations Success</h2>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
