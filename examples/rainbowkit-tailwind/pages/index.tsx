import type { NextPage } from 'next';
import Head from 'next/head';
import HomePage from '../components/HomePage';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>music nft inspect</title>
        <meta
          name="description"
          content="verify music nfts"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomePage />
    </div>
  );
};

export default Home;
