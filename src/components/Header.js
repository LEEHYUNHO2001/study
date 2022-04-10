import React, { useContext, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import styled from "styled-components";

import logo from "../images/icons/logo-sm.png";
import cart from "../images/icons/cart-sm.png";
import { AuthContext } from "../utils/AuthContext";

export const Header = () => {
  const { isAuth, isAuthenticated, signOut } = useContext(AuthContext);

  useEffect(() => {
    isAuthenticated();
  }, [isAuthenticated]);

  return (
    <HeaderContainer className="fixed-top navbar navbar-toggleable-sm navbar-expand-md">
      <div className="container">
        <Navbar className="w-100" collapseOnSelect expand="lg" variant="dark">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Brand href="/">
            <img src={logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="nav-justified w-100 nav-fill">
              <Nav.Link href="/">iphone</Nav.Link>
              {isAuth ? (
                <Nav.Link onClick={signOut}>Logout</Nav.Link>
              ) : (
                <Nav.Link href="/login">Login</Nav.Link>
              )}
              <Nav.Link href="/user/cart">
                <img src={cart} alt="cart" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  background-color: rgba(0, 0, 0, 0.8);
  font-size: 0.85rem;
  font-weight: 200;
  ul li a {
    color: #fff;
  }
  .nav-toggle {
    color: #fff;
  }
  .nav-item {
    text-align: left;
    padding: 4px 0;
    border-bottom: 1px solid #4b4b4b;
  }
`;
