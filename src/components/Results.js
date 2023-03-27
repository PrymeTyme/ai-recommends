import React from 'react'
import ResultsCSS from './ResultsCSS.module.css'
import { useState, useEffect } from 'react'
import { useCategoryContext } from '../Context'
import Card from './Card';
//import Movies from '~/server/movies.json'


//// put results in serachbar comp and use serachbar state to trigger reesult useefect

function Results({ isResult, setIsResult }) {
  const { catData, setCatData } = useCategoryContext()
  const [data, setData] = useState([]);


  useEffect(() => {
    async function fetchData() {
     const response = await fetch('http://localhost:5000/');
     const fetchedData = await response.json();

      setData(fetchedData)
    }
    if (isResult) {
      console.log('result' + isResult)
      fetchData();
      setIsResult(false)
    }

  }, [isResult]);


  const results = data
  const movies = catData.category === 'Movies'

  //const resultsList = results.map((results, index) => <div key={index} className={ResultsCSS.card}><h4 style={{ marginBottom: 0 }}><b>{results.Title} </b></h4><img src={results.Poster} style={{ height: 150, width: 150, marginTop: 0 }}></img></div>) // chaneg from inlie style to css module
  if (catData.category == 'Movies' && !isResult) {
    var movieList = results.map((results, index) => <Card key={index} img={results.Poster} title={results.Title} description={results.Plot} rating={results.imdbRating} year={results.Year} genre={results.Genre} director={results.Director} actors={results.Actors} />)
  } if (catData.category == 'Books' && !isResult) {
    var bookList = results.map((results, index) => <Card key={index} img={`http://covers.openlibrary.org/b/isbn/${results?.docs?.[0].isbn?.[3]}-M.jpg`} title={results?.docs?.[0].title} description={results.Plot} year={results?.docs?.[0].first_publish_year} genre={results?.docs?.[0].subject?.[0]} director={results?.docs?.[0].author_name} />)
  }
  return (
    <div className={ResultsCSS.wrapper}>
      <div className={ResultsCSS.container}>
        {movies ? movieList : bookList}
      </div>
    </div>
  )
}

export default Results
