import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  let [people, clear] = useState(data);
  const clearAll = () => {
	clear([]);
  }
  return(
  	    <React.Fragment>
		<main>
			<div className='container'>
				<h3>{people.length} birthdays today</h3>
				{people.map((person) => {
					return(
						<List key={person.id} person={person}></List>
					)
				})}
				<button onClick={clearAll}>Clear All</button>
			</div>
		</main>
  		</React.Fragment>
  	);
}

export default App;
