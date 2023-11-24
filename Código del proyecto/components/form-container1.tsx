import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./form-container1.module.css";

type FormContainer1Type = {
  dimensionCode?: string;

  /** Style props */
  propTop?: CSSProperties["top"];
};

const FormContainer1: NextPage<FormContainer1Type> = ({
  dimensionCode,
  propTop,
}) => {
  const groupDiv2Style: CSSProperties = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div className={styles.rectangleParent} style={groupDiv2Style}>
      <div className={styles.groupChild} />
      <img className={styles.groupItem} alt="" src={dimensionCode} />
      <div className={styles.capuchinoMoka}>Capuchino Moka</div>
      <div className={styles.groupInner} />
      <b className={styles.b}>$65</b>
      <div className={styles.groupWrapper}>
        <img className={styles.groupIcon} alt="" src="/group2.svg" />
      </div>
    </div>
  );
};

export default FormContainer1;
