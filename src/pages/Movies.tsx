import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Movies from '../components/movies'; 
import Breadcrumb from '../components/breadcrumb';
import Footer from '../components/footer';


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
    const getData = async () => {
      const data = await fetchData();
      setMovies(data);
    }
    getData();
  }, []);

  if(movies){
    return (
      <div className='px-page px-movies'>
        <section className="px-section px-top">
          <div className="px-container">
            <div className="px-position px-top-a">
              <Breadcrumb text={'/Movies'}/>
            </div>
          </div>
        </section>
        <section className="px-section px-content">
          <div className="px-container">
            <div className="px-position px-content-a">
              <Movies movies={movies} />
            </div>
          </div>
        </section>
        <section className="px-section px-content">
          <div className="px-container">
            <div className="px-position px-content-a">
              <Footer/>
            </div>
          </div>
        </section>
      </div>
    )
  }
};

export default MoviesContainer;
