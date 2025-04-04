import React, { useState } from "react";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "A mind-bending thriller by Christopher Nolan.",
      posterURL: "https://image.url/inception.jpg",
      rating: 8.8,
    },
    {
      title: "Interstellar",
      description: "A space exploration movie.",
      posterURL: "https://image.url/interstellar.jpg",
      rating: 8.6,
    },
  ]);

  const [filteredMovies, setFilteredMovies] = useState(movies);

  // Function to add a new movie
  const addMovie = () => {
    const newMovie = {
      title: prompt("Enter movie title:"),
      description: prompt("Enter movie description:"),
      posterURL: prompt("Enter poster URL:"),
      rating: parseFloat(prompt("Enter rating:")),
    };

    if (newMovie.title && newMovie.description && newMovie.posterURL && !isNaN(newMovie.rating)) {
      setMovies([...movies, newMovie]);
      setFilteredMovies([...movies, newMovie]);
    } else {
      alert("Invalid input. Please try again.");
    }
  };

  // Function to filter movies
  const filterMovies = (title, rating) => {
    let filtered = movies;
    if (title) {
      filtered = filtered.filter((movie) =>
        movie.title.toLowerCase().includes(title.toLowerCase())
      );
    }
    if (rating) {
      filtered = filtered.filter((movie) => movie.rating >= parseFloat(rating));
    }
    setFilteredMovies(filtered);
  };

  return (
    <div className="App">
      <h1>🎬 Movie App</h1>
      <Filter onFilter={filterMovies} />
      <button onClick={addMovie}>➕ Add Movie</button>
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;
