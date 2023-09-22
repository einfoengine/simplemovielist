import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Movie: React.FC = () => {
  const [movie, setMovie] = useState();
  const { id } = useParams();

  useEffect(() => {
    const getMovie = async () => {
      try {
        const { data } = await axios.get(`/api/movies/${id}`);
        setMovie(data);
      } catch (error) {
        console.log('Movie not found');
      }
    };

    getMovie();
  }, [id]);

  return (
    <div className="px-page">
      {console.log("Movie ", movie)}
      <div className="px-top">
        <h2 className="px-page-title">Movie Details</h2>
      </div>
      <div className="px-preview">
        <span className="px-status">{movie?.status}</span>
      </div>
      <div className="px-mov-name">
        <span className="px-tag-line">{movie?.tagline}</span>
        <h3 className="px-mov-title">{movie?.title}</h3>
        <span className="px-id">{movie?.id}</span>
      </div>
      <div className="px-mov-desc">{movie?.overview}</div>
    </div>
  );
};

export default Movie;
