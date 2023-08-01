import Head from "next/head";
import styles from "../styles/Home.module.css";
import Slider from "../components/Slider";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title> Neat City</title>
        <meta name="description" content="Online Clothes shop" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
      </Head>
      <main className={styles.main}>
        <Slider />
      </main>
    </div>
  );
}
