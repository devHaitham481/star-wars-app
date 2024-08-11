import NavbarLink from "./NavbarLink";
import { Button } from "@repo/ui";

function Navbar() {
  return (
    <div className="border-t border-gray-800 bg-black w-full shadow-md flex justify-center items-center h-[47px] fixed top-[135px] right-0 left-0 z-50">
      <div className="flex items-center h-full">
        <NavbarLink title="NEWS + BLOG" />
        <NavbarLink title="VIDEO" />
        <NavbarLink title="FILMS" />
        <NavbarLink title="SERIES" />
        <NavbarLink title="INTERACTIVE" />
        <NavbarLink title="COMMUNITY" />
        <Button />
        <NavbarLink title="DATABANK" />
      </div>
    </div>
  );
}

export default Navbar;
