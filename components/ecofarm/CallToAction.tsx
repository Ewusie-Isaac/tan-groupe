import Image from 'next/image';
import React from 'react';

export const CallToAction = () => {
  return (
    <section className="bg-green-700 p-8 text-gray-800">
      <div className="m-3 flex flex-col gap-5 lg:grid lg:grid-cols-2">
        <div className="rounded-lg bg-gray-200 p-3 shadow-xl ">
          <h2 className="text-2xl font-semibold">Our Vision</h2>
          <p>
            To create a thriving agricultural landscape in Africa that is
            sustainable, resilient, and inclusive. We envision a future where
            ecological farming practices are widely adopted, contributing to the
            long-term health and productivity of our land while supporting
            vibrant rural communities. Through our efforts, we aspire to be
            leaders in sustainable agriculture, driving positive change and
            economic advancement across the entire African Continent.
          </p>
        </div>
        <div className="rounded-lg bg-gray-200 p-3  shadow-xl ">
          <h2 className="text-2xl font-semibold">Our Mission</h2>
          <p>
            To champion Ecological Farming for Sustainable Africa. We are
            committed to promoting farming practices that prioritize ecological
            balance, biodiversity, and sustainability. Through innovative
            approaches and community engagement, we aim to nurture soil health,
            foster biodiversity, and ensure efficient natural resource
            management. Our commitment extends to addressing environmental
            issues, empowering farmers, and engaging youth in agriculture.
          </p>
        </div>
      </div>
      {/* <div>
        <Image src="/farm/ecofarms-1.jpg" alt="" width={80} height={80} />
      </div> */}
    </section>
  );
};
