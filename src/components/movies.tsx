import React from 'react'
import { Link } from 'react-router-dom';

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
      <div className="px-module px-movies">
        <table className="px-table">
          <thead className="px-table-head">
            <tr className="px-table-row">
              <th>Title</th>
              <th>Tagline</th>
              <th>Vote Average</th>
            </tr>
          </thead>
          <tbody className="px-table-body">
            {movies.map(movie => (
              <tr key={movie.id} className="px-table-row">
                <Link to={`/movies/${movie.id}`}><td className="px-table-doc">{movie.title}</td></Link>
                <td className="px-table-doc">{movie.tagline}</td>
                <td className="px-table-doc">{movie.vote_average}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }


export default Movies