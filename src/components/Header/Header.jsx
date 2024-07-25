import Container from "../Shared/Container";
import navLinks from "../../data/navMenu.json";
import { NavHashLink } from "react-router-hash-link";
import Logo from "./Logo";
import css from "./Header.module.scss";

const Header = () => {
  return (
    <header className={css.header}>
      <Container>
        <div className={css.wrapper}>
          <Logo />
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
        </div>
      </Container>
    </header>
  );
};

export default Header;
