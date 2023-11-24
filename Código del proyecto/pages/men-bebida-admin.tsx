import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./men-bebida-admin.module.css";

const MenBebidaAdmin: NextPage = () => {
  const router = useRouter();

  const onPersona1ImageClick = useCallback(() => {
    router.push("/perfil-con-nombre-admin");
  }, [router]);

  const onPersona2ImageClick = useCallback(() => {
    router.push("/pedidos-recibidos-cafetera");
  }, [router]);

  const onSandwich1ImageClick = useCallback(() => {
    router.push("/men-comida-admin");
  }, [router]);

  return (
    <div className={styles.menBebidaAdmin}>
      <div className={styles.menBebidaAdminChild} />
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
            src="/persona-2@2x.png"
            onClick={onPersona2ImageClick}
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
      <div className={styles.menBebidaAdminItem} />
      <div className={styles.menBebidaAdminInner} />
      <div className={styles.rectangleDiv} />
      <div className={styles.menBebidaAdminChild1} />
      <img
        className={styles.rectangleIcon}
        alt=""
        src="/rectangle-174@2x.png"
      />
      <div className={styles.cafAmericano}>{`Café americano `}</div>
      <div className={styles.ingredientesCafKjContainer}>
        <p className={styles.ingredientesCafKj}>Ingredientes:  Café kjöö</p>
        <p className={styles.ingredientesCafKj}>{`Agua `}</p>
      </div>
      <div className={styles.editar}>Editar</div>
      <img className={styles.image3Icon} alt="" src="/image-3@2x.png" />
      <div className={styles.menBebidaAdminChild2} />
      <div className={styles.frapucchino}>Frapucchino</div>
      <img className={styles.menBebidaAdminChild3} alt="" src="/line-2.svg" />
      <div className={styles.ingredientesCafJarabeContainer}>
        <p className={styles.ingredientesCafKj}>Ingredientes:  Café</p>
        <p className={styles.ingredientesCafKj}>Jarabe de azúcar</p>
        <p className={styles.ingredientesCafKj}>{`Hielo `}</p>
        <p className={styles.ingredientesCafKj}>Leche</p>
      </div>
      <div className={styles.ingredientesCalabazaLecheContainer}>
        <p className={styles.ingredientesCafKj}>Ingredientes:  Calabaza</p>
        <p className={styles.ingredientesCafKj}>Leche</p>
        <p className={styles.ingredientesCafKj}>Crema</p>
        <p className={styles.ingredientesCafKj}>Canela</p>
        <p className={styles.ingredientesCafKj}>{`Azucar `}</p>
      </div>
      <div className={styles.editar1}>Editar</div>
      <div className={styles.bebidas}>Bebidas</div>
      <div className={styles.div}>+</div>
      <div className={styles.div1}>-</div>
      <div className={styles.agregarBebida}>
        <p className={styles.ingredientesCafKj}>Agregar</p>
        <p className={styles.ingredientesCafKj}>{`bebida `}</p>
      </div>
      <div className={styles.eliminarBebida}>
        <p className={styles.ingredientesCafKj}>{`Eliminar `}</p>
        <p className={styles.ingredientesCafKj}>{`bebida `}</p>
      </div>
      <img
        className={styles.menBebidaAdminChild4}
        alt=""
        src="/rectangle-207@2x.png"
      />
      <img className={styles.menBebidaAdminChild5} alt="" src="/line-2.svg" />
      <div className={styles.latteDeCalabaza}>Latte de calabaza</div>
      <div className={styles.editar2}>Editar</div>
      <img className={styles.image7Icon} alt="" src="/image-7@2x.png" />
      <img
        className={styles.menBebidaAdminChild6}
        alt=""
        src="/rectangle-200@2x.png"
      />
      <div className={styles.menBebidaAdminChild7} />
      <div className={styles.menBebidaAdminChild8} />
      <img
        className={styles.menBebidaAdminChild9}
        alt=""
        src="/rectangle-198@2x.png"
      />
      <div className={styles.ponche}>Ponche</div>
      <div className={styles.ingredientesAguaAzucarContainer}>
        <p className={styles.ingredientesCafKj}>{`Ingredientes:  Agua `}</p>
        <p className={styles.ingredientesCafKj}>Azucar</p>
        <p className={styles.ingredientesCafKj}>Manzana</p>
        <p className={styles.ingredientesCafKj}>Caña</p>
        <p className={styles.ingredientesCafKj}>Tejocote</p>
        <p className={styles.ingredientesCafKj}>Canela</p>
        <p className={styles.ingredientesCafKj}>---</p>
      </div>
      <div className={styles.editar3}>Editar</div>
      <img className={styles.image8Icon} alt="" src="/image-3@2x.png" />
      <img className={styles.image14Icon} alt="" src="/image-7@2x.png" />
    </div>
  );
};

export default MenBebidaAdmin;
