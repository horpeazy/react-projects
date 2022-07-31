import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'

const url = 'https://course-api.com/react-tours-project'

function App() {
  const [isLoading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);
  const [isError, setError] = useState(false);

  const getTours = async () => {
    // get all the tours asynchronously 
    setLoading(true)
    fetch(url)
      .then((resp) => {
        if (resp.status >= 200 && resp.status <= 299) {
          return(resp.json());
        } else  {
          setLoading(false);
          setError(true);
          throw new Error(resp.statusText);
        }
      })
      .then((res) => {
        setLoading(false);
        setError(false);
        setTours(res);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      })
  }

  const removeTour = (id) => {
    // remove a tour from the list 
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }

  useEffect(() => {
    getTours();
    // eslint-disable-next-line
  },[])
  
  if (isLoading) {
    return  (
      <main>
        <Loading />
      </main>
    )
  } 
  if (isError) {
    return (
      <main>
        <div className='title'>
          <h2>Error while fetching data..</h2>
          <button className='btn' onClick={getTours}>refresh</button>
        </div>
      </main>
    )
  }
  if (tours.length === 0) {
    return(
      <main>
        <div className='title'>
          <h2>no tours left</h2>
          <button className='btn' onClick={getTours}>refresh</button>
        </div>
      </main>
    )
  }
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour}/>
    </main>
  )
}

export default App
