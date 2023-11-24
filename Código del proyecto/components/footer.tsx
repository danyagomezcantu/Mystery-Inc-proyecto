import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./footer.module.css";

const Footer: NextPage = () => {
  const router = useRouter();

  const onPersona1ImageClick = useCallback(() => {
    router.push("/perfil-con-nombre-alumnx");
  }, [router]);

  const onRoomService1ImageClick = useCallback(() => {
    router.push("/seguimiento-de-pedido");
  }, [router]);

  const onSandwich1ImageClick = useCallback(() => {
    router.push("/men-comida-alumnx");
  }, [router]);

  return (
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
          src="/mughotalt-1@2x.png"
        />
        <img
          className={styles.sandwich1Icon}
          alt=""
          src="/sandwich-1@2x.png"
          onClick={onSandwich1ImageClick}
        />
      </div>
    </div>
  );
};

export default Footer;
