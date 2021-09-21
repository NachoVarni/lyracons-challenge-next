import { useContext } from "react";
import FieldContext from "../../context/fieldContext";
import Card from "../Card";
import styles from "./cardWrapper.module.scss";

export default function CardWrapper() {
  const data = useContext(FieldContext);
  const { handleNewProducts, newProducts } = data;

  return (
    <div className={styles.wrapper}>
      <div className={styles.titleWrapper}>
        <p>6 PRODUCTOS</p>
        <div className={styles.filterBy}>
          <p>ORDENAR POR:</p>
          <select name="" id="" className={styles.options}>
            <option value="Relevancia" className={styles.option}>
              Relevancia
            </option>
          </select>
        </div>
      </div>
      <Card />
      <button className={styles.productsButton} onClick={handleNewProducts}>
        {newProducts ? "Ver menos" : "Ver mas productos"}
      </button>
    </div>
  );
}
