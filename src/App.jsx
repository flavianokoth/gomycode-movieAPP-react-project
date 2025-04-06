import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import MovieDescription from "./components/Moviedescription";

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "A mind-bending thriller by Christopher Nolan.",
      posterURL: "https://image.url/inception.jpg",
      rating: 8.8,
      trailerURL: "https://www.youtube.com/embed/YoHD9XEInc0"
    },
    {
      title: "Interstellar",
      description: "A space exploration movie.",
      posterURL: "https://image.url/interstellar.jpg",
      rating: 8.6,
      trailerURL: "https://www.youtube.com/embed/zSWdZVtXT7E"
    },
  ]);

  const [filteredMovies, setFilteredMovies] = useState(movies);

  const addMovie = () => {
    const newMovie = {
      title: prompt("Enter movie title:"),
      description: prompt("Enter movie description:"),
      posterURL: prompt("Enter poster URL:"),
      rating: parseFloat(prompt("Enter rating:")),
      trailerURL: prompt("Enter YouTube embed URL (e.g. https://www.youtube.com/embed/abc123):")
    };

    if (
      newMovie.title &&
      newMovie.description &&
      newMovie.posterURL &&
      !isNaN(newMovie.rating) &&
      newMovie.trailerURL
    ) {
      setMovies([...movies, newMovie]);
      setFilteredMovies([...movies, newMovie]);
    } else {
      alert("Invalid input. Please try again.");
    }
  };

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
      <Routes>
        <Route
          path="/"
          element={
            <>
              <h1>🎬 Movie App</h1>
              <Filter onFilter={filterMovies} />
              <button onClick={addMovie}>➕ Add Movie</button>
              <MovieList movies={filteredMovies} />
            </>
          }
        />
        <Route
          path="/description/:title"
          element={<MovieDescription movies={movies} />}
        />
      </Routes>
    </div>
  );
};

export default App;
