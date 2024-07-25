import Container from "../Shared/Container";
import { useState, useEffect } from "react";

import useWindowDimensions from "../../hooks/useWindowDimensions";

import Logo from "./Logo";
import css from "./Header.module.scss";
import { RxHamburgerMenu, RxCross2  } from "react-icons/rx";
import Navigation from "./Navigation";

const Header = () => {
  const [mobileMenuVisible, setMobilMenuVisible] = useState(false);
  const { width } = useWindowDimensions();
  const { visible } = css;

  const handleMobileToggle = () => {
    setMobilMenuVisible(!mobileMenuVisible);
  };

  const handleNavClick = (event) => {
    if (event.target.tagName === "A") {
      handleMobileToggle();
    }
  };

  useEffect(() => {
    if (mobileMenuVisible) {
      document.body.classList.add("is-open");
    }
    if (!mobileMenuVisible) {
      document.body.classList.remove("is-open");
    }
  }, [mobileMenuVisible]);

  return (
    <header className={css.header}>
      <Container>
        <div className={css.wrapper}>
          <Logo />
          {width > 1440 && <Navigation />}
          {width < 1440 && (
              <button
                className={css.btn}
                type="button"
                onClick={handleMobileToggle}
              >
                {mobileMenuVisible ? (
                  <RxCross2 className={css.burgerIcon} />
                ) : (
                  <RxHamburgerMenu className={css.burgerIcon} />
                )}
              </button>
            )}
        </div>
      </Container>
    </header>
  );
};

export default Header;
