import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <Container>
        <h2 className="text-center">Contact Me!!!</h2>
        <Row>
          <Col xs={12} lg={12}>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" name="name" placeholder="Your Name" />
              </Form.Group>
            </Form>
          </Col>
          <Col xs={12} lg={6}>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Your Email"
                />
              </Form.Group>
            </Form>
          </Col>
          <Col xs={12} lg={6}>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Your Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Password"
                />
              </Form.Group>
            </Form>
          </Col>
          <Col lg={12}>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
