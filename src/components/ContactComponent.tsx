import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
export interface IContactComponentProps {
  type: string;
  link: string;
}

export default function ContactComponent({
  type,
  link,
}: IContactComponentProps) {
  const getIcon = (type: string) => {
    switch (type) {
      case "email":
        return faEnvelope;
      case "github":
        return faGithub;
      case "linkedIn":
        return faLinkedinIn;
      case "instagram":
        return faInstagram;
      default:
        return faEnvelope;
    }
  };
  return (
    <a
      href={link}
      className="grid size-12 transform place-items-center rounded-lg text-purple-500 shadow-md shadow-slate-400 transition-transform duration-300 hover:-translate-y-1"
    >
      <FontAwesomeIcon size="2x" icon={getIcon(type)} />
    </a>
  );
}
