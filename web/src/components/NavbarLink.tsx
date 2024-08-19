import React from "react";
import Link from "next/link";

const NavbarLink = ({ title, href }) => {
  return (
    <Link
      href={href}
      className="text-white px-4 py-2 hover:text-gray-400 active:text-gray-400"
    >
      {title}
    </Link>
  );
};

export default NavbarLink;
