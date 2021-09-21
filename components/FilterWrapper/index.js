import { useContext } from "react";
import FieldContext from "../../context/fieldContext";
import Filter from "../Filter";
import styles from "./filterWrapper.module.scss";

export default function FilterWrapper() {
  const data = useContext(FieldContext);
  const {
    showTalle,
    handleShowTalle,
    showColor,
    handleShowColor,
    showPrecio,
    handleShowPrecio,
    showTemporada,
    handleShowTemporada,
    showMaterial,
    handleShowMaterial,
  } = data;

  return (
    <div className={styles.wrapper}>
      <p className={styles.text}>FILTRAR POR</p>
      <Filter
        cat="Talle"
        items={[35, 36, 37, 38, 39, 40, 41]}
        show={showTalle}
        handleShow={handleShowTalle}
      />
      <Filter
        cat="Color"
        items={[
          "Amarillo",
          "Blanco",
          "Hueso",
          "Marron",
          "Negro",
          "Nude",
          "Plata",
          "Rojo",
          "Suela",
          "Vision",
        ]}
        show={showColor}
        handleShow={handleShowColor}
      />
      <Filter
        cat="Precio"
        items={["$2000 - $3000", "$3000 - $4000"]}
        show={showPrecio}
        handleShow={handleShowPrecio}
      />
      <Filter
        cat="Temporada"
        show={showTemporada}
        handleShow={handleShowTemporada}
      />
      <Filter
        cat="Material"
        show={showMaterial}
        handleShow={handleShowMaterial}
      />
    </div>
  );
}
