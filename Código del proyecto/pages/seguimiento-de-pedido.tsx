import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./seguimiento-de-pedido.module.css";

const SeguimientoDePedido: NextPage = () => {
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

  return (
    <div className={styles.seguimientoDePedido}>
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
      <div className={styles.seguimientoDePedidoChild} />
      <div className={styles.seguimientoDePedidoItem} />
      <img className={styles.maceta1Icon} alt="" src="/maceta-1@2x.png" />
      <div className={styles.seguimientoDePedidoInner} />
      <div className={styles.pedidoRecibido}>
        <p className={styles.preparandoTuComida}>Pedido Recibido</p>
      </div>
      <div className={styles.tuPedidoSe}>
        Tu pedido se encuentra en nuestra lista de espera
      </div>
      <div className={styles.preparandoTuComidaContainer}>
        <p className={styles.preparandoTuComida}>Preparando tu comida</p>
      </div>
      <div className={styles.tuPedidoSe1}>
        Tu pedido se encuentra en preparacion
      </div>
      <div className={styles.comidaLista}>Comida lista</div>
      <div className={styles.tuPedidoSe2}>
        Tu pedido se encuentra listo para recoger
      </div>
      <img
        className={styles.bigBagConAsas1Icon}
        alt=""
        src="/bigbagconasas-1@2x.png"
      />
      <div className={styles.lineDiv} />
      <div className={styles.seguimientoDePedidoChild1} />
      <img className={styles.garrapata31} alt="" src="/garrapata-3-1@2x.png" />
    </div>
  );
};

export default SeguimientoDePedido;
