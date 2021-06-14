import React, { useEffect, useState } from "react";
import "../Styles/results.css";
import VideoCard from "./VideoCard";
import instance from "../axios";
import FlipMove from "react-flip-move";

function Results({ selectedOption }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(selectedOption);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [selectedOption]);

  return (
    <div className="results__">
      <FlipMove>
        {movies.map((movie) => (
          <VideoCard key={movie.id} movie={movie} />
        ))}
      </FlipMove>
    </div>
  );
}

export default Results;
