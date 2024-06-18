import Footer from '@/components/ecofarm/Footer';
import Navigation from '@/components/ecofarm/Navigation';
import Seed from '@/components/ecofarm/NutSeed/Seed';
import { Metadata } from 'next';
import React from 'react';
export const metadata: Metadata = {
  title: 'Seeds and Nuts - Ecofarms',
};
const SeedandNuts = () => {
  return (
    <>
      <Navigation />
      <Seed />
      <Footer />
    </>
  );
};

export default SeedandNuts;
