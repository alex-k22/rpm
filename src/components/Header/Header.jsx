import Container from "../Shared/Container";
import navLinks from "../../data/navMenu.json";
import { Link } from "react-router-dom";
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
                  <Link to={`${href}`} className={css.link}>
                    {title}
                  </Link>
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
