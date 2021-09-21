import { useContext } from "react";
import FieldContext from "../../context/fieldContext";
import addedProducts from "../data.json";
import styles from "./card.module.scss";

const products = [
  {
    id: 0,
    desc: "LOREM IPSUM DOLOR SIT AMET",
    price: 5899,
  },
  {
    id: 1,
    desc: "LOREM IPSUM DOLOR SIT AMET",
    price: 3299,
    extra: "-50 OFF",
    newPrice: 2299,
    dues: (
      <p className={styles.dues}>
        hasta <strong>12 cuotas</strong>
      </p>
    ),
  },
  {
    id: 2,
    desc: "LOREM IPSUM DOLOR SIT AMET",
    price: 2299,
    extra: "NUEVO",
  },
  {
    id: 3,
    desc: "LOREM IPSUM DOLOR SIT AMET",
    price: 3299,
    newPrice: 2299,
    dues: (
      <p className={styles.dues}>
        hasta <strong>12 cuotas</strong>
      </p>
    ),
  },
  {
    id: 4,
    desc: "LOREM IPSUM DOLOR SIT AMET",
    price: 3299,
    newPrice: 2299,
    dues: (
      <p className={styles.dues}>
        hasta <strong>12 cuotas</strong>
      </p>
    ),
  },
  {
    id: 5,
    desc: "LOREM IPSUM DOLOR SIT AMET",
    price: 3299,
    newPrice: 2299,
    dues: (
      <p className={styles.dues}>
        hasta <strong>12 cuotas</strong>
      </p>
    ),
  },
];

export default function Card() {
  const data = useContext(FieldContext);
  const { newProducts } = data;

  return (
    <div className={styles.wrapper}>
      {products?.map((product) => (
        <div className={styles.cardWrapper} key={product.id}>
          <div className={styles.picWrapper}>
            {product.extra && <p className={styles.extra}>{product.extra}</p>}
          </div>

          <div className={styles.textWrapper}>
            <p className={styles.description}>{product.desc}</p>
            <div className={styles.priceWrapper}>
              <p
                className={
                  product.newPrice
                    ? `${styles.crossedPrice}`
                    : `${styles.price}`
                }
              >
                ${product.price}
              </p>
              {product.newPrice && <p>${product.newPrice}</p>}
            </div>
            {product.dues && product.dues}
          </div>
        </div>
      ))}
      {newProducts && (
        <>
          {addedProducts.products.map((product) => (
            <div className={styles.cardWrapper} key={product.id}>
              <img
                src={product.imageSrc}
                alt="product"
                className={styles.image}
              />

              <div className={styles.textWrapper}>
                <p className={styles.description}>{product.name}</p>
                <div className={styles.priceWrapper}>
                  <p
                    className={
                      product.newPrice
                        ? `${styles.crossedPrice}`
                        : `${styles.price}`
                    }
                  >
                    ${product.listPrice}
                  </p>
                  {product.newPrice && <p>${product.bestPrice}</p>}
                </div>
                {product.fees && product.fees}
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}
