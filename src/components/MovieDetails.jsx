import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { BASE_URL, MOVIE_PATH } from '../constants/api';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let history = useNavigate();

  const { id } = useParams();

  if (!id) {
    history('/');
  }

  const url = BASE_URL + MOVIE_PATH + '/' + id;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setMovie(response.data.data);
      } catch (error) {
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>An error occured: {error}</div>;
  }
  return (
    <>
      <Container>
        <h1>{movie.attributes.title}</h1>
        <p>
          <span style={{ fontWeight: 'bold' }}>Description: </span>
          {movie.attributes.description}
        </p>
        <p>
          <span style={{ fontWeight: 'bold' }}>Director: </span>
          {movie.attributes.director}
        </p>
      </Container>
    </>
  );
};

export default MovieDetails;
