import React from 'react'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Link } from 'react-router-dom'

export default function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link><img src="https://www.designfreelogoonline.com/wp-content/uploads/2019/09/00230-Restaurant-02.png" width="50" height="35"/><a className="navbar-brand" href="/home">FoodiE</a></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
      <Link><a className="nav-link" href='/home'>Home <span className="sr-only"></span></a></Link>
      </li> 
      <li className="nav-item">
      <Link><a className="nav-link" href='/meals'>Categories</a></Link>
      </li>
      <li className="nav-item">
      <Link><a className="nav-link" href='/order'>Order</a></Link>
      </li>
      <li className="nav-item">
      <Link><a className="nav-link" href='/feedback'>Feedback</a></Link>
      </li>
    </ul>
  </div>
</nav>
    </div>
  )
}