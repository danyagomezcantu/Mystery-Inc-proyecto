import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./perfil-con-nombre-alumnx.module.css";

const PerfilConNombreAlumnx: NextPage = () => {
  const router = useRouter();

  const onRoomService1ImageClick = useCallback(() => {
    router.push("/seguimiento-de-pedido");
  }, [router]);

  const onMugHotAlt1ImageClick = useCallback(() => {
    router.push("/men-bebida-alumnx");
  }, [router]);

  const onSandwich1ImageClick = useCallback(() => {
    router.push("/men-comida-alumnx");
  }, [router]);

  const onImage22Click = useCallback(() => {
    router.push("/pedir-ayuda-de-administrador");
  }, [router]);

  return (
    <div className={styles.perfilConNombreAlumnx}>
      <div className={styles.footer}>
        <div className={styles.iconosInternalFrame}>
          <img className={styles.persona1Icon} alt="" src="/image-1@2x.png" />
          <img
            className={styles.roomService1Icon}
            alt=""
            src="/roomservice-1@2x.png"
            onClick={onRoomService1ImageClick}
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
      <b className={styles.nombreDeUsuario}>Daniel de la Cruz</b>
      <div className={styles.tarjetas}>
        <div className={styles.tarjetasParent}>
          <b className={styles.nmeroDeTelfono}>TARJETAS</b>
          <div className={styles.div}>*1234</div>
        </div>
        <b className={styles.cambiarOAgregar}>Cambiar o agregar tarjeta</b>
      </div>
      <div className={styles.tarjetas2}>
        <div className={styles.tarjetasParent}>
          <b className={styles.nmeroDeTelfono}>NÚMERO DE TELÉFONO</b>
          <div className={styles.div}>+52 55 1234 5678</div>
        </div>
      </div>
      <div className={styles.tarjetas3}>
        <div className={styles.tarjetasParent}>
          <b className={styles.nmeroDeTelfono}>PUNTOS</b>
          <div className={styles.puntosConValorContainer}>
            <span className={styles.span}>100</span>
            <span
              className={styles.puntosConValor}
            >{` puntos (con valor de `}</span>
            <span className={styles.span}>50</span>
            <span className={styles.puntosConValor}> pesos)</span>
          </div>
        </div>
      </div>
      <div className={styles.tarjetas4}>
        <div className={styles.tarjetasParent}>
          <b className={styles.nmeroDeTelfono}>CORREO ELECTRÓNICO</b>
          <div className={styles.div}>danieldlc@itam.mx</div>
        </div>
      </div>
      <img
        className={styles.perfilConNombreAlumnxChild}
        alt=""
        src="/frame-63.svg"
      />
      <img
        className={styles.image22Icon}
        alt=""
        src="/image-22@2x.png"
        onClick={onImage22Click}
      />
    </div>
  );
};

export default PerfilConNombreAlumnx;
