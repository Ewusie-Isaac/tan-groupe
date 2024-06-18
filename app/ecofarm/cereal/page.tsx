import CerealComponent from '@/components/ecofarm/Cereal/CerealComponent';
import Footer from '@/components/ecofarm/Footer';
import Navigation from '@/components/ecofarm/Navigation';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Cereals - Ecofarms',
};
const Cereal = () => {
  return (
    <>
      <Navigation />
      <CerealComponent />
      <Footer />
    </>
  );
};

export default Cereal;
