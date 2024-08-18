import React from "react";
import NavbarLink from "./NavbarLink";

function Navbar() {
  return (
    <div className="border-t border-gray-800 bg-black w-full shadow-md flex justify-center items-center h-[47px] fixed top-[135px] right-0 left-0 z-50">
      <div className="flex items-center h-full">
        <NavbarLink title="PLANETS" href="/planets" />
        <NavbarLink title="STARSHIPS" href="/starships" />
        <NavbarLink title="PEOPLE" href="/people" />
      </div>
    </div>
  );
}

export default Navbar;
