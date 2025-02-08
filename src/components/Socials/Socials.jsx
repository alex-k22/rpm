import {
  FaTiktok,
  FaInstagram,
  FaYoutube,
  FaTelegramPlane,
} from "react-icons/fa";
import css from "./Socials.module.scss";

const Socials = () => {
  return (
    <>
      <ul className={css.list}>
        <li>
          <a
            href="https://www.tiktok.com/@rpm.production"
            target="blank"
            aria-label="Go to our tiktok"
            className={css.link}
          >
            <FaTiktok className={css.icon}/>
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/@rpm.production"
            target="blank"
            aria-label="Go to our youtube channel"
            className={css.link}
          >
            <FaYoutube className={css.icon} />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/rpm.production.ua/"
            target="blank"
            aria-label="Go to our instagram"
            className={css.link}
          >
            <FaInstagram className={css.icon} />
          </a>
        </li>
        <li>
          <a
            href="https://www.telegram.me/+380677566849"
            target="blank"
            aria-label="Go to our instagram"
            className={css.link}
          >
            <FaTelegramPlane className={css.icon} />
          </a>
        </li>
      </ul>
    </>
  );
};

export default Socials;
