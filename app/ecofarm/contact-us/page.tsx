import Footer from '@/components/ecofarm/Footer';
import Navigation from '@/components/ecofarm/Navigation';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Contact Ecofarms',
};
const Page = () => {
  return (
    <section>
      <Navigation />
      <div className="padding padding-t max-containe px-8 pb-8 sm:px-8">
        <div className="relative mb-8">
          <Image
            src="/farm/ecofarms.png"
            alt="tan logo"
            width={30}
            height={30}
            className="absolute left-[-1px] top-[-15px] "
          />
          <h2 className="bold-40 lg:bold-64">Contact us</h2>
          <p className="regular-14 lg:regular-16 text-gray-30 lg:w-3/5">
            For efficient and reliable air freight solutions tailored to your
            needs, contact TAN Freight and Logistics today.
          </p>
        </div>
        <div className="flex flex-wrap items-start justify-between gap-10 max-lg:flex-col-reverse">
          <div className="flex flex-col items-start">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.458499833988!2d-0.14922259999999998!3d5.6466062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf836b3905ed0d%3A0x169ee39e7ea942b7!2sTAN%20Freight%20and%20Logistics%20Ltd!5e0!3m2!1sen!2sgh!4v1715772286543!5m2!1sen!2sgh"
              width="800"
              height="300"
              // style="border:0;"
              // allowfullscreen=""
              loading="lazy"
              // referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div
            className="flex flex-1 flex-wrap justify-between gap-8 rounded-xl
           bg-gray-10 p-5 shadow-md lg:gap-1"
          >
            <div className="rounded-xl bg-white p-4  shadow-md">
              <h2 className="pb-4 text-xl">Our Head Office</h2>
              <p className="text-gray-500">
                TAN Freight and Logistics LTD, 62, 22318 Building Boundary Rd,
                East Legon - Accra
              </p>
              <div className="flex flex-col gap-2 pt-3 text-sm text-gray-500">
                <p> +233(0)50 333 7178</p>
                <p>info@tanfreight.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Page;
