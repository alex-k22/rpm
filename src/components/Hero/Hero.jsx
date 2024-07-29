import Container from "../Shared/Container";
import css from "./Hero.module.scss";

const Hero = () => {
    return (
       <section  className={css.hero}>
        <Container>
            <h1 className={css.pageHeader}>РОТАЦІЙНИЙ ЗВАРЮВАЛЬНИЙ <br/> ПОЗИЦІОНЕР RPM</h1>
            <button type="button" className={css.btn} data-modal-open>Консультація</button>

        </Container>
       </section> 
    )
}

export default Hero;