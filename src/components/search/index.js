import { useState, useEffect } from 'react';
import './index.css';

function SearchBar() {
  const [query, setQuery] = useState('');
  const [movieData, setMovieData] = useState(null);
  const apiKey = '7fc669a1';
  const [latestMovies, setLatestMovies] = useState([]);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const url = `http://www.omdbapi.com/?apikey=${apiKey}&t=${encodeURIComponent(query)}`;

    fetch(url)
    .then(response => response.json())
    .then(data => setMovieData(data))
    .catch(error => console.error(error));
    console.log(movieData)
  console.log(`Searching for ${query}...`);
};

useEffect(() => {

  const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=new&type=movie`;

  fetch(url)
    .then(response => response.json())
    .then(data => setLatestMovies(data.Search))
    .catch(error => console.error(error));
}, []);

return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search movie..."
          value={query}
          onChange={handleInputChange}
        />
        <button type="submit">Search</button>
      </form>
      {movieData && (
      <div className="search-results">
      <h2>{movieData.Title}</h2>
      <img src={movieData.Poster} alt={movieData.Title}/>
      <p>{movieData.Plot}</p>
    </div>
      )}

      <div className="latest-movies">
        {latestMovies.map(movie => (
          <div className="movie-tile" key={movie.imdbID}>
            <img src={movie.Poster} alt={movie.Title} />
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchBar;