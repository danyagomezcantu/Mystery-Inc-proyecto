import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./carrito-de-compras.module.css";

const CarritoDeCompras: NextPage = () => {
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
    router.push("/pantalla-de-pago");
  }, [router]);

  return (
    <div className={styles.carritoDeCompras}>
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
      <div className={styles.cartCards}>
        <div className={styles.rectangleParent}>
          <img
            className={styles.frameChild}
            alt=""
            src="/rectangle-1747@2x.png"
          />
          <div className={styles.frameItem} />
          <div className={styles.groupWrapper}>
            <img className={styles.groupIcon} alt="" src="/group3.svg" />
          </div>
          <div className={styles.groupContainer}>
            <img className={styles.groupIcon1} alt="" src="/group4.svg" />
          </div>
          <div className={styles.parent}>
            <div className={styles.div}>$45</div>
            <div className={styles.matchaCaliente}>Matcha caliente</div>
            <div className={styles.sinAzcarDeslactosado}>
              Sin azúcar, deslactosado
            </div>
          </div>
        </div>
        <div className={styles.rectangleGroup}>
          <div className={styles.frameItem} />
          <div className={styles.groupWrapper}>
            <img className={styles.groupIcon} alt="" src="/group3.svg" />
          </div>
          <div className={styles.groupContainer}>
            <img className={styles.groupIcon1} alt="" src="/group4.svg" />
          </div>
          <div className={styles.div1}>$135</div>
          <div className={styles.chilaquilesVerdes}>Chilaquiles verdes</div>
          <div className={styles.dosHuevosEstrellados}>
            dos huevos estrellados
          </div>
          <img
            className={styles.rectangleIcon}
            alt=""
            src="/rectangle-1772@2x.png"
          />
        </div>
      </div>
      <div className={styles.rectangleContainer}>
        <img
          className={styles.frameChild}
          alt=""
          src="/rectangle-1747@2x.png"
        />
        <div className={styles.frameItem} />
        <div className={styles.groupWrapper}>
          <img className={styles.groupIcon} alt="" src="/group3.svg" />
        </div>
        <div className={styles.groupContainer}>
          <img className={styles.groupIcon1} alt="" src="/group4.svg" />
        </div>
        <div className={styles.group}>
          <div className={styles.div2}>$54</div>
          <div className={styles.cappuccino}>Cappuccino</div>
          <div className={styles.groupChild} />
          <div className={styles.dalgonaMacha}>Dalgona Macha</div>
        </div>
      </div>
      <div className={styles.rectangleContainer}>
        <img
          className={styles.frameChild}
          alt=""
          src="/rectangle-1748@2x.png"
        />
        <div className={styles.frameItem} />
        <div className={styles.groupWrapper}>
          <img className={styles.groupIcon} alt="" src="/group3.svg" />
        </div>
        <div className={styles.groupContainer}>
          <img className={styles.groupIcon1} alt="" src="/group4.svg" />
        </div>
        <div className={styles.container}>
          <div className={styles.div2}>$54</div>
          <div className={styles.cappuccino}>Cappuccino vainilla</div>
          <div className={styles.groupChild} />
          <div className={styles.dalgonaMacha}>Dalgona Macha</div>
        </div>
      </div>
      <div className={styles.rectangleParent2}>
        <img
          className={styles.frameChild}
          alt=""
          src="/rectangle-1749@2x.png"
        />
        <div className={styles.frameItem} />
        <div className={styles.groupWrapper}>
          <img className={styles.groupIcon} alt="" src="/group3.svg" />
        </div>
        <div className={styles.groupContainer}>
          <img className={styles.groupIcon1} alt="" src="/group4.svg" />
        </div>
        <div className={styles.groupDiv}>
          <div className={styles.div}>$120</div>
          <div className={styles.matchaCaliente}>Sandwich Queso</div>
          <div className={styles.sinAzcarDeslactosado}>Picante aparte</div>
        </div>
      </div>
      <div className={styles.subtractParent}>
        <img className={styles.subtractIcon} alt="" src="/subtract.svg" />
        <div className={styles.usarPuntosAcumulados}>
          Usar puntos acumulados (25)
        </div>
        <img className={styles.groupInner} alt="" src="/frame-68.svg" />
      </div>
      <div className={styles.payNowCta} onClick={onPayNowCTAClick}>
        <div className={styles.pagar}>{`PAGAR `}</div>
      </div>
      <div className={styles.orderInvoice}>
        <div className={styles.grandTotal}>Grand Total</div>
        <div className={styles.puntosAcumulados}>Puntos acumulados</div>
        <div className={styles.pagoTotal}>Pago total</div>
        <div className={styles.div5}>$329</div>
        <div className={styles.div6}>-$25</div>
        <div className={styles.div7}>$354</div>
      </div>
    </div>
  );
};

export default CarritoDeCompras;
