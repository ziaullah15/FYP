import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';
import './about.css';

function About() {
  return (
    <>

<Container>
      <Row>
        <Col md={6}>
          <Image src="https://via.placeholder.com/300" rounded />
        </Col>
        <Col md={6}>
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis sapien
            nec quam dignissim vestibulum sit amet at libero. Donec ultrices porttitor
            augue, a lacinia metus pharetra vel.
          </p>
          <p>
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
            Curae; Fusce commodo mauris at sapien dignissim consequat. Mauris commodo sapien
            ut metus varius, eget pharetra nunc commodo. Quisque tincidunt velit enim, ac
            commodo ante mattis vel.
          </p>
        </Col>
      </Row>
    </Container>
     
    </>
  )
}

export default About