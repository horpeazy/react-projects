import React from 'react';

const List = (props) => {
  const {name, age, image} = props.person;
  return (
    <>
      <article className='person'>
        <img src={image} alt={name}></img>
        <div>
          <h4>{name}</h4>
          <p>{age} years</p>
        </div>
      </article>
    </>
  );
};

export default List;
