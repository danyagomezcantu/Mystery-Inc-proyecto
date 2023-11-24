import type { NextPage } from "next";
import { useCallback } from "react";
import FormContainer from "../components/form-container";
import PriceCard from "../components/price-card";
import FormContainer1 from "../components/form-container1";
import { useRouter } from "next/router";
import Footer from "../components/footer";
import styles from "./men-bebida-alumnx.module.css";

const MenBebidaAlumnx: NextPage = () => {
  const router = useRouter();

  const onPersona3ImageClick = useCallback(() => {
    router.push("/personalizacin-alumnx");
  }, [router]);

  return (
    <div className={styles.menBebidaAlumnx}>
      <div className={styles.coffeeCards}>
        <FormContainer />
        <PriceCard />
        <FormContainer1 dimensionCode="/rectangle-17421@2x.png" />
        <FormContainer1
          dimensionCode="/rectangle-1744@2x.png"
          propTop="300.1px"
        />
      </div>
      <div className={styles.searchBar}>
        <img className={styles.searchBarChild} alt="" src="/group-100.svg" />
        <div className={styles.buscaTuBebida}>Busca tu bebida favorita</div>
      </div>
      <img
        className={styles.persona3Icon}
        alt=""
        src="/persona-3@2x.png"
        onClick={onPersona3ImageClick}
      />
      <Footer />
    </div>
  );
};

export default MenBebidaAlumnx;
