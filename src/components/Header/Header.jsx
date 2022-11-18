import React, { useState, useRef, useEffect } from "react";
import "./header.css";
import { useNavigate, NavLink, Link } from "react-router-dom";
import logo from "../../assets/images/eco-logo.png";
import userIcon from "../../assets/images/user-icon.png";
import { motion } from "framer-motion";
import { Container, Row } from "reactstrap";
import { useSelector } from "react-redux";
import useAuth from "../../custom-hooks/useAuth";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase.config";
import { toast } from "react-toastify";

const nav__links = [
  {
    path: "home",
    display: "Home",
  },
  {
    path: "shop",
    display: "Shop",
  },
  {
    path: "cart",
    display: "Cart",
  },
];
const Header = () => {
  const menuRef = useRef(null);
  const headerRef = useRef(null);
  const profileActionRef = useRef(null);
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const [opens, setOpens] = useState(false);
  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };
  const lognOut = () => {
    signOut(auth)
      .then(() => {
        toast.success("Logged out");
        navigate("/home");
      })
      .carch((err) => {
        toast.error(err.message);
      });
  };

  useEffect(() => {
    stickyHeaderFunc();
    return () => window.removeEventListener("scroll", stickyHeaderFunc);
  });
  const navigateToCart = () => {
    navigate("/cart");
  };
  const menuTonggle = () => menuRef.current.classList.toggle("active__menu");
  const toggleProfileActions = () =>
    profileActionRef.current.classList.toggle("show__profile");

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav__wrapper">
            <div className="logo">
              <img src={logo} alt="logo" />
              <div>
                <h1>Shopculi</h1>
              </div>
            </div>
            <div className="navigation" ref={menuRef} onClick={menuTonggle}>
              <ul className="menu">
                {nav__links.map((e, index) => (
                  <li className="nav__item" key={index}>
                    <NavLink
                      to={e.path}
                      className={(navClass) =>
                        navClass.isActive ? "nav__active" : ""
                      }
                    >
                      {e.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="nav__icons">
              <span className="fav__icon">
                <i className="ri-heart-line"></i>
                <span className="badge">1</span>
              </span>
              <span className="cart__icon" onClick={navigateToCart}>
                <i className="ri-shopping-bag-line"></i>
                <span className="badge">{totalQuantity}</span>
              </span>
              <div className="profile">
                {" "}
                <motion.img
                  whileTap={{ scale: 1.2 }}
                  src={userIcon}
                  alt=""
                  onClick={() => setOpens(!opens)}
                />
             
                {opens && (
                  <div className="profile__action">
                    {currentUser ? (
                      <span onClick={lognOut}>Logout</span>
                    ) : (
                      <div className=" d-flex align-item-center justify-content-center flex-column">
                        <Link to="/signup">Signup</Link>
                        <Link to="/login">Login</Link>
                      </div>
                    )}
                  </div>
                )}
              </div>
              <div className="mobile__menu">
                <span onClick={menuTonggle}>
                  <i className="ri-menu-line"></i>
                </span>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
