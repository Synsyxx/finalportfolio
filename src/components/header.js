import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle, menuLinks }) => (
  /*<nav style={{ display: 'flex', flex: 1 }}>
    {
      menuLinks.map(link =>
          <li key={link.name} style={{ 'listStyleType': 'none' }}>
            <Link to={link.link}>{link.name}</Link>
          </li>)
    }
  </nav>*/
  <header
    style={{
      background: `white`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`, 
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
    <nav style={{ display: 'flex', flex: 1 }} class="sidenav">
    {
      menuLinks.map(link =>
          <li key={link.name} style={{ 'listStyleType': 'none' }}>
            <Link to={link.link}>{link.name}</Link>
          </li>)
    }
  </nav>
  </header> 
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
