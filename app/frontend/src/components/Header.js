import React from 'react';
import Swagger from './Swagger.js';

const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom border-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Helix Blueprints</a>
      <button class="navbar-toggler" type="button">
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><Swagger/></a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Header;

