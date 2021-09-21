import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <div className={styles.wrapper}>
      <p className={styles.text}>CAMBIOS Y DEVOLUCIONES</p>
      <p className={styles.text}>ENVIOS</p>
      <p className={styles.text}>MEDIOS DE PAGO</p>
      <p className={styles.text}>PREGUNTAS FRECUENTES</p>
      <p className={styles.text}>VENTA MAYORISTA</p>
      <h4 className={styles.news}>News</h4>
      <p className={styles.subtitle}>Suscribite y enterate de las promos!</p>
      <input
        type="text"
        placeholder="Escribi tu Mail"
        className={styles.mailInput}
      />
      <button className={styles.suscribeBtn}>SUSCRIBITE</button>
    </div>
  );
}
