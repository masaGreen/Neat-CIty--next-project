import styles from "../styles/Navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";

export default function Navbar() {
  const {quantity} = useSelector(state=>state.cartItems)
  return (
    <div className={styles.navWrapper}>
      <div className={styles.orderWrapper}>
        <Image src="/callIconWhite.png" alt="" height="32" width="32"/>

        <div >
          <h2 className={styles.orderText}>Order Now, call</h2>
          <p className={styles.orderText}>+254716794207</p>
        </div>
      </div>
      <div className={styles.logo}>
        <h1 className={styles.neat}>Neat City</h1>
      </div>

      <ul className={styles.links}>
        <Link href="/" className={styles.nextlink}><li className={styles.link}>Products</li></Link>
        <li className={[styles.link, styles.shown].join(" ")}>Offers</li>
        <li className={styles.link}>New Arrivals</li>
        <li className={styles.link}>About</li>
      </ul>
      <Link href="/cart">
      <div className={styles.cart}>
        <Image src="/cart.png" alt="" fill/>
        <button className={styles.cartBtn}>{quantity}</button>
      </div>
      </Link>
    </div>
  );
}
