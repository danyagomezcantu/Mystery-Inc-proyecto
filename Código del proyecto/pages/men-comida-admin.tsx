import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./men-comida-admin.module.css";

const MenComidaAdmin: NextPage = () => {
  const router = useRouter();

  const onPersona1ImageClick = useCallback(() => {
    router.push("/perfil-con-nombre-admin");
  }, [router]);

  const onPersona2ImageClick = useCallback(() => {
    router.push("/pedidos-recibidos-cafetera");
  }, [router]);

  const onMugHotAlt1ImageClick = useCallback(() => {
    router.push("/men-bebida-admin");
  }, [router]);

  return (
    <div className={styles.menComidaAdmin}>
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
      <div className={styles.platillos}>Platillos</div>
      <div className={styles.div}>+</div>
      <div className={styles.div1}>-</div>
      <div className={styles.menComidaAdminChild} />
      <div className={styles.menComidaAdminItem} />
      <img className={styles.image4Icon} alt="" src="/image-4@2x.png" />
      <div className={styles.donas}>Donas</div>
      <div className={styles.ingredientesHarinaHuevoContainer}>
        <p className={styles.ingredientesHarina}>
          <span className={styles.ingredientes}>Ingredientes:  </span>
          <span>Harina</span>
        </p>
        <p className={styles.ingredientesHarina}>Huevo</p>
        <p className={styles.ingredientesHarina}>Leche</p>
        <p className={styles.ingredientesHarina}>Azucar</p>
        <p className={styles.ingredientesHarina}>{`Glaseado `}</p>
        <p className={styles.ingredientesHarina}>---</p>
      </div>
      <div className={styles.editar}>Editar</div>
      <img className={styles.image5Icon} alt="" src="/image-7@2x.png" />
      <div className={styles.menComidaAdminInner} />
      <div className={styles.rectangleDiv} />
      <img className={styles.image12Icon} alt="" src="/image-12@2x.png" />
      <div className={styles.arrozConLeche}>{`Arroz con leche `}</div>
      <div className={styles.ingredientesArrozLecheContainer}>
        <p className={styles.ingredientesArroz}>Ingredientes:  Arroz</p>
        <p className={styles.ingredientesHarina}>Leche</p>
        <p className={styles.ingredientesHarina}>Canela</p>
        <p className={styles.ingredientesHarina}>{`Azucar `}</p>
      </div>
      <div className={styles.editar1}>Editar</div>
      <img className={styles.image13Icon} alt="" src="/image-7@2x.png" />
      <div className={styles.agregarPlatillo}>
        <p className={styles.ingredientesHarina}>Agregar</p>
        <p className={styles.ingredientesHarina}>{`platillo `}</p>
      </div>
      <div className={styles.eliminarPlatillo}>
        <p className={styles.ingredientesHarina}>{`Eliminar `}</p>
        <p className={styles.ingredientesHarina}>{`Platillo `}</p>
      </div>
      <div className={styles.menComidaAdminChild1} />
      <div className={styles.menComidaAdminChild2} />
      <img className={styles.image7Icon} alt="" src="/image-71@2x.png" />
      <div className={styles.empanadasDeCarne}>Empanadas de carne</div>
      <div className={styles.ingredientesCebollaAceiteContainer}>
        <p className={styles.ingredientesHarina}>{`Ingredientes:  Cebolla `}</p>
        <p className={styles.ingredientesHarina}>Aceite</p>
        <p className={styles.ingredientesHarina}>Comino</p>
        <p className={styles.ingredientesHarina}>Masa para empanadas</p>
        <p className={styles.ingredientesHarina}>Carne molida (cerdo)</p>
      </div>
      <div className={styles.editar2}>Editar</div>
      <img className={styles.image9Icon} alt="" src="/image-3@2x.png" />
      <div className={styles.menComidaAdminChild3} />
      <div className={styles.menComidaAdminChild4} />
      <img className={styles.image10Icon} alt="" src="/image-10@2x.png" />
      <div className={styles.enchiladasSuizas}>{`Enchiladas suizas `}</div>
      <div className={styles.ingredientesTomatejitomate}>
        <p className={styles.ingredientesHarina}>
          <span className={styles.ingredientes}>Ingredientes:  </span>
          <span>Tomate/Jitomate</span>
        </p>
        <p className={styles.ingredientesHarina}>Tortilla</p>
        <p className={styles.ingredientesHarina}>Queso manchego</p>
        <p className={styles.ingredientesHarina}>{`Perejil `}</p>
        <p className={styles.ingredientesHarina}>{`Pollo `}</p>
        <p className={styles.ingredientesHarina}>---</p>
      </div>
      <div className={styles.editar3}>Editar</div>
      <img className={styles.image11Icon} alt="" src="/image-7@2x.png" />
    </div>
  );
};

export default MenComidaAdmin;
