import { useState } from 'react';

function SearchBar() {
  const [query, setQuery] = useState('');
  const apiKey = '7fc669a1';

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const url = `http://www.omdbapi.com/?apikey=${apiKey}&t=${encodeURIComponent(query)}`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      const movieTitle = data.Title;
      const moviePoster = data.Poster;
      const movieYear = data.Year;
      const moviePlot = data.Plot;
      const movieTitleEl = document.getElementById('movie-title');
      const moviePosterEl = document.getElementById('movie-poster');
      const movieYearE1 = document.getElementById('movie-year');
      const moviePlotE1 = document.getElementById('movie-plot')
      movieTitleEl.textContent = movieTitle;
      movieYearE1.textContent = movieYear;
      moviePosterEl.setAttribute('src', moviePoster);
      moviePlotE1.textContent = moviePlot;
    })
    .catch(error => console.error(error));
  console.log(`Searching for ${query}...`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search movie..."
        value={query}
        onChange={handleInputChange}
      />
      <button type="submit">Search</button>
    </form>
    
  );
}

export default SearchBar