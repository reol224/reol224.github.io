import { FaBookOpen, FaCode, FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { getConfigData } from "../data/configReader";

const socialPlatforms = {
  FaCode: { label: "LeetCode", Icon: FaCode },
  FaGithub: { label: "GitHub", Icon: FaGithub },
  FaLinkedinIn: { label: "LinkedIn", Icon: FaLinkedinIn },
  FaBookOpen: { label: "Goodreads", Icon: FaBookOpen },
};

export default function Social() {
  const { social } = getConfigData();

  return (
    <nav className="status-social" aria-label="Social links">
      {social.map((socialLink) => {
        const platform = socialPlatforms[socialLink.icon];
        if (!platform) return null;

        const { Icon, label } = platform;
        return (
          <a
            key={socialLink.icon}
            href={socialLink.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
          >
            <Icon aria-hidden="true" size={13} />
            <span>{label}</span>
          </a>
        );
      })}
    </nav>
  );
}
