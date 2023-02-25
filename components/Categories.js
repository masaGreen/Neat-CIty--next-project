import styles from "../styles/Category.module.css";
import Link from "next/link";

export default function Categories() {
  return (
    <div className={styles.categoryWrapper}>
      <h1>Categories</h1>
      <div className={styles.buttons}>
        <Link href="/products/menClothing">
          <button className={[styles.btn, styles.menBtn].join(" ")}>
            Men&apos;s Clothing
          </button>
        </Link>
        <Link href="/products/ladiesClothing">
          <button className={[styles.btn, styles.ladiesBtn].join(" ")}>
            Ladie&apos;s Clothing
          </button>
        </Link>
      </div>
    </div>
  );
}
