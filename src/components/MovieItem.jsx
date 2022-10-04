import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

const MovieItem = ({ id, title, description, director }) => {
  return (
    <>
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <Link to={`detail/${id}`} style={{ textDecoration: 'none', color: 'black' }}>
              <Card className="my-3" style={{ backgroundColor: 'rgb(248, 249, 250)' }}>
                <Card.Body>
                  <h1>{title}</h1>
                  <p>{description}</p>
                  <span>{director}</span>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MovieItem;
