import React, { useRef, useState } from 'react';

export default function Subscribe() {
  // 1. Create a reference to the input so we can fetch/clear it's value.
  const inputEl = useRef(null);
  // 2. Hold a message in state to handle the response from our API.
  const [message, setMessage] = useState('');

  const subscribe = async (e) => {
    e.preventDefault();

    // 3. Send a request to our API with the user's email address.
    const res = await fetch('/api/subscribe', {
      body: JSON.stringify({
        email: inputEl.current.value
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    });

    const { error } = await res.json();

    if (error) {
      // 4. If there was an error, update the message in state.
      setMessage(error);

      return;
    }

    // 5. Clear the input value and show a success message.
    inputEl.current.value = '';
    setMessage('Success! 🎉 You are now subscribed to the newsletter.');
  };

  return (
    <form onSubmit={subscribe}>   
      <h3>
        Quais são as duas coisas mais importantes para você sobre Seu Dinheiro que temos NECESSIDADE absoluta de ter em nosso aplicativo?
      </h3>   
      <input
        id="email-input"
        name="email"
        placeholder="you@awesome.com"
        ref={inputEl}
        required
        type="email"
      />
      <input
        id="pergunta1-input"
        name="MMERGE6"
        placeholder="Opinião 1"
        ref={inputEl}
        required
        type="text"
      />
      <input
        id="pergunta2-input"
        name="MMERGE2"
        placeholder="Opinião 2"
        ref={inputEl}
        required
        type="text"
      />
      <div>
        {
        message ? message : null
        }
      </div>
      <button type="submit">{'✨ Subscribe 💌'}</button>
    </form>
  );
}