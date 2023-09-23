import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, } from 'react-router-dom';
import Breadcrumb from '../components/breadcrumb';
import MovieDetails from '../components/movieDetails';
import Footer from '../components/footer';

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
  }, []);

  return (
    
    <div className='px-page px-movies'>
      <section className="px-section px-top">
        <div className="px-container">
          <div className="px-position px-top-a">
          <Breadcrumb text={'/Movies/Movie Details'}/>
          </div>
        </div>
      </section>
      <section className="px-section px-content">
        <div className="px-container">
          <div className="px-position px-content-a">
            <MovieDetails movie={movie}/>
          </div>
        </div>
      </section>
      <section className="px-section px-content px-footer">
        <div className="px-container">
          <div className="px-position px-content-a">
            <Footer/>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Movie;
