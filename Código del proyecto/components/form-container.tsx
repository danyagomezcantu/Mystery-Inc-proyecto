import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./form-container.module.css";

type FormContainerType = {
  /** Style props */
  rectangleIconTop?: CSSProperties["top"];
};

const FormContainer: NextPage<FormContainerType> = ({ rectangleIconTop }) => {
  const groupDivStyle: CSSProperties = useMemo(() => {
    return {
      top: rectangleIconTop,
    };
  }, [rectangleIconTop]);

  return (
    <div className={styles.rectangleParent} style={groupDivStyle}>
      <div className={styles.groupChild} />
      <img className={styles.groupItem} alt="" src="/rectangle-1742@2x.png" />
      <div className={styles.capucchinoVainilla}>Capucchino vainilla</div>
      <div className={styles.groupInner} />
      <b className={styles.b}>$65</b>
      <div className={styles.rectangleDiv} />
      <img className={styles.groupIcon} alt="" src="/group.svg" />
    </div>
  );
};

export default FormContainer;
