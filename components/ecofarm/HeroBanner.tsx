import Image from 'next/image';
import Navigation from './Navigation';

const HeroBanner = () => {
  return (
    <section className="tanfarm">
      <Navigation />
      <div className="mb-2 flex items-center justify-center gap-2 text-gray-700 lg:mb-6 lg:grid lg:grid-cols-2">
        <div className="">
          <h2 className="pb-3 text-xl font-bold uppercase text-green-700 lg:text-3xl">
            Fresh Organic products from farm
          </h2>
          <p className="pb-5 text-xl lg:pb-10">
            Indulage in the pure essence of nature with our fresh, organic
            produce, harvested straight from farm to your table. Experience the
            vibrant flavors and wholesome goodness that only genuine, farm-fresh
            products can offer. Taste the difference in every bite, knowing it`s
            all natural and sustainable grown just for you.
          </p>
          <button className="rounded-md bg-green-700 px-4 py-2 text-white hover:bg-green-800">
            Read More
          </button>{' '}
          <button className="rounded-md bg-green-700 px-4 py-2 text-white hover:bg-green-800">
            Read More
          </button>
        </div>
        <div className="hidden lg:block">
          <Image
            width={600}
            height={300}
            alt="tan ecofarms"
            src="/farm/farm-11.jpg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
