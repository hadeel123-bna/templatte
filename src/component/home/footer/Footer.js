// src/footer/Footer.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={4} className="footer-section">
            <h5>About Us</h5>
            <p>Some information about the company or website.</p>
          </Col>
          <Col md={4} className="footer-section">
            <h5>Contact</h5>
            <ul>
              <li>Email: <a href="mailto:contact@example.com">contact@example.com</a></li>
              <li>Phone: +123 456 7890</li>
            </ul>
          </Col>
          <Col md={4} className="footer-section">
            <h5>Follow Us</h5>
            <ul className="social-links">
              <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
