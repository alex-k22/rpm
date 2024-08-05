import Socials from "../Socials/Socials.jsx";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import css from "./MobileMenu.module.scss";
import Navigation from "./Navigation.jsx";

const MobileMenu = ({ menuState, handleMobileToggle }) => {
  const { visible } = css;

  const handleNavClick = (event) => {
    if (event.target.tagName === "A") {
      handleMobileToggle();
    }
  };
  return (
    <div
      className={`${css.mobile} ${menuState ? visible : ""}`}
      onClick={handleNavClick}
    >
      <Navigation />
      <Link to="tel:380677566849" className={css.contact}><FaPhone/> +38 (067) 756 68 49</Link>
      <Link to="mailto:rpm.productionua@gmail.com" className={css.contact}><FaEnvelope /> rpm.productionua@gmail.com</Link>
      <Socials />
    </div>
  );
};

export default MobileMenu;
