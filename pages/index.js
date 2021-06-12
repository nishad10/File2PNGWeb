import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>File2PNG</title>
        <meta name="description" content="Convert any file to image" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Convert a File to Image!
        </h1>

        <p className={styles.description}>
          Get started by uploading a file
        </p>

      </main>

      <footer className={styles.footer}>
        <span className={styles.logo}>
          <Image src="/favicon.ico" alt="" width={72} height={16} />
        </span>
          Nishad Aherrao
          <span className={styles.logo}>
          <Image src="/favicon.ico" alt="" width={72} height={16} />
        </span>
      </footer>
    </div >
  )
}
