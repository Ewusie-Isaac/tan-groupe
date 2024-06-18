import Image from 'next/image';

const Process = () => {
  return (
    <section>
      <div className="grid-1 p-5">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-xl font-bold capitalize text-green-700 lg:text-5xl">
            Why should you use our services
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            voluptatum eum sit fugit repudiandae harum, molestias temporibus
            corporis.
          </p>
          <div className="mt-5 flex flex-col gap-2">
            <ul className="flex flex-col gap-3">
              <li className="flex-2  bg-green-700 p-2 text-gray-200">
                <span className="pr-2 text-4xl">&#187;</span> Lorem ipsum dolor
                sit, amet consectetur adipisicing elit.
              </li>
              <li className="flex-2 bg-green-700 p-2 text-gray-200">
                <span className="pr-2 text-4xl">&#8280;</span> Lorem ipsum dolor
                sit, amet consectetur adipisicing elit.
              </li>
              <li className="flex-2 bg-green-700 p-2 text-gray-200">
                <span className="pr-2 text-4xl">&#10010;</span> Lorem ipsum
                dolor sit, amet consectetur adipisicing elit.
              </li>
              <li className="flex-2 bg-green-700 p-2 text-gray-200">
                <span className="pr-2 text-4xl">&#10124;</span> Lorem ipsum
                dolor sit, amet consectetur adipisicing elit.
              </li>
            </ul>
          </div>
        </div>
        <Image
          src="/farm/farm-10.jpg"
          alt="ecofarms"
          height={600}
          width={600}
        />
      </div>
    </section>
  );
};

export default Process;
