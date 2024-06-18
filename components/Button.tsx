import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
type ButtonProps = {
  title: string;
  type: string;
  icon?: string;
  variant: string;
  full?: boolean;
  link?: string;
};
const Button = ({ type, title, variant, icon, full, link }: ButtonProps) => {
  return (
    <Link
      href="#process"
      className={`flexCenter  gap-3  border ${variant} ${full && 'w-full'}`}
    >
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <label className="bold-16 cursor-pointer whitespace-nowrap">
        {title}
      </label>
    </Link>
  );
};

export default Button;
