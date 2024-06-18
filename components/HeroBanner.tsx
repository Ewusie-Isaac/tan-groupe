import Navigation from './Navigation';
import Groups from './Groups';

const HeroBanner = () => {
  return (
    <header className="tangroup">
      <Navigation />
      <div className="mb-40 lg:mb-72">
        <h1 className="text-center text-5xl font-bold">
          TAN Group of Companies
        </h1>
        <p className="mt-5 text-center text-lg">
          TAN Groups is a community of people who are passionate about
          technology and science.
        </p>
      </div>
      <Groups />
    </header>
  );
};

export default HeroBanner;
