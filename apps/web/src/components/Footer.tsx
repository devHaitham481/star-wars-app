import SocialLinks from "./SocialLinks";
import Image from "next/image";

function Footer() {
  return (
    <footer className="mt-16 grid place-items-center bg-black text-white p-5 relative">
      <div className="absolute inset-0">
        <Image
          src="https://static-mh.content.disney.io/starwars/assets/footer/vader_2-86e8fdb4e26d.jpg"
          alt="Footer Background"
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          priority
          quality={100}
          className="opacity-50"
        />
      </div>
      <p className="text-gray-300 text-sm my-16">FOLLOW STAR WARS:</p>
      <SocialLinks />
      <p className="mt-8 mb-3 text-sm text-gray-300">All Rights Reserved</p>
      <div className="flex flex-wrap justify-center gap-3 px-10">
        <a
          href="/"
          target="_blank"
          className="text-gray-300 text-sm hover:underline hover:text-white"
        >
          Terms of Use
        </a>
        <a
          href="/"
          target="_blank"
          className="text-gray-300 text-sm hover:underline hover:text-white"
        >
          Privacy Rights
        </a>
        <a
          href="/"
          target="_blank"
          className="text-gray-300 text-sm hover:underline hover:text-white"
        >
          Star Wars Helpdesk
        </a>
      </div>
    </footer>
  );
}

export default Footer;
