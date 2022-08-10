import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {
  const [index, setIndex] = useState(0);

  const getNext = () => {
    setIndex((preVal) => {
      if (preVal === (data.length - 1)) {
        return 0
      } else {
        return preVal + 1;
      }
    })
  }

  const getPrev = () => {
    setIndex((preVal) => {
      if (preVal === 0) {
        return (data.length - 1)
      } else {
        return preVal - 1;
      }
    })
  }

  useEffect(() => {
    let slider = setInterval(getNext, 5000);
    return () => {
      clearInterval(slider);
    }
  },[index])


  return (
    <section className='section'>
      <div className='title'>
        <h2>
          <span>/</span>
          reviews
        </h2>
      </div>
      <div className='section-center'>
        {data.map((person, personIndex) => {
          let position = 'nextSlide';

          if (index === personIndex) {
            position = 'activeSlide';
          } 
          else if (personIndex === index - 1 || 
            (index === 0 && personIndex === data.length - 1)) {
              position = 'lastSlide';
            }

          return (
            <article key={person.id} className={position}>
            <img src={person.image} alt={person.name} className='person-img'></img>
            <h4>{person.name}</h4>
            <p className='title'>{person.title}</p>
            <p className='text'>{person.quote}</p>
            <FaQuoteRight className='icon' />
          </article>
          )
        })}
        <button className='prev ' onClick={getPrev}>
          <FiChevronLeft />
        </button>
        <button className='next' onClick={getNext}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  )
}

export default App;
