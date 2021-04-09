import Head from 'next/head';
import styles from '../styles/inscricao.module.css';
import Subscribe from '../components/Subscribe';
import Pixel from "../components/PixelFacebook"

function Inscricao() {
    return (
        <div className={styles.container}>
            <Pixel Eventos={["ViewContent"]} />
            <Head>
                <title>Ajude</title>
                <link rel="icon" href="/favicon.ico" />
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <h1>Ajude a construir o melhor app para organizar seu dinheiro</h1>
            <p>Olá,</p>

            <p>Estamos MUITO perto de concluir nosso tão aguardado <b>aplicativo de Finanças Pessoais.</b></p>

            <p>Estamos trabalhando nisso a alguns meses e iremos, enfim, finalizá-lo. Vamos lança-lo no início de Junho.</p>

            <p>Esse aplicativo será inteiramente focado em Organizar suas Finanças de forma simples e que você se sinta Feliz fazendo isso. Nele você vai conseguir organizar seu dinheiro de uma forma que faz sentido para você.</p>
            
            <p>Também vamos ter aulas onde vamos abordar as estratégias que utilizamos para organizar nosso dinheiro com felicidade e disciplina, e vamos lhe mostrar exatamente como fazer isso.</p>

            <p>NO ENTANTO, precisamos de sua ajuda. Antes de finalizar tudo e publicar nosso aplicativo, precisamos nos certificar de que contemplamos todos os pontos.</p>

            <p><b>É aí que você entra.</b> Por favor, dedique alguns minutos para responder a essa pequena pesquisa. Há apenas uma única coisa que queremos saber...</p>

            <Subscribe />
        </div>
    )
}

export default Inscricao