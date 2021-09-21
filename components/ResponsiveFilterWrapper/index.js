import { useContext } from "react";
import FieldContext from "../../context/fieldContext";
import styles from "./responsiveFilterWrapper.module.scss";
import ResponsiveFilter from "../ResponsiveFilter";
import FilterWrapper from "../FilterWrapper";

export default function ResponsiveFilterWrapper() {
  const data = useContext(FieldContext);
  const { handleResponsiveFilter, showResponsiveFilter } = data;

  return (
    <div className={styles.wrapper}>
      <p className={styles.filterBy} onClick={handleResponsiveFilter}>
        FILTRA POR <span>+</span>
      </p>
      <p className={styles.orderBy}>
        ORDENA POR{" "}
        <img src="/arrow-right.svg" alt="arrow" className={styles.arrow} />
      </p>
    </div>
  );
}
