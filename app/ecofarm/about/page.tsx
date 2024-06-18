import About from '@/components/ecofarm/About';
import { Metadata } from 'next';
// import Navigation from '@/components/ecofarm/Navigation';
export const metadata: Metadata = {
  title: 'About EcoFarms',
};
const page = () => {
  return (
    <>
      {/* <Navigation /> */}
      <About />
    </>
  );
};

export default page;
