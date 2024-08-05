import { NavHashLink } from "react-router-hash-link";
import navLinks from "../../data/navMenu.json";
import css from "./Navigation.module.scss";

const Navigation = () => {
  return (
    <nav>
      <ul className={css.menu}>
        {navLinks.map(({ title, href }) => {
          return (
            <li key={href} className={css.li}>
              <NavHashLink
                to={`${href}`}
                activeClassName="selected"
                activeStyle={{ color: "red" }}
                className={css.link}
              >
                {title}
              </NavHashLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
