import { useState, useEffect } from 'react';
import { BASE_URL, MOVIE_PATH } from '../constants/api';
import axios from 'axios';
import MovieItem from './MovieItem';

const url = BASE_URL + MOVIE_PATH;

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setMovies(response.data.data);
      } catch (error) {
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // console.log(details);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>An error occured: {error}</div>;
  }

  return (
    <>
      <div>
        {movies.map((movie) => {
          return <MovieItem key={movie.id} title={movie.attributes.title} description={movie.attributes.description} id={movie.id} director={movie.attributes.director} />;
        })}
      </div>
    </>
  );
};

export default MovieList;
