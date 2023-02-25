import { useSelector, useDispatch } from "react-redux";
import { addToCart, changeQuantity } from "../../reduxStore/reducers/cartSlice";
import Image from "next/image";
import { useState } from "react";
import styles from "../../styles/Product.module.css";
import Link from "next/link";

export default function Product({ product }) {
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
    <div className={styles.card}>
      {product && (
        <>
          <div className={styles.imgWrapper}>
            <Link href={`/products/${product.id}`}>
              <Image src={product.image} alt="" fill />
            </Link>
          </div>
          <div className={styles.content}>
            <h2 className={styles.title}>{product.title}</h2>
            <div className={styles.clamp}>{product.description}</div>
            <div className={styles.priceWrapper}>
              <div>KSh. {product.price}</div>
              <div>Rating: {product.rating.rate}</div>
              <div>Units left: {product.rating.count}</div>
            </div>
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
                  <button
                    onClick={() => handleQuantity("-")}
                    disabled={disable}
                  >
                    -
                  </button>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
