import { useContext } from "react";
import FieldContext from "../../context/fieldContext";
import styles from "./navbar.module.scss";

export default function Navbar() {
  const data = useContext(FieldContext);
  const { handleShowGrid, handleTitle } = data;

  return (
    <div className={styles.wrapper}>
      <div className={styles.logoWrapper}>
        <img src="/lyracons-logo.svg" alt="lyracons" className={styles.logo} />
      </div>

      <div className={styles.leftResponsiveWrapper}>
        <img
          src="/hamMenu.svg"
          alt="menu"
          className={styles.hamMenuResponsive}
        />
        <img
          src="/search.svg"
          alt="search"
          className={styles.searchImgResponsive}
        />
      </div>

      <div className={styles.logoWrapperResponsive}>
        <img
          src="/lyracons-logo.svg"
          alt="lyracons"
          className={styles.logoResponsive}
        />
      </div>

      <ul className={styles.list}>
        <li className={`${styles.item} ${styles.shop}`}>
          SHOP
          <ul className={styles.shopList}>
            <li className={styles.shopItem}>Pantalones</li>
            <li className={styles.shopItem}>Remeras</li>
            <li className={styles.shopItem}>Camperas</li>
          </ul>
        </li>
        <li
          onMouseOver={handleTitle}
          onMouseOut={handleTitle}
          className={styles.item}
        >
          REAL WINTER
        </li>
        <li className={styles.item}>COMPLEMENTOS</li>
        <li className={styles.item}>EDITORIALES</li>
      </ul>
      <div className={styles.rightContent}>
        <div className={styles.inputWrapper}>
          <input
            type="text"
            placeholder="BUSCAR"
            className={styles.searchInput}
          />
          <img src="/search.svg" alt="search" className={styles.searchImg} />
        </div>
        <p onClick={handleShowGrid} className={styles.option}>
          INGRESAR
        </p>
        <p className={styles.option}>CARRITO</p>
        <img src="/cart.svg" alt="cart" className={styles.option} />
      </div>
      <img src="/cart.svg" alt="cart" className={styles.optionResponsive} />
    </div>
  );
}
