import React from 'react';
import Tour from './Tour';

const Tours = (props) => {
  const { tours, removeTour } = props
  return (
    <div>
      {tours.map((tour) => {
        return <Tour key={tour.id} tour={tour} removeTour={removeTour}></Tour>
      })}
    </div> 
  )
};

export default Tours;
