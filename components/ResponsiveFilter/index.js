import styles from "./responsiveFilter.module.scss";

export default function ResponsiveFilter({ cat, items, classname }) {
  return (
    <div className={styles.classname}>
      <div className={styles.catWrapper}>
        <p className={styles.category}>{cat}</p>
        {items?.map((item) => (
          <p>{item}</p>
        ))}
      </div>
    </div>
  );
}
