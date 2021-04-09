import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Pixel from "../components/PixelFacebook"

export default function Home() {
  return (
    <div className={styles.container}>
      <Pixel Eventos={["ViewContent"]} />
      <Head>
        <title>Orfed</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="facebook-domain-verification" content="weawvzvamw10q3k6acxcc9u6ldamhi" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
         Bem vindo a ORFED.COM.BR
        </h1>
      </main>
        
    </div>
  )
}
