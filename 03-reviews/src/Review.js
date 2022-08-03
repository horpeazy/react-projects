import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const person = people[index];
  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  const getNext = () => {
    setIndex((preVal) => {
      let newIndex = preVal + 1
      return checkNumber(newIndex);
    });
  }

  const getPrev = () => {
    setIndex((preVal) => {
      let newIndex = preVal - 1;
      return checkNumber(newIndex);
    });
  }

  const getRand = () => {
    let x = Math.floor(Math.random() * people.length);
    if (x === index ){
      x = index + 1;
    }
    setIndex(checkNumber(x));
  }

  return (
    <main>
      <div className='container'>
        <h2 className='title'>Our Reviews</h2>
        <section className='review'>
          <div className='img-container'>
            <img src={person.image} alt={person.name} className='person-img'></img>
            <span className='quote-icon'>
              <FaQuoteRight></FaQuoteRight>
            </span>
          </div>
          <h4 className='author'>{person.name}</h4>
          <p className='job'>{person.job}</p>
          <p className='info'>
            {person.text}
          </p>
          <div>
            <button className='prev-btn' onClick={getPrev}>
              <FaChevronLeft />
            </button>
            <button className='next-btn' onClick={getNext}>
              <FaChevronRight />
            </button>
          </div>
          <button className='random-btn' onClick={getRand}>suprise me</button>
        </section>
      </div>
    </main>
  )
};

export default Review;
