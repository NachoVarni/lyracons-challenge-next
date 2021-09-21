import { useState } from "react";
import ResponsiveFilter from "../ResponsiveFilter";
import styles from "./openedFilter.module.scss";

export default function OpenedFilter({ handleResponsiveFilter }) {
  const talles = [36, 37, 38, 39, 40, 41, 42, 43];

  const [selected, setSelected] = useState(false);

  return (
    <div className={styles.wrapper}>
      <div className={styles.titleWrapper}>
        <p className={styles.title}>Filtra por: </p>
        <span className={styles.cross} onClick={handleResponsiveFilter}>
          X
        </span>
      </div>
      <div className={styles.filterWrapper}>
        <div className={styles.sizeWrapper}>
          <p className={styles.category}>Talle</p>
          <div className={styles.sizeItemWrapper}>
            {talles?.map((item, i) => (
              <p className={styles.sizeItem} key={i}>
                {item}
              </p>
            ))}
          </div>
        </div>
        <div className={styles.colorWrapper}>
          <p className={styles.category}>Color: Animal print negro</p>
          <div className={styles.imgWrapper}>
            <div className={styles.img}></div>
            <div className={styles.img}></div>
            <div className={styles.img}></div>
          </div>
        </div>
        <div className={styles.priceWrapper}>
          <p className={styles.category}>Precio</p>
          <label className={styles.container}>
            $2000 - $3000
            <input type="checkbox" />
            <span className={styles.checkmark}></span>
          </label>
          <label className={styles.container}>
            $3000 - $4000
            <input type="checkbox" />
            <span className={styles.checkmark}></span>
          </label>
        </div>
      </div>
      <button className={styles.btn}>Aplicar</button>
    </div>
  );
}
