import { Footer, Header, Title, Upload } from '../components'
import styles from '../styles/Home.module.css'
import Head from 'next/head'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
      <Header />
      </Head>

      <main className={styles.main}>
        <Title />
        <Upload />
      </main>

      <footer className={styles.footer}>
      <Footer/>
      </footer>
    </div >
  )
}
