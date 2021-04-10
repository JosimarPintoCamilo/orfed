import React, { useRef, useState } from 'react';
import Router from 'next/router';

export default function Subscribe() {
  const inputEmail = useRef(null);
  const inputCampo1 = useRef(null);
  const inputCampo2 = useRef(null);

  const [message, setMessage] = useState('');
  const [clicouEnviar, setClicouEnviar] = useState(false);

  const subscribe = async (e) => {
    e.preventDefault();
    setClicouEnviar(true);

    const res = await fetch('/api/subscribe', {
      body: JSON.stringify({
        email: inputEmail.current.value,
        MMERGE6: inputCampo1.current.value,
        MMERGE2: inputCampo2.current.value
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    });

    const { error } = await res.json();

    if (error) {
      setMessage("Deu alguma coisa errada. Verifique seu e-mail.");
      setClicouEnviar(false);

      return;
    }

    Router.push('/semente-obrigado');
  };

  return (
    <form onSubmit={subscribe}>        
      <p>
        Quais são as duas coisas mais importantes para você sobre Seu Dinheiro que temos NECESSIDADE absoluta de ter em nosso aplicativo?
      </p>   
      <input
        id="email-input"
        name="email"
        placeholder="Seu melhor e-mail"
        ref={inputEmail}
        required
        type="email"
      />
      <input
        id="pergunta1-input"
        name="MMERGE6"
        placeholder="Opinião 1"
        ref={inputCampo1}
        required
        type="text"
      />
      <input
        id="pergunta2-input"
        name="MMERGE2"
        placeholder="Opinião 2"
        ref={inputCampo2}
        type="text"
      />
      <strong>
        {
        message ? message : null
        }
      </strong>
      
      <button type="submit">{ clicouEnviar ? 'Enviando...' : '💌 Enviar '}</button>
      
    </form>    
  );
}