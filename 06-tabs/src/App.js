import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'

const url = 'https://course-api.com/react-tabs-project'
function App() {
  const [jobs, setJobs] = useState([]);
  const [order, setOrder] = useState(3);
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);

  const loadData = async () => {
    setLoading(true);
    fetch(url)
      .then((response) => {
        if (response.status >= 200 && response.status <= 299) {
          return (response.json());
        } else {
          setError(true);
          setLoading(false);
          throw new Error(response.statusText);
        }
      })
      .then((result) => {
        setJobs(result);
        setLoading(false);
        setError(false);
      })
      .catch((error) => {
        console.log('Error')
        setError(true);
        setLoading(false);
      })
  }

  const getJob = (order) => {
    const jobList = jobs.filter((job) => job.order === order);
    return jobList[0];
  }

  useEffect(() => {
    loadData();
  },[])

  let job = getJob(order);
  if (isLoading) {
    return (
      <main className='section'>
        <h1 className='loading'>loading...</h1>
      </main>
    )
  }
  if (isError) {
    return (
      <main className='section'>
          <h2 className='loading'>Could not load page</h2>
          <button className='btn' onClick={loadData}>refresh</button>
      </main>
    )
  }
  return (
    <main className='section'>
      <div className='title'>
        <h2>experience</h2>
        <div className='underline'></div>
      </div>
      <div className='jobs-center'>
        <div className='btn-container'>
          {jobs.map((job) => {
            return (
              <button key={job.id} className={`job-btn ${job.order === order && 'active-btn'}`} 
                onClick={() => setOrder(job.order)}>
                {job.company}
              </button>
            )
          })}
        </div>
        <article className='job-info'>
          <h3>{job.title}</h3>
          <h4>{job.company}</h4>
          <p className='job-date'>{job.dates}</p>
          {job.duties.map((duty, index) => {
            return (
                <div className='job-desc' key={index}>
                    <FaAngleDoubleRight />
                    <p>{duty}</p>
                </div>
            )
          })}
        </article>
      </div>
      <button type='button' className='btn'>more info</button>
    </main>
  )
}

export default App
