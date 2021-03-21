import React, { useRef, useState } from 'react';

export default function Subscribe() {
  // 1. Create a reference to the input so we can fetch/clear it's value.
  const inputEmail = useRef(null);
  const inputCampo1 = useRef(null);
  const inputCampo2 = useRef(null);
  // 2. Hold a message in state to handle the response from our API.
  const [message, setMessage] = useState('');

  const subscribe = async (e) => {
    e.preventDefault();

    // 3. Send a request to our API with the user's email address.
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
      // 4. If there was an error, update the message in state.
      setMessage("Deu alguma coisa errada. Verifique seu e-mail.");

      return;
    }

    // 5. Clear the input value and show a success message.
    inputEmail.current.value = '';
    inputCampo1.current.value = '';
    inputCampo2.current.value = '';
    setMessage('Obrigado! 🎉 Sua contribuição foi registrada com sucesso.');
  };

  return (
    <form onSubmit={subscribe}>  
      
      <h3>
        Quais são as duas coisas mais importantes para você sobre Seu Dinheiro que temos NECESSIDADE absoluta de ter em nosso aplicativo?
      </h3>   
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
      <button type="submit">{'💌 Enviar '}</button>

    </form>
  );
}