import styles from "../styles/Cart.module.css";
import Image from "next/image";

import { useSelector } from "react-redux";

export default function Cart() {
  const { cartItems } = useSelector((state) => state.cartItems);

  const subTotal = cartItems.reduce((a, b) => {
    return a + b.num * b.price;
  }, 0);
  return (
    <div className={styles.main}>
      <h2 style={{ textAlign: "center", padding: "0.5rem" }}>My Orders</h2>
      <div className={styles.tableWrapper}>
        <div className={styles.container}>
          <table className={styles.table} id="table">
            <thead className={styles.head}>
              <tr className={styles.tr}>
                <th>#</th>
                <th>item</th>
                <th>quantity</th>
                <th>@</th>
                <th>Sub Total</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => {
                return (
                  <tr className={styles.tr} key={item.id}>
                    <td>{index + 1}</td>
                    <td>
                      <Image src={item.image} alt="" height="40" width="40" />
                    </td>
                    <td>{item.num}</td>
                    <td>{item.price}</td>
                    <td>{(item.num * item.price).toFixed(2)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className={styles.total}>
            <h2>Sub Total</h2>
            <p style={{ textDecorationLine: "underline" }}>
              KSh: {subTotal.toFixed(2)}
            </p>
          </div>
        </div>
        <div className={styles.checkOut}>
          <div className={styles.totaldetails}>
            <p className={styles.checkoutItem}>
              total: {subTotal.toFixed(2)}/=
            </p>
            <p className={styles.checkoutItem}>discount: 0/=</p>
          </div>
          <div className={styles.methods}>
            <button className={styles.mpesa}>Mpesa</button>
            <button className={styles.cash}>Cash on delivery</button>
          </div>
        </div>
      </div>
    </div>
  );
}
