import Image from 'next/image';
import Navigation from './Navigation';

const Header = () => {
  return (
    <>
      <Navigation />
      <header className="lifescienceheader flex w-full flex-col p-10">
        <div className="pb-8">
          {/* <h1 className="bg-gradient-to-r from-purple-2 to-green-400 bg-clip-text text-center text-4xl font-bold text-transparent">
            Life Science
          </h1> */}
          <div className="mt-10 rounded-xl bg-black/80 p-5 text-white md:w-2/5">
            <h1 className="bold-32 pb-10 text-xl">TAN Life Sciences.</h1>
            <p>
              TAN Life Sciences is dedicated to pioneering advancements in the
              field of healthcare through innovative research, cutting-edge
              technology, and a commitment to improving global well-being. Our
              focus spans from pharmaceutical development to medical devices,
              with a mission to deliver safe, effective, and accessible
              healthcare solutions to people around the world. At TAN Life
              Sciences, we strive to redefine the future of healthcare by
              driving innovation, fostering collaboration, and promoting
              sustainable practices that benefit patients, healthcare providers,
              and society as a whole.
            </p>
          </div>
        </div>

        <div>
          <div className="mt-6 h-20 ">++++++++++++++++++++++++++</div>
          {/* <Image
            src="/main/lab-.jpg"
            width={300}
            height={300}
            alt="++++++++++++++++++++++++++++"
          ></Image> */}
          {/* <Image
            className="md:hidden"
            src="/main/lab-1.jpg"
            width={500}
            height={500}
            alt="++++++++++++++++++++++++++++"
          ></Image> */}
          <div className="mt-10  hidden bg-purple-1/50">
            <div className="w-2/5">
              <h1 className="pb-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea
                sunt sed omnis quo molestias nemo officiis laboriosam quod odit
                commodi?
              </p>
            </div>
            <div className=" justify-items-endbg-[url('/main/lab-2.jpg')] w-2/5  bg-slate-500">
              <h1 className="pb-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h1>
            </div>
          </div>
        </div>
      </header>
      <div className=" relative hidden lg:block">
        <div
          className="absolute z-10 flex flex-wrap gap-10  md:-top-44 md:right-20
        "
        >
          <Image
            className="w-60 rounded-xl border-4 border-solid border-gray-100 bg-white bg-clip-border md:h-40 md:w-48 "
            src="/main/lab-2.jpg"
            width={100}
            height={100}
            alt="tan"
          />
          <Image
            className="w-60 rounded-xl border-4 border-solid  border-gray-100 bg-white bg-clip-border md:h-40 md:w-48"
            src="/main/lab-1.jpg"
            width={100}
            height={100}
            alt="tan"
          />
          <Image
            className="w-60 rounded-xl border-4 border-solid  border-gray-100 bg-white bg-clip-border md:h-40 md:w-48"
            src="/main/lab-5.jpg"
            width={100}
            height={100}
            alt="tan"
          />
        </div>
      </div>
    </>
  );
};

export default Header;
