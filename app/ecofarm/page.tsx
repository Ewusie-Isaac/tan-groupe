import { CallToAction } from '@/components/ecofarm/CallToAction';
import Category from '@/components/ecofarm/Category';
import Footer from '@/components/ecofarm/Footer';
import HeroBanner from '@/components/ecofarm/HeroBanner';
import Offer from '@/components/ecofarm/Offer';
import Overview from '@/components/ecofarm/Overview';
import Process from '@/components/ecofarm/Process';
import Project from '@/components/ecofarm/Project';
import Values from '@/components/ecofarm/Values';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Ecofarms',
};
const Page = () => {
  return (
    <section>
      <HeroBanner />
      <Values />

      {/* <Overview /> */}
      <Category />
      <Offer />
      {/* <Values /> */}
      <Project />
      <Process />
      <CallToAction />
      <Footer />
    </section>
  );
};

export default Page;
