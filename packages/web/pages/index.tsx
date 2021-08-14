import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>WineFinder</title>
        <meta name="description" content="Find your next favorite wine" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          WineFinder
        </h1>

        <p className={styles.description}>
          I like wine with notes of...
        </p>

        <input />

        <button>
          Search
        </button>

        <button>
          Randomize
        </button>
      </main>
    </div>
  )
}

export default Home
