import React from 'react';

const Menu = ({title, desc, price, img}) => {
  return (
      <div className='menu-item'>
        <img src={img} alt={title} className='photo'></img>
        <div className='item-info'>
          <header>
            <h4>{title}</h4>
            <p className='price'>{price}</p>
          </header>
          <p className='item-text'>{desc}</p>
        </div>
      </div>
  )
};

export default Menu;
