import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./perfil-con-nombre-admin.module.css";

const PerfilConNombreAdmin: NextPage = () => {
  const router = useRouter();

  const onPersona2ImageClick = useCallback(() => {
    router.push("/pedidos-recibidos-cafetera");
  }, [router]);

  const onMugHotAlt1ImageClick = useCallback(() => {
    router.push("/men-bebida-admin");
  }, [router]);

  const onSandwich1ImageClick = useCallback(() => {
    router.push("/men-comida-admin");
  }, [router]);

  const onIrALasClick = useCallback(() => {
    router.push("/estadsticas-de-la-cafetera");
  }, [router]);

  return (
    <div className={styles.perfilConNombreAdmin}>
      <div className={styles.footer}>
        <div className={styles.iconosInternalFrame}>
          <img className={styles.persona1Icon} alt="" src="/image-1@2x.png" />
          <img
            className={styles.persona2Icon}
            alt=""
            src="/persona-2@2x.png"
            onClick={onPersona2ImageClick}
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
      <b className={styles.nombreDeUsuario}>Jorge Fernández</b>
      <div className={styles.tarjetas}>
        <div className={styles.nmeroDeTelfonoParent}>
          <b className={styles.nmeroDeTelfono}>NÚMERO DE TELÉFONO</b>
          <div className={styles.div}>+52 55 9106 1481</div>
        </div>
      </div>
      <div className={styles.tarjetas1}>
        <div className={styles.nmeroDeTelfonoParent}>
          <b className={styles.nmeroDeTelfono}>CORREO ELECTRÓNICO</b>
          <div className={styles.div}>Jorge_fer@itam.mx</div>
        </div>
      </div>
      <img
        className={styles.perfilConNombreAdminChild}
        alt=""
        src="/frame-63.svg"
      />
      <b className={styles.irALas} onClick={onIrALasClick}>
        Ir a las estadísticas de la cafetería
      </b>
    </div>
  );
};

export default PerfilConNombreAdmin;
