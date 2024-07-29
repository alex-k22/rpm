import ImgSrc from "/src/assets/RPM1.jpg";
import Container from "../Shared/Container";
import css from "./Description.module.scss";

const Description = () => {
  return (
    <>
    <Container>
      <section id="description">
        {/* <Container> */}
        <h2 className={css.heading}>Опис</h2>
        <div className={css.wrapper}>
          {/* <img src={ImgSrc} alt="RPM image" className={css.img}/> */}
          <p className={css.text}>
            Ротаційний зварювальний позиціонер призначений для кругового
            зварювання деталей. Він має міцну конструкцію і досконалий дизайн,
            сумісний зі зварювальними столами системи 15/50. Якісний привід
            гарантує ідеальну плавність і сталу швидкість обертання навіть при
            ексцентричних навантаженнях зварюваного виробу, а також статичне
            утримання деталей. 
          </p>
          <p className={css.text}>RPM-25О - ротаційний зварювальний позиціонер,
            оснащений план-шайбою 250 мм з максимальним робочим навантаженням
            120 кг. Конструкція план-шайби дозволяє встановлювати трьох і
            чотирьохкулачкові патрони діаметром від 80 до 200 мм. Нахил
            план-шайби може бути встановлено в діапазоні від 0 до 360° під
            навантаженням, що забезпечує оптимальне положення зварювання.
            Опціонально, для зручності роботи позиціонер оснащується ножним
            контролером (педаль). </p>
            <p className={css.text}>Позиціонери RPM-250 підходять для методів
            зварювання: LBW, MIG/MAG і TIG, включаючи імпульсне дугове та
            плазмове зварювання.</p>
        </div>
        {/* </Container> */}
      </section>
      </Container>
    </>
  );
};

export default Description;
