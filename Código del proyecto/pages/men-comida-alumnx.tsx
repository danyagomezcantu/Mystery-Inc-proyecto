import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./men-comida-alumnx.module.css";

const MenComidaAlumnx: NextPage = () => {
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

  const onPersona2ImageClick = useCallback(() => {
    router.push("/personalizacin-alumnx");
  }, [router]);

  return (
    <div className={styles.menComidaAlumnx}>
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
            src="/sandwich-11@2x.png"
          />
        </div>
      </div>
      <div className={styles.coffeeCards}>
        <div className={styles.rectangleParent}>
          <div className={styles.groupChild} />
          <img
            className={styles.groupItem}
            alt=""
            src="/rectangle-1745@2x.png"
          />
          <div className={styles.rolloDeCanela}>Rollo de canela</div>
          <div className={styles.groupInner} />
          <b className={styles.b}>$50</b>
          <div className={styles.rectangleDiv} />
          <img className={styles.groupIcon} alt="" src="/group.svg" />
        </div>
        <div className={styles.rectangleGroup}>
          <div className={styles.groupChild} />
          <img
            className={styles.groupItem}
            alt=""
            src="/rectangle-1746@2x.png"
          />
          <div className={styles.rolloDeCanela}>{`Brownie de Chocolate `}</div>
          <div className={styles.groupInner} />
          <b className={styles.b1}>$40</b>
          <div className={styles.rectangleDiv} />
          <img className={styles.groupIcon} alt="" src="/group1.svg" />
        </div>
        <div className={styles.rectangleContainer}>
          <div className={styles.groupChild4} />
          <div className={styles.rolloDeCanela}>Chilaquiles</div>
          <div className={styles.groupInner} />
          <b className={styles.b2}>$100</b>
          <div className={styles.groupWrapper}>
            <img className={styles.groupIcon2} alt="" src="/group2.svg" />
          </div>
          <img className={styles.groupChild6} alt="" src="/line-2.svg" />
        </div>
        <div className={styles.groupDiv}>
          <div className={styles.groupChild4} />
          <div className={styles.rolloDeCanela}>Sandwich</div>
          <div className={styles.groupInner} />
          <b className={styles.b3}>$90</b>
          <div className={styles.groupWrapper}>
            <img className={styles.groupIcon2} alt="" src="/group2.svg" />
          </div>
        </div>
        <img
          className={styles.coffeeCardsChild}
          alt=""
          src="/rectangle-1781@2x.png"
        />
        <img
          className={styles.coffeeCardsItem}
          alt=""
          src="/rectangle-206@2x.png"
        />
      </div>
      <img
        className={styles.persona2Icon}
        alt=""
        src="/persona-3@2x.png"
        onClick={onPersona2ImageClick}
      />
      <div className={styles.searchBar}>
        <img className={styles.searchBarChild} alt="" src="/group-100.svg" />
        <div className={styles.buscaTuComida}>Busca tu comida favorita</div>
      </div>
    </div>
  );
};

export default MenComidaAlumnx;
