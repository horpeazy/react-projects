import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [menus, setMenuItems] = useState(items);
  const getMenuItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  }

  return (
    <main>
      <section className='section menu'>
        <div className='title'>
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories getMenuItems={getMenuItems}></Categories>
        <div className='section-center'>
              {menus.map((menu) => {
                return (
                  <Menu key={menu.id} {...menu}/>
                )
              })}
        </div>
      </section>
    </main>
  )
}

export default App;
