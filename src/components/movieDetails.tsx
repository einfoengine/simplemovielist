import React from 'react'
import { Link } from 'react-router-dom'
// vote_average
// vote_count
const MovieDetails = ({movie}) => {
  return (
    <div className="px-module px-mod-movie">
      {console.log("Movie ", movie)}
      <div className="px-mod-title">
        <h3>{movie?.title}</h3>
        <h5 className="px-id">ID: {movie?.id}</h5>
        <span className="px-status">{movie?.status}</span>
        <span className="px-tag-line">{movie?.tagline}</span>
        <div className="px-mov-info">
          <span className="px-date">Release date: {movie?.release_date}</span>
          <span className="px-date">Vote count: {movie?.vote_count}</span>
          <span className="px-date">Vote average: {movie?.vote_average}</span>
        </div>
      </div>
      <div className="px-mod-desc">
        <div className="px-mov-desc">{movie?.overview}</div>
        <Link to="/" className='px-btn'>Back to all movies</Link>
      </div>
    </div>
  )
}

export default MovieDetails