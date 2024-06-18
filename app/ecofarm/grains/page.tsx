import Footer from '@/components/ecofarm/Footer';
import Navigation from '@/components/ecofarm/Navigation';
import Grains from '@/components/ecofarm/grains/Grains';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Grains and Cereals - Ecofarms',
};
const SeedandNuts = () => {
  return (
    <>
      <Navigation />
      <Grains />
      <Footer />
    </>
  );
};

export default SeedandNuts;
