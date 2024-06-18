import React from 'react';

const Solutions = () => {
  return (
    <div className="my-8 bg-[url('/life/life-b.jpg')] bg-cover p-8  lg:mt-32 ">
      <div className="mx-4 mb-5 rounded-xl bg-black p-8 text-white md:mx-20">
        <h3 className="pb-3 text-3xl font-bold">What`s TAN Life Science ?</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui obcaecati
          eius ad? Enim eaque ipsa dicta fugiat eligendi!
        </p>
      </div>
      <div className=" mb-10 flex flex-col gap-5 p-5 md:flex md:flex-row md:gap-10">
        <div className="rounded-3xl  bg-black/80 p-5 text-white lg:p-8">
          <h2 className="pb-3 text-4xl font-bold">Problems.</h2>
          <p className="pb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
            perspiciatis cum.Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Libero excepturi ducimus nam vero tempore rem
          </p>
          <div>
            <ul>
              <li>1 Problem in Life science</li>
              <li>2 Problem in Life science</li>
              <li>3 Problem in Life science</li>
              <li>4 Problem in Life science</li>
            </ul>
          </div>
        </div>
        <div className="rounded-3xl bg-black/70 p-5 text-white">
          <h2 className="pb-3 text-4xl font-bold">Solutions.</h2>
          <p className="pb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
            perspiciatis cum.Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Libero excepturi ducimus nam vero tempore rem
          </p>
          <div>
            <ul>
              <li>1 Problem in Life science</li>
              <li>2 Problem in Life science</li>
              <li>3 Problem in Life science</li>
              <li>4 Problem in Life science</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
