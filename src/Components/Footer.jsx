import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer className="bg-dark text-white py-5 text-center">
      <Container>
        <Row>
          <Col md={4}>
            <h5>PRODUCTS</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#">Angular</a>
              </li>
              <li>
                <a href="#">React</a>
              </li>
              <li>
                <a href="#">Vue</a>
              </li>
              <li>
                <a href="#">Laravel</a>
              </li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>USEFUL LINKS</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Settings</a>
              </li>
              <li>
                <a href="#">Orders</a>
              </li>
              <li>
                <a href="#">Help</a>
              </li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>CONTACT</h5>
            <p>New York, NY 10012, US</p>
            <p>info@example.com</p>
            <p>+ 01 234 567 88</p>
            <p>+ 01 234 567 89</p>
          </Col>
        </Row>
      </Container>
      <div className="text-center py-3">
        <p>© {new Date().getFullYear()} Copyright: MDBootstrap.com</p>
      </div>
    </footer>
  );
}
export default Footer;
