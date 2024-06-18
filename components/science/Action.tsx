import Link from 'next/link';

const Action = () => {
  return (
    <>
      {/* <Link href="mailto:info@tanfreight.com">info@tanfreight.com</Link> */}
      <a
        className="flex items-center justify-end rounded-lg border bg-gray-900 p-2 text-white"
        href="tel:233204261569"
      >
        +233 20 426 1569
      </a>
    </>
  );
};

export default Action;
