import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import img from "../public/nolimixlogo.png";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>
          Nolimix Agency - Your reliable software development partner
        </title>
        <meta
          name="description"
          content="Crafting premium digital solutions! - Mobile and Web Software development | Product Design | Seo services"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:image" content={img.src} />
      </Head>

      <main className={styles.main}>
        <div className={styles.logo}>
          <Image
            src="/logobeli.svg"
            alt="Nolimix agency logo"
            width={451.5}
            height={240}
          />
        </div>
        <h1 className={styles.title}>
          Nolimix Agency - Your reliable software development partner
        </h1>
        <a
          className={styles.link}
          href="mailto:nolimixagency@gmail.com?subject=Contact us - Nolimix Agency"
        >
          Contact us on email - nolimixagency@gmail.com
        </a>
        <p className={styles.text}>or</p>
        <a
          href="https://www.linkedin.com/in/mihajlodev/"
          target="_blank"
          rel="noreferrer"
        >
          <button className={styles.button}>Find us on LinkedIn!</button>
        </a>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.linkedin.com/in/mihajlodev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Nolimix Agency
        </a>
      </footer>
    </div>
  );
};

export default Home;
