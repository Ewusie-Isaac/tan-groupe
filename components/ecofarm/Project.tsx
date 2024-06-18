import Image from 'next/image';
import React from 'react';

const Project = () => {
  return (
    <div className=" text-gray-700">
      {/* <h1>Project</h1> */}
      <div className="grid-1   duration-75">
        <div className="project-item hover:scale-101 ">
          <Image
            alt="tan ecofarm"
            width={600}
            height={600}
            src="/farm/farm-13.jpg"
          />
          <div className="-mt-6  w-11/12  flex-1 rounded-lg bg-gray-200/80 p-2 ">
            <h2 className="text-xl font-semibold capitalize">
              Community Involvement
            </h2>
            <p>
              Engagement with community through hands-on farming initiatives,
              fostering local food security and sustainability. Together, we
              cultivate not just crops, but a stronger, more resilient community
              spirit.
            </p>
          </div>
        </div>
        <div className="project-item hover:scale-101 text-gray-800">
          <Image
            alt="tan ecofarm"
            width={600}
            height={600}
            src="/farm/farm-2.jpg"
          />
          <div className="-mt-6  w-11/12 flex-1 rounded-lg bg-gray-200/80 p-2 ">
            <h2 className="text-xl font-semibold capitalize">
              Best Farming Practices
            </h2>
            <p>
              Embrace the pinnacle of agriculture with our best farming
              practices, designed to maximize yield and sustainability. Enhance
              your farm's productivity while protecting the environment for
              future generations.
            </p>
          </div>
        </div>
        <div className="project-item hover:scale-101">
          <Image
            alt="tan ecofarm"
            width={600}
            height={600}
            src="/farm/farm-12.jpg"
          />
          <div className="-mt-6 w-11/12  flex-1 rounded-lg bg-gray-200/80 p-2 ">
            <h2 className="text-xl font-bold capitalize">Youth Empowerment</h2>
            <p>
              Empowering the youth with opportunities in agriculture, unlocking
              their potential for food security. Inspire youth to shape a
              sustainable future through hands-on experience and education in
              modern farming practices.
            </p>
          </div>
        </div>
        {/* <div className="project-item hover:scale-101">
          <Image
            alt="tan ecofarm"
            width={600}
            height={600}
            src="/farm/farm-11.jpg"
          />
          <div className="-mt-6  w-11/12 flex-1 bg-slate-200 p-2">
            <h2 className="text-xl font-semibold capitalize">tan ecofarm</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Provident quisquam voluptatibus eligendi nam praesentium veniam
              natus in similique minus adipisci.
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Project;
