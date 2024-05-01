import React from 'react';
import { Container, Row, Col, Navbar, Nav, Button, Form} from 'react-bootstrap';

function MyComponent() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#">Navbar</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">About</Nav.Link>
              <Nav.Link href="#">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="my-5">
        <Row>
          <Col xs={12} md={3}>
            <div className="bg-light p-4 rounded shadow">
              <h2 className="text-center mb-4">Container 1</h2>
              <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget ex ac lacus lacinia mollis.</p>
              <Button variant="primary" className="d-block mx-auto mt-3">Button 1</Button>
            </div>
          </Col>
          <Col xs={12} md={3}>
            <div className="bg-light p-4 rounded shadow">
              <h2 className="text-center mb-4">Container 2</h2>
              <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget ex ac lacus lacinia mollis.</p>
              <Button variant="primary" className="d-block mx-auto mt-3">Button 2</Button>
            </div>
          </Col>
          <Col xs={12} md={3}>
            <div className="bg-light p-4 rounded shadow">
              <h2 className="text-center mb-4">Container 3</h2>
              <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget ex ac lacus lacinia mollis.</p>
              <Button variant="primary" className="d-block mx-auto mt-3">Button 3</Button>
            </div>
          </Col>

          <Col xs={12} md={3}>
            <div className="bg-light p-4 rounded shadow">
              <h2 className="text-center mb-4">Container 4</h2>
              <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget ex ac lacus lacinia mollis.</p>
              <Button variant="primary" className="d-block mx-auto mt-3">Button 3</Button>
            </div>
          </Col>
        </Row>
      </Container>

      <div className="background-image">
        <Container className="py-5">
          <Row className="justify-content-center">
            <Col xs={10} sm={8} md={6} lg={4}>
              <Form>
                <Form.Group controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>

                <Form.Group controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>

                <Form.Group controlId="formMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default MyComponent;
