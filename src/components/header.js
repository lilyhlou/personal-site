import PropTypes from "prop-types"
import React from "react"
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Link from "gatsby"
const Header = ({ siteTitle }) => (
    <Navbar collapseOnSelect expand="lg" className="color-nav" variant="light" sticky="top">
    <Navbar.Brand><p>{siteTitle}</p></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto" activeKey="/home">
      <Nav.Link href="#main">Home</Nav.Link>
      <Nav.Link href="#code">Code</Nav.Link>
      <Nav.Link href="#writing">Writing</Nav.Link>
      <Nav.Link href="#about">About</Nav.Link>

    </Nav>
    </Navbar.Collapse>
  </Navbar>

)




Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
