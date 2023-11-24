import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./price-card.module.css";

type PriceCardType = {
  /** Style props */
  propTop?: CSSProperties["top"];
};

const PriceCard: NextPage<PriceCardType> = ({ propTop }) => {
  const groupDiv1Style: CSSProperties = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div className={styles.rectangleParent} style={groupDiv1Style}>
      <div className={styles.groupChild} />
      <img className={styles.groupItem} alt="" src="/rectangle-1743@2x.png" />
      <div className={styles.frapucchino}>Frapucchino</div>
      <div className={styles.groupInner} />
      <b className={styles.b}>$70</b>
      <div className={styles.rectangleDiv} />
      <img className={styles.groupIcon} alt="" src="/group1.svg" />
    </div>
  );
};

export default PriceCard;
