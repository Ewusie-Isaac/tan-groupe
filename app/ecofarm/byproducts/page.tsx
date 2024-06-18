import Footer from '@/components/ecofarm/Footer';
import Navigation from '@/components/ecofarm/Navigation';
import ByProduct from '@/components/ecofarm/byProduct/ByProduct';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'By-Products - EcoFarms',
};
const SeedandNuts = () => {
  return (
    <>
      <Navigation />
      <ByProduct />
      <Footer />
    </>
  );
};

export default SeedandNuts;
