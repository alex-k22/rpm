import Container from "../Shared/Container";
import css from "./Consultation.module.scss";

const Consultation = () => {

  return (
    <section id="consult">
      <Container>
        <h2>Консультація</h2>
        <p>
          Потрібна консультація? Заповніть, будь ласка, форму зворотнього
          зв'язку
        </p>
        <form id="fs-frm" name="simple-contact-form" action="https://formspree.io/f/mrbzqdlw" method="post">
          <label className={css.label}>
            <input type="text" name="name" placeholder="Ім'я" />
          </label>
          <label className={css.label}>
            <input type="tel" name="phone" placeholder="Телефон" />
          </label>
          <button type="submit">Відправити</button>
        </form>
      </Container>
    </section>
  );
};

export default Consultation;
