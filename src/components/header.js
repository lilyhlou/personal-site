import PropTypes from "prop-types"
import React from "react"


const Header = ({ siteTitle }) => (
  <nav className="navbar navbar-expand-md navbar-light bg-light sticky-top navbar-transparent">
  <a className="navbar-brand" href="#">{siteTitle}</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
      <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul className="navbar-nav">
          <li className="nav-item active">
              <a className="nav-link" href="#home">Home</a>
          </li>
          <li className="nav-item">
              <a className="nav-link" href="#code">Code</a>
          </li>
          <li className="nav-item">
              <a className="nav-link" href="#writing">Writing</a>
          </li>
          <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
          </li>
      </ul>
  </div>
</nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
