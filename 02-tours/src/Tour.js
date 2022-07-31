import React, { useState } from 'react';

const Tour = ({tour , removeTour}) => {
  const {id,name, image, price, info} = tour
  const [showInfo, setInfo] = useState(false)
    return (
      <article className='single-tour'>
        <img src={image} alt={name}></img>
        <footer>
          <div className='tour-info'>
            <h4>{name}</h4>
            <h4 className='tour-price'>${price}</h4>
          </div>
          <p>
            {showInfo ? info : `${info.substring(0,200)}...`}
            <button onClick={() => setInfo(!showInfo)}>
                {showInfo ? 'show less': '  read more'}
            </button>
          </p>
          <button className='delete-btn' onClick={() => removeTour(id)}>not interested</button>
        </footer>
      </article>
    );
};

export default Tour;
