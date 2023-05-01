import React from 'react'
// import { Container, Row, Col, Card } from 'react-bootstrap';
import './news.css';
import CollectionApi from "../../components/OpenSeaApi/CollectionApi"

function News() {
  return (
      <>
      <div className='container margin_top'>
      <CollectionApi></CollectionApi>

      </div>


          {/* <Container className="News margin_top">
      <h2>Latest News</h2>
      <Row>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/300" />
            <Card.Body>
              <Card.Title>Headline 1</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis sapien
                nec quam dignissim vestibulum sit amet at libero.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/300" />
            <Card.Body>
              <Card.Title>Headline 2</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis sapien
                nec quam dignissim vestibulum sit amet at libero.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/300" />
            <Card.Body>
              <Card.Title>Headline 3</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis sapien
                nec quam dignissim vestibulum sit amet at libero.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container> */}
      </>
  )
}

export default News