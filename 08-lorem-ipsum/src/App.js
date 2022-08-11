import React, { useState } from 'react';
import data from './data';
function App() {
  const [textAmount, setTextAmount] = useState(0);
  const paragraphs = data.slice(0,textAmount);

  const getTexts = () => {
    let amount = document.getElementById('amount').value;
    if (amount > 8) {
      amount = 8;
    }
    if (amount >= 0) {
      setTextAmount(amount);
    }
  }

  return (
    <section className='section-center'>
      <h3>tired of boring lorem ipsum?</h3>
      <form className='lorem-form'>
        <div>
          <label htmlFor='amount'>Paragraphs: </label>
          <input type='number' id='amount' placeholder='0' />
        </div>
        <button type='button' className='btn' onClick={getTexts}>Generate</button>
      </form>
      <article className='lorem-text'>
        {paragraphs.map((paragraph) => {
          return <p>{paragraph}</p>
        })}
      </article>
    </section>
    )
}

export default App;
