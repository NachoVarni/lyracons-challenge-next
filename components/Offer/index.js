import styles from "./offer.module.scss";

export default function Offer() {
  return (
    <div className={styles.wrapper}>
      <p className={styles.text}>
        <strong className={styles.boldText}>Aprovecha la promo!</strong> Compra
        hasta 12 cuotas sin interes
      </p>
      <span className={styles.cross}>X</span>
    </div>
  );
}
