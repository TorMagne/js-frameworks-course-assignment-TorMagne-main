import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import { schemaContact } from '../validations/formValidations';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schemaContact) });

  const onSubmit = () => {
    reset();
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Card style={{ backgroundColor: 'rgb(248, 249, 250)' }}>
            <Card.Body>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="firstname">
                  <Form.Label>First name</Form.Label>
                  <Form.Control {...register('firstName')} type="text" placeholder="First Name" />
                  {errors.firstName && <span style={{ color: 'red' }}>{errors.firstName.message}</span>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="lastname">
                  <Form.Label>Last name</Form.Label>
                  <Form.Control {...register('lastName')} type="text" placeholder="Last name" />
                  {errors.lastName && <span style={{ color: 'red' }}>{errors.lastName.message}</span>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control {...register('email')} type="text" placeholder="Email" />
                  {errors.email && <span style={{ color: 'red' }}>{errors.email.message}</span>}
                </Form.Group>
                <fieldset>
                  <Form.Group className="mb-3">
                    <Form.Label>Select a subject</Form.Label>
                    <Form.Select>
                      <option>Subject one</option>
                      <option>Subject two</option>
                    </Form.Select>
                  </Form.Group>
                  {errors.subject && <span style={{ color: 'red' }}>{errors.subject.message}</span>}
                </fieldset>
                <Form.Group className="mb-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control {...register('message')} as="textarea" rows={3} placeholder="Message" />
                  {errors.message && <span style={{ color: 'red' }}>{errors.message.message}</span>}
                </Form.Group>
                <Button variant="primary" type="submit">
                  Send
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactForm;
