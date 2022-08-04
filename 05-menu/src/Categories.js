import React from 'react';

const Categories = ({getMenuItems}) => {
  return (
    <section className='btn-container'>
      <button type="button" className='filter-btn' onClick={() => getMenuItems('all')}>All</button>
      <button type="button" className='filter-btn' onClick={() => getMenuItems('breakfast')}>Breakfast</button>
      <button type="button" className='filter-btn' onClick={() => getMenuItems('lunch')}>Lunch</button>
      <button type="button" className='filter-btn' onClick={() => getMenuItems('shakes')}>Shakes</button>
    </section>
  )
};

export default Categories;
