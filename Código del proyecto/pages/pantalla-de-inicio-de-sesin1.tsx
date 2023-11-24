import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./pantalla-de-inicio-de-sesin1.module.css";

const PantallaDeInicioDeSesin1: NextPage = () => {
  const router = useRouter();

  const onButtonContainer2Click = useCallback(() => {
    router.push("/men-comida-alumnx");
  }, [router]);

  const onTienesCuentaDeClick = useCallback(() => {
    router.push("/pantalla-de-inicio-de-sesin");
  }, [router]);

  return (
    <div className={styles.pantallaDeInicioDeSesin}>
      <img
        className={styles.pantallaDeInicioDeSesinChild}
        alt=""
        src="/frame-63.svg"
      />
      <div className={styles.button}>
        <div className={styles.contraseaWrapper}>
          <div className={styles.contrasea}>Contraseña</div>
        </div>
      </div>
      <div className={styles.button1}>
        <div className={styles.correoElectrnicoWrapper}>
          <div className={styles.contrasea}>Correo electrónico</div>
        </div>
      </div>
      <div className={styles.button2} onClick={onButtonContainer2Click}>
        <div className={styles.ingresaWrapper}>
          <b className={styles.ingresa}>Ingresa</b>
        </div>
      </div>
      <div
        className={styles.tienesCuentaDeContainer}
        onClick={onTienesCuentaDeClick}
      >
        <span className={styles.tienesCuentaDeContainer1}>
          <p className={styles.tienesCuentaDeAdmin}>
            <span className={styles.tienesCuentaDe}>
              ¿Tienes cuenta de admin?
            </span>
            <b>{` `}</b>
          </p>
          <p className={styles.tienesCuentaDeAdmin}>
            <b>
              <span className={styles.ingresaAqu1}>Ingresa aquí</span>
            </b>
          </p>
        </span>
      </div>
    </div>
  );
};

export default PantallaDeInicioDeSesin1;
