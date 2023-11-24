import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./pantalla-de-pago.module.css";

const PantallaDePago: NextPage = () => {
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

  const onFrameContainer11Click = useCallback(() => {
    router.push("/pantalla-de-tarjetas");
  }, [router]);

  const onPayNowCTAClick = useCallback(() => {
    router.push("/seguimiento-de-pedido");
  }, [router]);

  return (
    <div className={styles.pantallaDePago}>
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
      <div className={styles.tarjetasGuardadasParent}>
        <b className={styles.tarjetasGuardadas}>Tarjetas guardadas</b>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.frameWrapper}>
              <div className={styles.frameContainer}>
                <div className={styles.logosmastercardParent}>
                  <img
                    className={styles.logosmastercardIcon}
                    alt=""
                    src="/logosmastercard.svg"
                  />
                  <div className={styles.nuBankParent}>
                    <div className={styles.tarjetasGuardadas}>Nu Bank</div>
                    <div className={styles.tarjetasGuardadas}>
                      **** **** **** 8395
                    </div>
                  </div>
                </div>
                <img
                  className={styles.carbonradioButtonCheckedIcon}
                  alt=""
                  src="/carbonradiobuttonchecked.svg"
                />
              </div>
            </div>
            <div className={styles.frameWrapper}>
              <div className={styles.frameContainer}>
                <div className={styles.logosmastercardParent}>
                  <img
                    className={styles.logosvisaIcon}
                    alt=""
                    src="/logosvisa.svg"
                  />
                  <div className={styles.nuBankParent}>
                    <div
                      className={styles.tarjetasGuardadas}
                    >{`BBVA      `}</div>
                    <div className={styles.tarjetasGuardadas}>
                      **** **** **** 6246
                    </div>
                  </div>
                </div>
                <img
                  className={styles.carbonradioButtonCheckedIcon}
                  alt=""
                  src="/carbonradiobuttonchecked.svg"
                />
              </div>
            </div>
          </div>
          <div
            className={styles.frameWrapper1}
            onClick={onFrameContainer11Click}
          >
            <div className={styles.vuesaxlinearaddParent}>
              <div className={styles.vuesaxlinearadd}>
                <div className={styles.addWrapper}>
                  <img className={styles.addIcon} alt="" src="/add.svg" />
                </div>
              </div>
              <div className={styles.tarjetasGuardadas}>
                Añadir nueva tarjeta
              </div>
            </div>
          </div>
        </div>
      </div>
      <b className={styles.otrasFormasDe}>Otras formas de pago</b>
      <div className={styles.pantallaDePagoInner}>
        <div className={styles.frameParent2}>
          <div className={styles.frameWrapper2}>
            <div className={styles.resumenDeLaOrdenParent}>
              <b className={styles.tarjetasGuardadas}>Resumen de la orden</b>
              <div className={styles.pedidoBarraDeComidaYBebidParent}>
                <div className={styles.pedidoBarraDe}>
                  Pedido barra de comida y bebidas
                </div>
                <div className={styles.qty4Wrapper}>
                  <div className={styles.qty4}>Qty: 4</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.vuesaxlinearlocationParent}>
            <img
              className={styles.vuesaxlinearlocationIcon}
              alt=""
              src="/vuesaxlinearlocation.svg"
            />
            <div className={styles.cafeteraRoHondo}>Cafetería Río Hondo</div>
          </div>
          <div className={styles.totalAmountParent}>
            <b className={styles.tarjetasGuardadas}>Total Amount</b>
            <b className={styles.b}>$329</b>
          </div>
        </div>
      </div>
      <div className={styles.pantallaDePagoChild}>
        <div className={styles.frameGroup}>
          <div className={styles.frameWrapper}>
            <div className={styles.frameContainer}>
              <div className={styles.logosmastercardParent}>
                <img
                  className={styles.vuesaxlinearwallet3Icon}
                  alt=""
                  src="/vuesaxlinearwallet3.svg"
                />
                <div className={styles.walletWrapper}>
                  <div className={styles.tarjetasGuardadas}>Wallet</div>
                </div>
              </div>
              <img
                className={styles.vuesaxlinearwallet3Icon}
                alt=""
                src="/vuesaxlineararrowright1.svg"
              />
            </div>
          </div>
          <div className={styles.frameWrapper}>
            <div className={styles.frameContainer}>
              <div className={styles.logosmastercardParent}>
                <img
                  className={styles.vuesaxlinearwallet3Icon}
                  alt=""
                  src="/vuesaxlinearmoneys.svg"
                />
                <div className={styles.walletWrapper}>
                  <div className={styles.tarjetasGuardadas}>
                    Pagar en efectivo contra entrega
                  </div>
                </div>
              </div>
              <img
                className={styles.vuesaxlinearwallet3Icon}
                alt=""
                src="/vuesaxlineararrowright1.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <img
        className={styles.pantallaDePagoItem}
        alt=""
        src="/ellipse-1@2x.png"
      />
      <div className={styles.payNowCta} onClick={onPayNowCTAClick}>
        <div className={styles.hacerPedido}>HACER PEDIDO</div>
      </div>
    </div>
  );
};

export default PantallaDePago;
