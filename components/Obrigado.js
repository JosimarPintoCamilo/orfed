import styles from './styles/obrigado.module.css';

export default function Obrigado(){
    return(
        <div className={styles.container}>
            <h1>Obrigado! 🎉 Sua contribuição foi registrada com sucesso.</h1>
            <h2>Quando nosso app ficar pronto te avisaremos por e-mail.</h2>
        </div>
    );
}