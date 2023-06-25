import React from 'react'
import PropTypes from 'prop-types';


export default function Navbar(props) {
  return (
    <>
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid mx-auto">
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0 justify-content-center">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#" style={{ fontWeight: 'bold', fontSize: '18px' }}>Buy</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#" style={{ fontWeight: 'bold', fontSize: '18px' }}>Mint</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </>
  )
}
