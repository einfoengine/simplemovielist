import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

interface MoviesProps {
  movies: {
    id: number;
    title: string;
    tagline: string;
    vote_average: number;
  }[];
}

const Movies: React.FC<MoviesProps> = ({ movies }) => {
  return (
    <div className="px-container px-movies">
      <header>
        <h2>Movie list page</h2>
      </header>
      
      <div className='px-content'>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Tagline</th>
              <th>Vote Average</th>
            </tr>
          </thead>
          <tbody>
            {movies.map(movie => (
              <tr key={movie.id}>
                <Link to={`/movies/${movie.id}`}><td>{movie.title}</td></Link>
                <td>{movie.tagline}</td>
                <td>{movie.vote_average}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const fetchData = async () => {
  try {
    const response = await axios.get("/api/movies");
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

const MoviesContainer: React.FC = () => {
  const [movies, setMovies] = useState<any[]>([]);

  useEffect(() => {
    async function getData() {
      const data = await fetchData();
      setMovies(data);
    }
    getData();
  }, []);

  return <Movies movies={movies} />;
};

export default MoviesContainer;
