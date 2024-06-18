import React from 'react';
import Navigation from './Navigation';
import Image from 'next/image';
import Footer from './Footer';

const About = () => {
  return (
    <section>
      <div className="about">
        <Navigation />
        <div className="p-10 lg:w-1/2">
          <h1 className="mb-4 text-4xl font-bold uppercase">About Us</h1>
          <p className="bg-white/80 p-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita
            alias obcaecati, harum excepturi repudiandae non quos mollitia nemo
            nesciunt dolorem nobis voluptas facere ipsum vel praesentium! Ipsam
            ducimus praesentium non.
          </p>
        </div>
      </div>
      <ul className="key-grid">
        <li className="about-list">
          <span className="text-7xl">&#9752;</span>
          Fresh from Farm
        </li>
        <li className="about-list">
          <span className="text-7xl">&#9992;</span>
          Worldwide delivery
        </li>
        <li className="about-list">
          <span className="text-7xl">&#9990;</span>
          24/7 Support
        </li>
        <li className="about-list">
          <span className="text-7xl">&#10004;</span>
          Healthy Food
        </li>
      </ul>
      <div className="m-2 flex flex-col gap-4 p-2 lg:grid lg:grid-cols-2">
        <div>
          <h2 className="mb-3 text-3xl font-bold capitalize text-green-700 lg:text-3xl">
            Products and Services
          </h2>
          <p>
            Ecofarm offers a range of products and services focused on
            sustainable agriculture and ecological farming practices. They
            provide high-quality farm products, including fruits, vegetables,
            legumes, tubers, and cereals, as well as premium farm inputs to
            enhance farm yields. Additionally, they offer excellent services to
            farmers, including agricultural solutions to increase productivity
            and provide affordable inputs and income-generating channels to
            rural communities
          </p>
          <ul className="my-5">
            <h3 className="mb-2 bg-gray-300 p-3 text-2xl font-semibold text-green-700">
              Some Availables Services
            </h3>
            <div className="ml-4">
              <li>
                {' '}
                <span className=" text-green-700">&#10004;</span> Seeds and nuts
              </li>
              <li>
                {' '}
                <span className=" text-green-700">&#10004;</span> Fruits
              </li>
              <li>
                {' '}
                <span className=" text-green-700">&#10004;</span> Grains and
                Cereals
              </li>
              <li>
                {' '}
                <span className=" text-green-700">&#10004;</span> By-Products
              </li>
            </div>
          </ul>
        </div>
        <Image
          className=""
          src="/farm/farm-9.jpg"
          width={500}
          height={500}
          alt="tan ecofarm"
        />
      </div>
      <div className="m-2 flex flex-col-reverse p-4 lg:grid lg:grid-cols-2">
        <Image
          className=""
          src="/farm/farm-12.jpg"
          width={500}
          height={500}
          alt="tan ecofarm"
        />
        <div className="mb-5">
          <h2 className="mb-3 text-3xl font-bold capitalize text-green-700 lg:text-3xl">
            Commitment to Sustainability
          </h2>
          <p>
            Ecofarm is committed to promoting farming practices that prioritize
            ecological balance, biodiversity, and sustainability. They believe
            that the world is at a critical decision crossroads and that
            personal decisions in daily living are key to changing the
            destructive course of global warming, resource depletion, and mass
            extinctions. They strive to be the change they want to see in the
            world by farming organically for local markets and home use,
            utilizing alternative technologies and permaculture, and minimizing
            resource use and living in community.
          </p>
          <ul className="my-5">
            <h3 className="mb-2 bg-gray-300 p-3 text-2xl font-semibold text-green-700">
              Some Availables Services
            </h3>
            <div className="ml-4">
              <li>
                {' '}
                <span className=" text-green-700">&#10004;</span> Best Farm
                Practices
              </li>
              <li>
                {' '}
                <span className=" text-green-700">&#10004;</span> Training
                Support
              </li>
              <li>
                {' '}
                <span className=" text-green-700">&#10004;</span> Youth
                Empowerments
              </li>
            </div>
          </ul>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default About;
