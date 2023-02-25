import axios from "axios";
import Product from "./product";
import styles from "../../styles/MenClothing.module.css";

export default function LadiesClothingList(props) {
  return (
    <div
      style={{
        backgroundImage:
          "-webkit-radial-gradient( rgb(227, 235, 225), rgb(208, 211, 211))",
      }}
    >
      <div className={styles.wrapper}>
        {props.products.map((product) => {
          return <Product product={product} key={product.id} />;
        })}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await axios(
    "https://fakestoreapi.com/products/category/women%27s%20clothing"
  );
  return {
    props: {
      products: res.data,
    },
  };
}
