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
    </div>
  );
}

export default SocialLinks;
