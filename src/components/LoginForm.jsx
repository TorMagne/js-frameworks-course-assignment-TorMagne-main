import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { BASE_URL, TOKEN_PATH } from '../constants/api';
import { schemaLogin } from '../validations/formValidations';
import { yupResolver } from '@hookform/resolvers/yup';
import AuthContext from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const url = BASE_URL + TOKEN_PATH;

const LoginForm = () => {
  const [loginError, setLoginError] = useState(null);

  let history = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaLogin),
    defaultValues: {
      identifier: '',
      password: '',
    },
  });

  const [auth, setAuth] = useContext(AuthContext);

  const onSubmit = async (data) => {
    setLoginError(null);
    try {
      const response = await axios.post(url, data);
      console.log('response', response.data);
      setAuth(response.data);
      history('/admin');
    } catch (error) {
      console.log('error', error);
      setLoginError('Wrong username or password');
    }
    reset();
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Card style={{ backgroundColor: 'rgb(248, 249, 250)' }}>
            <Card.Body>
              <Form onSubmit={handleSubmit(onSubmit)}>
                {loginError && <Alert variant="danger">{loginError}</Alert>}
                <Form.Group className="mb-3" controlId="username">
                  <Form.Label>Email</Form.Label>
                  <Form.Control {...register('identifier')} type="text" placeholder="email" />
                  {errors.identifier && <span style={{ color: 'red' }}>{errors.identifier.message}</span>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control {...register('password')} type="text" placeholder="password" />
                  {errors.password && <span style={{ color: 'red' }}>{errors.password.message}</span>}
                </Form.Group>
                <Button variant="primary" type="submit">
                  Sign in
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginForm;
