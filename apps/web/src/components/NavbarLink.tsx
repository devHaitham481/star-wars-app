import Link from "next/link";

function NavbarLink({ title }) {
  return (
    <Link
      href="#"
      className="
      flex
      items-center
      justify-center
      border-l
      border-gray-800
      h-full
      text-gray-500
      text-sm
      px-6
      transition-colors
      hover:text-white
      cursor-pointer
      last:border-r
      last:border-gray-800
      "
    >
      <h4 className="text-base leading-tight tracking-wide">{title}</h4>
    </Link>
  );
}

export default NavbarLink;
