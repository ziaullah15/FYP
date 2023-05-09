import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./about.css";

function About() {
  return (
    <>
      <Container>
        <Row>
          <Col md={6}>
            <Image src="https://www.agiratech.com/wp-content/uploads/2022/02/Design-and-Development-of-the-NFT-Marketplace-300x300.png" rounded />
          </Col>
          <Col md={6}>
            <h2>About Us</h2>
            <p>
              Zia, Yousaf, and their team have created a blockchain-based NFT
              marketplace. It allows buying, selling, and trading of unique
              digital assets. NFTs are secured with blockchain technology.
              Creators can monetize their work, and buyers can be sure of
              authenticity. The platform is secure and transparent. It provides
              a trusted space for NFT transactions. The marketplace caters to
              the growing NFT enthusiast community.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default About;
