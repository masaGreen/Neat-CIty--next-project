import styles from "../styles/Slider.module.css";
import Image from "next/image";

import { useState } from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import Categories from "../components/Categories";

export default function Slider() {
  const images = ["/clothing-store.jpg", "/desert.jpg"];

  const [currentIndex, setCurrentIndex] = useState(0);

  function slideImage() {
    if (currentIndex === 0) {
      setCurrentIndex(1);
    } else {
      setCurrentIndex(0);
    }
  }
  // setInterval(slideImage, 8000)
  function handleImage(id) {
    if (id === "l" && currentIndex === 0) {
      setCurrentIndex(1);
    }
    if (id === "l" && currentIndex !== 0) {
      setCurrentIndex(0);
    }
    if (id === "r" && currentIndex === 0) {
      setCurrentIndex(1);
    }
    if (id === "r" && currentIndex !== 0) {
      setCurrentIndex(0);
    }
  }

  return (
    <div className={styles.sliderWrapper}>
      <FaAngleLeft
        className={styles.pointer}
        style={{ left: "10px" }}
        onClick={() => handleImage("l")}
      />
      <Categories />
      <div className={styles.overlay}></div>
      <div
        className={styles.slider}
        style={{ transform: `translateX(${-100 * currentIndex}vw)` }}
      >
        {images.map((imag, i) => (
          <div className={styles.imageWrapper} key={i}>
            <Image src={imag} alt="" fill className={styles.image} />
          </div>
        ))}
      </div>

      <FaAngleRight
        className={styles.pointer}
        style={{ right: "10px" }}
        onClick={() => handleImage("r")}
      />
    </div>
  );
}
