import { footerLinks, socialMedia } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="padding padding-x padding-t max-container scroll-smooth bg-gray-200 pb-8 ">
      <div className="flex flex-wrap items-start justify-between gap-20 max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <Image
              className=""
              src="/tanlogo.png"
              width={150}
              height={46}
              alt="tan company logo"
            />
          </a>
          <p className="font-regular mt-6 text-sm leading-5 text-gray-600  sm:max-w-sm">
            TAN Freight and Logistics is a customer-centric company dedicated to
            providing reliable and compliant transportation solutions,
            prioritizing safety and satisfaction based on positive feedback from
            our clients.
          </p>
          <div className="mt-8 flex items-center gap-2">
            {socialMedia.map((icon) => (
              <Link
                href={icon.href}
                key={icon.src}
                className="flex h-12 w-12 items-center justify-center"
              >
                <Image src={icon.src} alt={icon.alt} width={24} height={24} />
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-1 flex-wrap justify-between gap-20 text-gray-600  lg:gap-10">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4
                key={section.title}
                className="mb-6 text-base font-bold leading-normal 
               "
              >
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <Link
                    href={link.link}
                    key={link.name}
                    className="mt-3 flex cursor-pointer text-sm leading-normal  hover:text-gray-800"
                  >
                    {link.name}
                  </Link>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div
        className="mt-24 flex items-center justify-between text-gray-600 
      max-sm:flex-col max-sm:items-center"
      >
        <p className="max-sm:w-18 text-center">
          Copyright &copy; {new Date().getFullYear()} TAN Freight and Logistics.
          All rights reversed.
        </p>
        <p className="max-sm:mt-5">Terms and Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
