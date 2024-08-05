import Container from "../Shared/Container";
import MobileMenu from "./MobileMenu";
import { useState, useEffect } from "react";

import useWindowDimensions from "../../hooks/useWindowDimensions";

import Logo from "./Logo";
import css from "./Header.module.scss";
import { RxHamburgerMenu, RxCross2  } from "react-icons/rx";
import Navigation from "./Navigation";
import Socials from "../Socials/Socials";

const Header = () => {
  const [mobileMenuVisible, setMobilMenuVisible] = useState(false);
  const { width } = useWindowDimensions();
  // const { visible } = css;

  const handleMobileToggle = () => {
    setMobilMenuVisible(!mobileMenuVisible);
  };

  // const handleNavClick = (event) => {
  //   if (event.target.tagName === "A") {
  //     handleMobileToggle();
  //   }
  // };

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
      <Container className={css.container}>
        <div className={css.wrapper}>
          <Logo />
          {width > 1440 && <Navigation />}
          {width > 1440 && <Socials/>}
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
            {width < 1440 && <MobileMenu menuState={mobileMenuVisible} handleMobileToggle={handleMobileToggle}/>}
        </div>
      </Container>
    </header>
  );
};

export default Header;
