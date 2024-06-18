import Image from 'next/image';
import React from 'react';

const Details = () => {
  return (
    <div className=" mx-10 my-40 flex flex-col gap-5 md:grid md:grid-cols-2 lg:grid lg:grid-cols-2">
      <div className="w-full">
        <Image
          className="w-full xl:-left-4 xl:top-0"
          src="/main/lab-8.jpg"
          width={500}
          height={500}
          alt="tan life sciences"
        />
      </div>
      <div className="">
        <p
          className="bg-gradient-to-r from-purple-2
         to-green-400 bg-clip-text pb-5 text-4xl font-bold text-transparent"
        >
          Welcome to
        </p>
        <h2 className="pb-5 text-3xl font-bold">TAN Life Science Services</h2>
        <p className="mb-5">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo quam,
          nesciunt quod quae facilis alias. Aperiam hic non voluptatum rerum
          deserunt id, cum amet obcaecati, provident eum quod suscipit
          repellendus libero voluptatibus, dolorem maiores minima quas. Est et
          eum maiores labore rerum eius quam consequuntur, temporibus odit
          dolores delectus laboriosam tempore enim perspiciatis debitis quos
          iste cumque modi facere.
        </p>
        <button className="  p-2 outline-double outline-offset-2 ring-offset-purple-3">
          For All Inquries
        </button>
      </div>
    </div>
  );
};

export default Details;
