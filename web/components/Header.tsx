import Head from "next/head";
import Navbar from "./Navbar";
import styles from "../styles/Home.module.css";

type Props = {
  title: string;
  subtitle: string;
};

const Header: React.FC<Props> = (props) => {
  const { title, subtitle } = props;
  return (
    <>
      <Head>
        <title>Villajoyosa</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <header className={styles.header}>
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
        </header>
        <Navbar />
      </main>
    </>
  );
};

export default Header;
