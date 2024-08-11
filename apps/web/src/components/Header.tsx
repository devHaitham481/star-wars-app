import Image from "next/image";
import Link from "next/link";
import SocialLinks from "./SocialLinks";

function Header() {
  return (
    <header className="p-5 pb-0 bg-no-repeat bg-cover bg-top bg-[url('https://static-mh.content.disney.io/starwars/assets/navigation/navigation_stars@2x-815223a7aade.jpg')] fixed top-0 right-0 left-0 z-50 flex items-start justify-between">
      <div className="flex-shrink-0">
        <SocialLinks />
      </div>
      <Link href="/">
        <Image
          src="https://download.logo.wine/logo/Star_Wars/Star_Wars-Logo.wine.png"
          alt="Star Wars Logo"
          className="object-contain mt-[-40px] mb-[-20px] h-[180px] filter brightness-0 invert"
          width={248}
          height={40}
        />
      </Link>
      <div className="flex items-center gap-4">
        <div className="relative flex items-center w-[248px] h-[40px] p-2 bg-[#343434] rounded opacity-70 focus-within:opacity-100 transition-opacity">
          <input
            className="flex-grow bg-transparent outline-none border-none text-white text-sm placeholder-gray-500"
            placeholder="Search Star Wars"
          />
          <Image
            src="https://static-mh.content.disney.io/starwars/assets/navigation/icon_search-957a123fdb62.svg"
            alt="Search Icon"
            width={25}
            height={25}
            className="absolute right-2 top-1/2 -translate-y-1/2"
          />
        </div>
        <div className="flex items-center justify-end w-full mt-2 text-[#999]">
          <button className="bg-transparent font-semibold text-sm tracking-wide cursor-pointer transition-colors hover:text-[#ccc]">
            LOG IN
          </button>
          <span className="mx-2 text-[#343434] text-lg font-medium" />
          <button className="bg-transparent font-semibold text-sm tracking-wide cursor-pointer transition-colors hover:text-[#ccc]">
            SIGN UP
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
