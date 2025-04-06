import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const Moviedescription = ({ movies }) => {
  const { title } = useParams();
  const navigate = useNavigate();
  const movie = movies.find((m) => m.title === title);

  if (!movie) return <p>Movie not found</p>;

  return (
    <div className="description-page">
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <div className="trailer">
        <iframe
          width="560"
          height="315"
          src={movie.trailerURL}
          title="Movie Trailer"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      <br />
      <button onClick={() => navigate("/")}>🔙 Back to Home</button>
    </div>
  );
};

export default Moviedescription;
