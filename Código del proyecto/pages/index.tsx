import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./index.module.css";

const PantallaDeBienvenida: NextPage = () => {
  const router = useRouter();

  const onButtonContainerClick = useCallback(() => {
    router.push("/pantalla-de-inicio-de-sesin1");
  }, [router]);

  return (
    <div className={styles.pantallaDeBienvenida}>
      <div className={styles.button} onClick={onButtonContainerClick}>
        <div className={styles.comenzarWrapper}>
          <b className={styles.comenzar}>Comenzar</b>
        </div>
      </div>
    </div>
  );
};

export default PantallaDeBienvenida;
