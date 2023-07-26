import Link from "next/link";
import { IconType } from "react-icons/lib";
import {
  FaDiscord,
  FaLinkedin,
  FaTiktok,
  FaYoutube,
  FaTelegram,
  FaMedium,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";

export default function Socials() {
  return (
    <nav className="hidden fixed top-1/2 gap-3 md:flex flex-col -translate-y-1/2 left-0 px-2 min-w-[1440px]:px-8 z-10">
      {SOCIALS.map(({ Icon, link }, i) => (
        <Link
          target="_blank"
          className="min-w-[1440px]:p-4 p-2 border-4 border-white border-opacity-5 rounded-full block"
          key={i}
          href={link}
        >
          <div className="min-[1440px]:hidden">
            <Icon className="-rotate-90" size={16} />
          </div>
          <div className="max-[1440px]:hidden">
            <Icon className="-rotate-90" size={20} />
          </div>
        </Link>
      ))}
    </nav>
  );
}

export const SOCIALS: { Icon: IconType; link: string }[] = [
  {
    link: "https://medium.com/@esportsdao.ofc/https-linktr-ee-esports-dao-e043461b8898",
    Icon: FaMedium,
  },
  {
    link: "https://discord.gg/ZUUsanKFA5",
    Icon: FaDiscord,
  },
  {
    link: "https://facebook.com/groups/983804452808447/?ref=share&mibextid=S66gvF",
    Icon: FaFacebook,
  },
  {
    link: "https://www.linkedin.com/company/esportsdao/",
    Icon: FaLinkedin,
  },

  {
    link: "http://tiktok.com/@esportsdao",
    Icon: FaTiktok,
  },
  {
    link: "http://youtube.com/@esportsdao",
    Icon: FaYoutube,
  },

  {
    link: "https://twitter.com/esportsdao_ofc",
    Icon: FaTwitter,
  },
  {
    link: "http://t.me/EsportsDAO",
    Icon: FaTelegram,
  },
];
