import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./pantalla-de-tarjetas.module.css";

const PantallaDeTarjetas: NextPage = () => {
  const router = useRouter();

  const onPersona1ImageClick = useCallback(() => {
    router.push("/perfil-con-nombre-alumnx");
  }, [router]);

  const onMugHotAlt1ImageClick = useCallback(() => {
    router.push("/men-bebida-alumnx");
  }, [router]);

  const onSandwich1ImageClick = useCallback(() => {
    router.push("/men-comida-alumnx");
  }, [router]);

  const onFrameContainer11Click = useCallback(() => {
    router.push("/pantalla-de-pago");
  }, [router]);

  return (
    <div className={styles.pantallaDeTarjetas}>
      <div className={styles.footer}>
        <div className={styles.iconosInternalFrame}>
          <img
            className={styles.persona1Icon}
            alt=""
            src="/persona-1@2x.png"
            onClick={onPersona1ImageClick}
          />
          <img
            className={styles.roomService1Icon}
            alt=""
            src="/roomservice-11@2x.png"
          />
          <img
            className={styles.mugHotAlt1Icon}
            alt=""
            src="/mughotalt-11@2x.png"
            onClick={onMugHotAlt1ImageClick}
          />
          <img
            className={styles.sandwich1Icon}
            alt=""
            src="/sandwich-1@2x.png"
            onClick={onSandwich1ImageClick}
          />
        </div>
      </div>
      <div className={styles.aadirNuevaTarjetaWrapper}>
        <div className={styles.aadirNuevaTarjeta}>Añadir nueva tarjeta</div>
      </div>
      <div className={styles.nmeroDeTarjetaParent}>
        <div className={styles.nmeroDeTarjeta}>Número de tarjeta</div>
        <div className={styles.input}>
          <div className={styles.enter12DigitCardNumberWrapper}>
            <div className={styles.enter12Digit}>
              Enter 12 digit card number
            </div>
          </div>
          <img
            className={styles.iconsphosphorsecurityquesti}
            alt=""
            src="/iconsphosphorsecurityquestion.svg"
          />
        </div>
      </div>
      <div className={styles.nombreTarjetahabienteParent}>
        <div className={styles.nombreTarjetahabiente}>
          Nombre tarjetahabiente
        </div>
        <div className={styles.input1}>
          <div className={styles.enter12DigitCardNumberWrapper}>
            <div className={styles.enter12Digit}>Name on Card</div>
          </div>
          <img
            className={styles.iconsphosphorsecurityquesti}
            alt=""
            src="/iconsphosphorsecurityquestion.svg"
          />
        </div>
      </div>
      <div className={styles.fechaDeVencimientoParent}>
        <div className={styles.nmeroDeTarjeta}>Fecha de vencimiento</div>
        <div className={styles.inputParent}>
          <div className={styles.input2}>
            <div className={styles.monthParent}>
              <div className={styles.month}>Month</div>
              <img
                className={styles.vuesaxlineararrowRightIcon}
                alt=""
                src="/vuesaxlineararrowright.svg"
              />
            </div>
            <img
              className={styles.iconsphosphorsecurityquesti}
              alt=""
              src="/iconsphosphorsecurityquestion.svg"
            />
          </div>
          <div className={styles.input2}>
            <div className={styles.monthParent}>
              <div className={styles.month}>Year</div>
              <img
                className={styles.vuesaxlineararrowRightIcon}
                alt=""
                src="/vuesaxlineararrowright.svg"
              />
            </div>
            <img
              className={styles.iconsphosphorsecurityquesti}
              alt=""
              src="/iconsphosphorsecurityquestion.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.cvvParent}>
        <div className={styles.nmeroDeTarjeta}>CVV</div>
        <div className={styles.input4}>
          <div className={styles.cvvWrapper}>
            <div className={styles.month}>CVV</div>
          </div>
          <img
            className={styles.vuesaxlineararrowRightIcon}
            alt=""
            src="/vuesaxlineareyeslash.svg"
          />
        </div>
      </div>
      <div className={styles.frame} onClick={onFrameContainer11Click}>
        <div className={styles.aadirTarjeta}>Añadir tarjeta</div>
      </div>
    </div>
  );
};

export default PantallaDeTarjetas;
