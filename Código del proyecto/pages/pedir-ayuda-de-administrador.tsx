import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./pedir-ayuda-de-administrador.module.css";

const PedirAyudaDeAdministrador: NextPage = () => {
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

  const onFrameContainer2Click = useCallback(() => {
    router.push("/pantalla-de-pago");
  }, [router]);

  const onFrameContainer5Click = useCallback(() => {
    router.push("/pantalla-de-pago");
  }, [router]);

  const onPersona1Image1Click = useCallback(() => {
    router.push("/perfil-con-nombre-alumnx");
  }, [router]);

  const onMugHotAlt1Image1Click = useCallback(() => {
    router.push("/men-bebida-alumnx");
  }, [router]);

  const onSandwich1Image1Click = useCallback(() => {
    router.push("/men-comida-alumnx");
  }, [router]);

  const onFrameContainer8Click = useCallback(() => {
    router.push("/pantalla-de-pago");
  }, [router]);

  const onFrameContainer11Click = useCallback(() => {
    router.push("/pantalla-de-pago");
  }, [router]);

  return (
    <div className={styles.pedirAyudaDeAdministrador}>
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
      <div className={styles.enviarMensajeAAdministradorWrapper}>
        <div
          className={styles.enviarMensajeA}
        >{`Enviar mensaje a administrador `}</div>
      </div>
      <div className={styles.inputParent}>
        <div className={styles.input}>
          <i
            className={styles.describaBrevementeSu}
          >{`Describa brevemente su problema y en breve recibira un mensaje de nuestos administradores `}</i>
          <img
            className={styles.iconsphosphorsecurityquesti}
            alt=""
            src="/iconsphosphorsecurityquestion.svg"
          />
        </div>
        <div className={styles.frameChild} />
      </div>
      <div className={styles.frame} onClick={onFrameContainer2Click}>
        <div className={styles.enviar}>Enviar</div>
      </div>
      <img className={styles.image15Icon} alt="" src="/image-15@2x.png" />
      <div className={styles.enviarMensajeAAdministradorWrapper}>
        <div
          className={styles.enviarMensajeA}
        >{`Enviar mensaje a administrador `}</div>
      </div>
      <div className={styles.inputParent}>
        <div className={styles.input}>
          <i
            className={styles.describaBrevementeSu}
          >{`Describa brevemente su problema y en breve recibira un mensaje de nuestos administradores `}</i>
          <img
            className={styles.iconsphosphorsecurityquesti}
            alt=""
            src="/iconsphosphorsecurityquestion.svg"
          />
        </div>
        <div className={styles.frameChild} />
      </div>
      <div className={styles.frame} onClick={onFrameContainer5Click}>
        <div className={styles.enviar}>Enviar</div>
      </div>
      <img className={styles.image15Icon} alt="" src="/image-15@2x.png" />
      <div className={styles.footer}>
        <div className={styles.iconosInternalFrame}>
          <img
            className={styles.persona1Icon}
            alt=""
            src="/persona-1@2x.png"
            onClick={onPersona1Image1Click}
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
            onClick={onMugHotAlt1Image1Click}
          />
          <img
            className={styles.sandwich1Icon}
            alt=""
            src="/sandwich-1@2x.png"
            onClick={onSandwich1Image1Click}
          />
        </div>
      </div>
      <div className={styles.enviarMensajeAAdministradorWrapper}>
        <div
          className={styles.enviarMensajeA}
        >{`Enviar mensaje a administrador `}</div>
      </div>
      <div className={styles.inputParent}>
        <div className={styles.input}>
          <i
            className={styles.describaBrevementeSu}
          >{`Describa brevemente su problema y en breve recibira un mensaje de nuestos administradores `}</i>
          <img
            className={styles.iconsphosphorsecurityquesti}
            alt=""
            src="/iconsphosphorsecurityquestion.svg"
          />
        </div>
        <div className={styles.frameChild} />
      </div>
      <div className={styles.frame} onClick={onFrameContainer8Click}>
        <div className={styles.enviar}>Enviar</div>
      </div>
      <img className={styles.image15Icon} alt="" src="/image-15@2x.png" />
      <div className={styles.enviarMensajeAAdministradorWrapper}>
        <div
          className={styles.enviarMensajeA}
        >{`Enviar mensaje a administrador `}</div>
      </div>
      <div className={styles.inputParent1}>
        <div className={styles.input}>
          <i
            className={styles.describaBrevementeSu}
          >{`Describa brevemente su problema y en breve recibira un mensaje de nuestos administradores `}</i>
          <img
            className={styles.iconsphosphorsecurityquesti}
            alt=""
            src="/iconsphosphorsecurityquestion.svg"
          />
        </div>
        <div className={styles.frameChild} />
      </div>
      <div className={styles.frame} onClick={onFrameContainer11Click}>
        <div className={styles.enviar}>Enviar</div>
      </div>
      <img className={styles.image15Icon} alt="" src="/image-15@2x.png" />
    </div>
  );
};

export default PedirAyudaDeAdministrador;
