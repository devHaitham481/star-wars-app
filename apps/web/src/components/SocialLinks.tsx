import SocialLink from "./SocialLink";

function SocialLinks() {
  return (
    <div className="flex items-center gap-5">
      <SocialLink
        link="https://www.facebook.com"
        image="https://static-mh.content.disney.io/starwars/assets/shared/icon_facebook-aec3b685b1a1.svg"
      />
      <SocialLink
        link="https://www.instagram.com"
        image="https://static-mh.content.disney.io/starwars/assets/shared/icon_instagram-be8807d03d5f.svg"
      />
      <SocialLink
        link="https://www.tumblr.com"
        image="https://static-mh.content.disney.io/starwars/assets/shared/icon_tumblr-9dbf2f5872a3.svg"
      />
      <SocialLink
        link="https://www.twitter.com"
        image="https://static-mh.content.disney.io/starwars/assets/shared/icon_twitter-bde9a7f5abaa.svg"
      />
      <SocialLink
        link="https://www.youtube.com"
        image="https://static-mh.content.disney.io/starwars/assets/shared/icon_youtube-ed78c6ee1c7d.svg"
      />
      <div className="relative ml-2">
        <div className="absolute border-t border-gray-800 top-[-7px] h-[28px] bg-gray-800 right-[55px]" />
        <a
          href=""
          className="w-[43px] h-[15px] flex justify-center items-center bg-gray-700 rounded-full transition-all hover:bg-gray-300"
        >
          <span className="block w-[31px] h-[9px] bg-no-repeat bg-[url('https://static-mh.content.disney.io/starwars/assets/shared/icon_kids-dc39fc54f6c2.svg')]" />
        </a>
      </div>
    </div>
  );
}

export default SocialLinks;
