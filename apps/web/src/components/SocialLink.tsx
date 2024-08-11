import Image from "next/image";

function SocialLink({ link, image }) {
  return (
    <a href={link} className="">
      <div className="rounded-full p-2">
        <Image src={image} alt="Social Icon" width={21} height={21} />
      </div>
    </a>
  );
}

export default SocialLink;
