import './App.css';
import MovieList from './component/MovieList';
import Search from './component/AddMovie';
import { MoviesData } from './data';
import { useState } from 'react';
import Card from './component/CardSearch';


function App() {
const [movies,setMovies]=useState(MoviesData)
const[input,setInput]=useState('')
const[ratingg,setRatingg]=useState(0)

const addHandler=(newMovie)=>{
  setMovies([...movies,newMovie])
}

  return (
    <div>
      <div><Card setInput={setInput} setRatingg={setRatingg}/></div>
      <div><Search addHandler={addHandler}/> </div>
    <div className="App">
      <MovieList movies={movies} input={input}  ratingg={ratingg} className='cards'/>
    </div>
    </div>
  );
}

export default App;
