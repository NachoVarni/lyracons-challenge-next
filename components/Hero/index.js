import { useContext } from "react";
import FieldContext from "../../context/fieldContext";
import CardWrapper from "../CardWrapper";
import FilterWrapper from "../FilterWrapper";
import ResponsiveFilterWrapper from "../ResponsiveFilterWrapper";
import styles from "./hero.module.scss";

export default function Hero() {
  const data = useContext(FieldContext);
  const { showGrid, title } = data;

  return (
    <div className={styles.wrapper}>
      <div className={styles.titleWrapper}>
        <div className={styles.seasonWrapper}>
          <img src="/arrow.svg" alt="arrow" />
          <p className={styles.season}>Invierno 2020</p>
        </div>
        <p className={title ? styles.customTitle : styles.title}>
          Titulo de categoria
        </p>
      </div>
      <div className={styles.gridWrapper}>
        <ResponsiveFilterWrapper />
        <FilterWrapper />
        {showGrid && <CardWrapper />}
      </div>
    </div>
  );
}
