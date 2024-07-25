import {
  FaTiktok,
  FaInstagram,
  FaYoutube,
  FaFacebookF,
  FaTelegramPlane,
} from "react-icons/fa";
import css from "./Socials.module.scss";

const Socials = () => {
  return (
    <>
      <ul className={css.list}>
        <li>
          <a
            href="https://www.tiktok.com/@101.325_kpa"
            target="blank"
            aria-label="Go to our tiktok"
            className={css.link}
          >
            <FaTiktok size={32} />
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/@user-kg2np8uz4t/shorts"
            target="blank"
            aria-label="Go to our youtube channel"
          >
            <FaYoutube size={32} />
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com"
            target="blank"
            aria-label="Go to our facebook page"
          >
            <FaFacebookF size={32} />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com"
            target="blank"
            aria-label="Go to our instagram"
          >
            <FaInstagram size={32} />
          </a>
        </li>
        <li>
          <a
            href="https://www.telegram.me/+380677566849"
            target="blank"
            aria-label="Go to our instagram"
          >
            <FaTelegramPlane size={32} />
          </a>
        </li>
      </ul>
    </>
  );
};

export default Socials;
