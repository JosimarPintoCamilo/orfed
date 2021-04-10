import Head from 'next/head';
import Link from 'next/link'
import styles from '../styles/Home.module.css';
import Pixel from "../components/PixelFacebook"

export default function Home() {
  return (
    <div className={styles.container}>
      <Pixel Eventos={["PageView", "ViewContent"]} />
      <Head>
        <title>Orfed</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="facebook-domain-verification" content="weawvzvamw10q3k6acxcc9u6ldamhi" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
         Bem vindo a ORFED.COM.BR
        </h1>

        <h2>Ajude a construir o melhor aplicativo de finanças</h2>
        <p>
          Já li alguns livros sobre finanças pessoais, tentei organizar minhas finanças de várias formas. Usei alguns aplicativos e mesmo assim não ficava como eu queria.
        </p>

        <p>Então chamei um amigo para ajudar a desenvolver um aplicativo que damos o nome de Orfed, que é a junção de ORGANIZAÇÃO, FELIDADE e DISCIPLINA.</p>
        <p>Você pode nos ajudar respondendo a duas perguntinhas apenas, clicando no botão abaixo 😊 </p>

        <Link href="/inscricao">
          <button>Quero contrbuir com esse aplicativo</button>
        </Link>
        
      </main>
        
    </div>
  )
}
