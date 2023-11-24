import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./personalizacin-alumnx.module.css";

const PersonalizacinAlumnx: NextPage = () => {
  const router = useRouter();

  const onPersona1ImageClick = useCallback(() => {
    router.push("/perfil-con-nombre-alumnx");
  }, [router]);

  const onRoomService1ImageClick = useCallback(() => {
    router.push("/seguimiento-de-pedido");
  }, [router]);

  const onMugHotAlt1ImageClick = useCallback(() => {
    router.push("/men-bebida-alumnx");
  }, [router]);

  const onSandwich1ImageClick = useCallback(() => {
    router.push("/men-comida-alumnx");
  }, [router]);

  const onPayNowCTAClick = useCallback(() => {
    router.push("/carrito-de-compras");
  }, [router]);

  return (
    <div className={styles.personalizacinAlumnx}>
      <div className={styles.personalizacinAlumnxChild} />
      <img
        className={styles.personalizacinAlumnxItem}
        alt=""
        src="/rectangle-1741@2x.png"
      />
      <div className={styles.sandwichParent}>
        <div className={styles.sandwich}>Sandwich</div>
        <div className={styles.quesoAguacatePicanteContainer}>
          <p className={styles.queso}>Queso</p>
          <p className={styles.queso}>Aguacate</p>
          <p className={styles.queso}>Picante aparte</p>
          <p className={styles.tostado}>Tostado</p>
        </div>
      </div>
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
      <img
        className={styles.personalizacinAlumnxInner}
        alt=""
        src="/ellipse-483.svg"
      />
      <div className={styles.ellipseDiv} />
      <div className={styles.personalizacinAlumnxChild1} />
      <div className={styles.rectangleDiv} />
      <div className={styles.instruccionesEspeciales}>
        Instrucciones especiales
      </div>
      <div className={styles.personalizacinAlumnxChild2} />
      <div className={styles.chilaquilesParent}>
        <div className={styles.sandwich}>Chilaquiles</div>
        <div className={styles.quesoAguacatePicanteContainer}>
          <p className={styles.queso}>Salsa Verde</p>
          <p className={styles.queso}>Salsa Roja</p>
          <p className={styles.queso}>Rellenos</p>
          <p className={styles.tostado}>Queso</p>
        </div>
      </div>
      <img className={styles.ellipseIcon} alt="" src="/ellipse-483.svg" />
      <div className={styles.personalizacinAlumnxChild3} />
      <div className={styles.personalizacinAlumnxChild4} />
      <div className={styles.dosHuevosEstrellados}>dos huevos estrellados</div>
      <div className={styles.personalizacinAlumnxChild5} />
      <div className={styles.matchaParent}>
        <div className={styles.sandwich}>Matcha</div>
        <div className={styles.quesoAguacatePicanteContainer}>
          <p className={styles.queso}>Azucar</p>
          <p className={styles.queso}>Tipo de leche</p>
          <p className={styles.queso}>Caliente</p>
          <p className={styles.tostado}>Frio</p>
        </div>
      </div>
      <img
        className={styles.personalizacinAlumnxChild6}
        alt=""
        src="/ellipse-487.svg"
      />
      <div className={styles.personalizacinAlumnxChild7} />
      <div className={styles.instruccionesEspeciales1}>
        Instrucciones especiales
      </div>
      <img
        className={styles.rectangleIcon}
        alt=""
        src="/rectangle-178@2x.png"
      />
      <img
        className={styles.personalizacinAlumnxChild8}
        alt=""
        src="/rectangle-177@2x.png"
      />
      <div className={styles.personalizacinAlumnxChild9} />
      <img className={styles.polygonIcon} alt="" src="/polygon-1.svg" />
      <div className={styles.deslactosado}>Deslactosado</div>
      <div className={styles.payNowCta} onClick={onPayNowCTAClick}>
        <div className={styles.confirmar}>CONFIRMAR</div>
      </div>
      <div className={styles.personalizacinAlumnxChild10} />
    </div>
  );
};

export default PersonalizacinAlumnx;
