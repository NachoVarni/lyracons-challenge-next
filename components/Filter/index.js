import styles from "./filter.module.scss";

export default function Filter({ cat, items, show, handleShow }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.catWrapper}>
        <p className={styles.category}>{cat}</p>
        <span className={styles.operator} onClick={handleShow}>
          {show ? "-" : "+"}
        </span>
      </div>

      {show && (
        <ul>
          {items?.map((item, i) => (
            <div className={styles.itemWrapper} key={i}>
              <input type="checkbox" className={styles.itemCheckbox} />
              <li className={styles.itemText}>{item}</li>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
}
