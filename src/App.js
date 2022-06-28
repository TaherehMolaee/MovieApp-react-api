import {useEffect, useState} from 'react';
//33a001a7
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';
const API_URL = 'http://www.omdbapi.com?apikey=33a001a7';

const movie1 =
  {
    "Title": "Italian Spiderman",
    "Year": "2007",
    "imdbID": "tt2705436",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYjFhN2RjZTctMzA2Ni00NzE2LWJmYjMtNDAyYTllOTkyMmY3XkEyXkFqcGdeQXVyNTA0OTU0OTQ@._V1_SX300.jpg"
}

const App = () =>{

  const [movies,setMovies]=useState();
  const [searchTerm, setSearchTerm]=useState('');
  const searchMovie = async(title)=>{
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  }
  useEffect(()=>{
    searchMovie('child');
  },
  []);
  return(
    <div className='app'>
      <h1>MovieLand</h1>
      <div className='search'>
        <input
          placeholder='Search for movies'
          value={searchTerm}
          onChange={(e)=>setSearchTerm(e.target.value)}
          />
          <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovie(searchTerm)}
          />
      </div>
      {
        movies?.length>0
        ?(
          <div className='container'>
        {movies.map((movie)=>(
          <MovieCard movie={movie}/>
        ))}
      </div>
        ):
        (
          <div className='empty'>
            <h2>No movies found</h2>
          </div>
        )

      }
    </div>
  );
}


export default App;

