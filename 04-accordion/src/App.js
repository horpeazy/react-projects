import React from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  return (
    <main>
      <section className='container'>
      <h3>Questions And Answers About Login</h3>
      <div>
        {data.map((question) => {
          return <SingleQuestion key={question.id} question={question}></SingleQuestion>
        })}
      </div>
      </section>
    </main>
  )
}

export default App;
