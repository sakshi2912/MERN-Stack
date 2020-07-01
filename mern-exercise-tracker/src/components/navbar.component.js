import React , { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component{
    render(){
        return(
<nav className="navbar navbar-expand-sm navbar-dark bg-dark navbar-toggler ">
  <Link to="/" className="navbar-brand">ExeTrack</Link>

  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Exercises <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/create">Create Exercise log</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/user">Create User</Link>
      </li>
    </ul>
  </div>
</nav>

        );
    }
}