import Link from 'next/link';

const Groups = () => {
  return (
    <ul className="tangroup-list">
      <Link href="/lifescience" className="bg-gray-900 p-4 text-gray-100">
        <h2 className="pb-3 text-3xl font-semibold">TAN Life Sciences</h2>
        <p>
          TAN Life Sciences is dedicated to pioneering advancements in the field
          of healthcare through innovative research, cutting-edge technology,
          and a commitment to improving global well-being. Our focus spans from
          pharmaceutical development to medical devices, with a mission to
          deliver safe, effective, and accessible healthcare solutions to people
          around the world.
        </p>
      </Link>
      <Link href="/ecofarm" className="bg-green-500  p-4 ">
        <h2 className="pb-3 text-3xl font-semibold">TAN EcoFarms</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
          voluptatibus nisi, optio reprehenderit sint exercitationem non
          quibusdam sapiente, veritatis magni vitae obcaecati minima quae!
          Consequuntur.
        </p>
      </Link>
      <Link href="#" className="bg-gray-700  p-4 text-gray-100">
        <h2 className="pb-3 text-3xl font-semibold">Valkem Engineering</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
          voluptatibus nisi, optio reprehenderit sint exercitationem non
          quibusdam sapiente, veritatis magni vitae obcaecati minima quae!
          Consequuntur.
        </p>
      </Link>
    </ul>
  );
};

export default Groups;
