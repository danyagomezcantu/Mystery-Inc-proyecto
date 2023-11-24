import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./pedidos-recibidos-cafetera.module.css";

const PedidosRecibidosCafetera: NextPage = () => {
  const router = useRouter();

  const onPersona1ImageClick = useCallback(() => {
    router.push("/perfil-con-nombre-admin");
  }, [router]);

  const onMugHotAlt1ImageClick = useCallback(() => {
    router.push("/men-bebida-admin");
  }, [router]);

  const onSandwich1ImageClick = useCallback(() => {
    router.push("/men-comida-admin");
  }, [router]);

  return (
    <div className={styles.pedidosRecibidosCafetera}>
      <div className={styles.tarjetas}>
        <div className={styles.danielDeLaCruzParent}>
          <b className={styles.danielDeLa}>Daniel de la Cruz</b>
          <div className={styles.detalles}>Detalles:</div>
        </div>
        <img className={styles.image25Icon} alt="" src="/image-25@2x.png" />
        <b className={styles.pagado32900}>Pagado: $329.00</b>
        <img className={styles.image29Icon} alt="" src="/image-29@2x.png" />
      </div>
      <div className={styles.tarjetas1}>
        <div className={styles.francoVillaSosaParent}>
          <b className={styles.danielDeLa}>Franco Villa Sosa</b>
          <div className={styles.detalles}>Detalles:</div>
        </div>
        <img className={styles.image30Icon} alt="" src="/image-30@2x.png" />
        <img className={styles.image25Icon} alt="" src="/image-25@2x.png" />
        <b className={styles.pagado32900}>Pagado: $329</b>
      </div>
      <div className={styles.tarjetas2}>
        <div className={styles.francoVillaSosaParent}>
          <b className={styles.raquelFigueroaCruz}>Raquel Figueroa Cruz</b>
          <div className={styles.detalles}>Detalles:</div>
        </div>
        <img className={styles.image30Icon} alt="" src="/image-30@2x.png" />
        <b className={styles.pagado32900}>Pagado: $329</b>
        <img className={styles.image31Icon} alt="" src="/image-31@2x.png" />
      </div>
      <div className={styles.tarjetas3}>
        <div className={styles.francoVillaSosaParent}>
          <b className={styles.danielDeLa}>
            <span className={styles.emiliaCrdobaCarrasco}>
              Emilia Córdoba Carrasco
            </span>
            {` `}
          </b>
          <div className={styles.detalles}>Detalles:</div>
        </div>
        <img className={styles.image30Icon} alt="" src="/image-30@2x.png" />
        <img className={styles.image25Icon} alt="" src="/image-31@2x.png" />
        <b className={styles.pagado32900}>Pagado: $329</b>
      </div>
      <div className={styles.tarjetas4}>
        <div className={styles.francoVillaSosaParent}>
          <b className={styles.danielDeLa}>{`Hernando Herrera Almeida `}</b>
          <div className={styles.detalles}>Detalles:</div>
        </div>
        <img className={styles.image30Icon} alt="" src="/image-30@2x.png" />
        <img className={styles.image25Icon} alt="" src="/image-25@2x.png" />
        <b className={styles.pagado32900}>Pagado: $329</b>
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
            className={styles.persona2Icon}
            alt=""
            src="/persona-21@2x.png"
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
      <b className={styles.nombreDeUsuario}>Pedidos</b>
      <div className={styles.cartCards}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <img
            className={styles.frameItem}
            alt=""
            src="/rectangle-1747@2x.png"
          />
          <div className={styles.frameInner} />
          <div className={styles.matchaCalienteParent}>
            <div className={styles.matchaCaliente}>Matcha caliente</div>
            <div className={styles.sinAzcarDeslactosado}>
              Sin azúcar, deslactosado
            </div>
          </div>
          <img className={styles.image28Icon} alt="" src="/image-28@2x.png" />
        </div>
        <div className={styles.rectangleGroup}>
          <div className={styles.frameInner} />
          <div className={styles.chilaquilesVerdes}>Chilaquiles verdes</div>
          <div className={styles.dosHuevosEstrellados}>
            dos huevos estrellados
          </div>
          <img
            className={styles.rectangleIcon}
            alt=""
            src="/rectangle-1771@2x.png"
          />
          <img className={styles.image26Icon} alt="" src="/image-26@2x.png" />
        </div>
      </div>
      <div className={styles.rectangleContainer}>
        <img
          className={styles.frameChild1}
          alt=""
          src="/rectangle-1748@2x.png"
        />
        <div className={styles.frameInner} />
        <div className={styles.cappuccinoParent}>
          <div className={styles.matchaCaliente}>Cappuccino</div>
          <div className={styles.sinAzcarDeslactosado}>Dalgona Macha</div>
        </div>
        <img className={styles.image28Icon1} alt="" src="/image-28@2x.png" />
      </div>
      <div className={styles.frameDiv}>
        <img
          className={styles.frameChild3}
          alt=""
          src="/rectangle-1749@2x.png"
        />
        <div className={styles.frameInner} />
        <div className={styles.sandwichQuesoParent}>
          <div className={styles.matchaCaliente}>Sandwich Queso</div>
          <div className={styles.sinAzcarDeslactosado}>Picante aparte</div>
        </div>
      </div>
      <img className={styles.image27Icon} alt="" src="/image-28@2x.png" />
    </div>
  );
};

export default PedidosRecibidosCafetera;
