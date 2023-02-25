import styles from "../../styles/ProductPage.module.css";
import axios from "axios";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, changeQuantity } from "../../reduxStore/reducers/cartSlice";

import { useState } from "react";

export default function ProductPage({ product }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartItems.cartItems);
  const [disable, setDisable] = useState(false);
  const [clicked, setClicked] = useState(true);
  const [num, setNum] = useState(1);
  function handleAddCart(product) {
    setClicked(false);
    dispatch(changeQuantity("+"));
    dispatch(addToCart({ ...product, num: num }));
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }
  function handleQuantity(id) {
    if (id === "+") {
      if (disable) {
        setDisable(false);
      }
      setNum(num + 1);
      dispatch(changeQuantity(id));
      dispatch(addToCart({ ...product, num: num + 1 }));
    }
    if (id === "-") {
      if (num === 1) {
        setDisable(true);
      } else {
        setNum((num) => num - 1);
        dispatch(changeQuantity(id));
        dispatch(addToCart({ ...product, num: num - 1 }));
      }
    }
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.img}>
          <Image src={product.image} alt="" fill />
        </div>
        <div className={styles.content}>
          <h1>{product.title}</h1>
          <p
            style={{
              fontSize: "1rem",
              fontFamily: "monospace",
              marginBottom: "1rem",
            }}
          >
            {product.description}
          </p>
          <h5 style={{ fontSize: "2rem" }}>KSh: {product.price}</h5>
          <p style={{ fontSize: "1.2rem" }}> Rating: {product.rating.rate}</p>
          <div className={styles.cartActions}>
            {clicked && (
              <button
                className={styles.cartBtn}
                onClick={() => {
                  handleAddCart(product);
                }}
              >
                Add to cart
              </button>
            )}
            {!clicked && (
              <div className={styles.buttons}>
                <button onClick={() => handleQuantity("+")}>+</button>
                {num}
                <button onClick={() => handleQuantity("-")} disabled={disable}>
                  -
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const res = await axios("https://fakestoreapi.com/products");
  const result = res.data;
  let list = [];
  result.forEach((element) => {
    list.push({ params: { productId: element.id.toString() } });
  });

  return {
    paths: list,
    fallback: false,
  };
}
export async function getStaticProps(context) {
  const data = await axios(
    `https://fakestoreapi.com/products/${context.params.productId}`
  );

  return {
    props: { product: data.data },
  };
}
