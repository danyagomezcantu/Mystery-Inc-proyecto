import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./ayudar-alumno.module.css";

const AyudarAlumno: NextPage = () => {
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

  const onPersona2ImageClick = useCallback(() => {
    router.push("/pedidos-recibidos-cafetera");
  }, [router]);

  const onMugHotAlt1Image1Click = useCallback(() => {
    router.push("/men-bebida-admin");
  }, [router]);

  const onSandwich1Image1Click = useCallback(() => {
    router.push("/men-comida-admin");
  }, [router]);

  return (
    <div className={styles.ayudarAlumno}>
      <div className={styles.ayudarAlumnoChild} />
      <div className={styles.ayudarAlumnoItem} />
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
      <img className={styles.image15Icon} alt="" src="/image-15@2x.png" />
      <div className={styles.footer}>
        <div className={styles.footer2}>
          <div className={styles.iconosInternalFrame1}>
            <img
              className={styles.persona1Icon1}
              alt=""
              src="/image-1@2x.png"
            />
            <img
              className={styles.persona2Icon}
              alt=""
              src="/persona-2@2x.png"
              onClick={onPersona2ImageClick}
            />
            <img
              className={styles.mugHotAlt1Icon1}
              alt=""
              src="/mughotalt-11@2x.png"
              onClick={onMugHotAlt1Image1Click}
            />
            <img
              className={styles.sandwich1Icon1}
              alt=""
              src="/sandwich-1@2x.png"
              onClick={onSandwich1Image1Click}
            />
          </div>
        </div>
      </div>
      <img className={styles.image19Icon} alt="" src="/image-19@2x.png" />
      <div className={styles.ayudarAlumnoInner} />
      <img className={styles.image20Icon} alt="" src="/image-20@2x.png" />
      <img className={styles.image21Icon} alt="" src="/image-20@2x.png" />
      <b className={styles.recibidos}>Recibidos</b>
      <div className={styles.enviados}>Enviados</div>
      <div
        className={styles.alexanderFloresEsquivel}
      >{`Alexander Flores Esquivel `}</div>
      <div className={styles.miguelAngelPerez}>Miguel Angel Perez Mora</div>
      <b className={styles.holaAdmiTengo}>
        Hola admi, tengo problemas para inic...
      </b>
      <b className={styles.buenosDasMe}>
        Buenos días, me gustaría actualizar mis..
      </b>
      <div className={styles.amHoy}>8:27 am - hoy</div>
      <div className={styles.amHoy1}>6:58 am - hoy</div>
    </div>
  );
};

export default AyudarAlumno;
