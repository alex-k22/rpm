import SiteLogo from '../../assets/rpm-logo.png';
import css from "./Logo.module.scss";
import { Link } from "react-router-dom";

const Logo = () => {
    return (
        <Link to="/" className={css.link}>
            <img src={SiteLogo} alt="RPM logo" className={css.img}/>
            </Link>
    )
        }

        export default Logo;