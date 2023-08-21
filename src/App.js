import React, { useState } from "react";
import Header from "./Components/Header";
import Search from "./Components/Search";
import MovieCard from "./Components/MovieCard";

function App() {
  const [movies, setMovies] = useState([]);
  const [inputVal, setInputVal] = useState("");

  const fetchOnClick = () => {
    fetch(`https://api.tvmaze.com/search/shows?q=${inputVal}`)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data);
        console.log(data);
      })
  };

  const handleOnChange = (e) => {
    setInputVal(e.target.value);
  };

  return (
    <div className="App">
      <Header />
      <div className="main">
        <Search fetchOnClick={fetchOnClick} handleOnChange={handleOnChange} />
        <div className="movies-section">
          {movies.map((movie) => (
            <MovieCard movie={movie}   key={movie.show.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;