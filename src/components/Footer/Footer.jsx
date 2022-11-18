import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row, ListGroup, ListGroupItem } from "reactstrap";

import "./footer.css";
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4">
            <div className="logo">
              <div>
                <h1 className="text-white">Shopculi</h1>
              </div>
            </div>
            <p className="footer__text mt-4 mb-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consequatur rem minima error porro quasi id reprehenderit earum,
              maxime quam possimus.
            </p>
          </Col>
          <Col lg="3" md="4" className="mb-4">
            <div className="footer__quick-links">
              <h4 className="quick__link-title">Top Categories</h4>
              <ListGroup className="mb-3">
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Mobile Phones</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Modern Sofa</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Arm Chair</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Smart Watches</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="2" className="mb-4" md="4">
            <div className="footer__quick-links">
              <h4 className="quick__link-title">UseFul Links</h4>
              <ListGroup className="mb-3">
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/shop">Shop</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/cart">Cart</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="Login">Login</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Privacy pholicy</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="3" md="4" className="mb-4">
            <div className="footer__quick-links">
              <h4 className="quick__link-title">Contact</h4>
              <ListGroup className="footer__contact">
                <ListGroupItem className="ps-0 border-0  d-flex align-item-center gap-2">
                  <span>
                    <i className="ri-map-pin-line text-white"></i>
                  </span>
                  <p> 123 Zindabazar, sylhet, bangladesh</p>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0  d-flex align-item-center gap-2">
                  <span>
                    <i className="ri-phone-line text-white"></i>
                  </span>
                  <p> +0888999998889</p>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0  d-flex align-item-center gap-2">
                  <span>
                    <i className="ri-mail-line text-white"></i>
                  </span>
                  <p> nguyenthuy998lc@gmail.com</p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="12" className="mb-4">
            <p className="footer__copyright">Made in {year} CuliShop.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
