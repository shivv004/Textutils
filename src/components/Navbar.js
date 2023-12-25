import React from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props) {
  return (
    <>
      <style>
          {`
            #navbar{
              box-shadow: 0px 15px 15px -3px rgba(0,0,0,0.1) !important;
            }
            #dropdown1:hover{
              background-color: ${props.color==='#b2b2b2'?'#454545':'#b2b2b2'} !important;
            }
            #dropdown2:hover{
              background-color: ${props.color==='#b2b2b2'?'#454545':'#b2b2b2'} !important;
            }`
          }
      </style>

      <div >
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} id='navbar'>
          <div className="container-fluid" >
            <a className="navbar-brand mx-4" href="http://shivv004.github.io/Textutils">{props.title}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="https://github.com/shivv004"  target="_blank" rel="noreferrer">GitHub</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    More
                  </a>
                  <ul className={`dropdown-menu bg-${props.mode}`}>
                    <li><a className={`dropdown-item text-${props.mode==='light'?'dark':'light'}`} id='dropdown1' href="https://www.linkedin.com/in/shiv-shankar04/" target="_blank" rel="noreferrer">LinkedIn</a></li>
                    <li><a className={`dropdown-item text-${props.mode==='light'?'dark':'light'}`} id='dropdown2' href="mailto:shivshank019@gmail.com">Email</a></li>
                  </ul>
                </li>
              </ul>
              <div className={`form-check form-switch text-${props.mode==="light"?"dark":"light"}`} onClick={props.toggleMode}>
                <input className="form-check-input mx-0" type="checkbox" role="switch" style={{height:20, width:35}} id="flexSwitchCheckDefault"/>
                <label className="form-check-label mx-3" htmlFor="flexSwitchCheckDefault">Dark Mode &#9925;</label>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: "Title"
}