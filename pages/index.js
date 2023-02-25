import Head from "next/head";
import styles from "../styles/Home.module.css";
import Slider from "../components/Slider";

export default function Home() {
  return (
    <>
      <Head>
        <title> Next App</title>
        <meta name="description" content="Online Clothes shop" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Slider />
      </main>
    </>
  );
}
