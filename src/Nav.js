import React, { useEffect, useState } from 'react'
import './Nav.css'
import requests from './requests';

function Nav({setSelectedOption , setCountry }) {
    const apiKey = '7cd2254c48454d04ae5cfddb2a9d18d3'



    return (
        
        
        <nav class="nav navbar-expand-lg">
  <button class="navbar-toggler buttonn" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="">categories</span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active">
      <h2 className='nav-link' onClick={() => setSelectedOption(`business`)} >business</h2>      </li>
      <li class="nav-item">
      <h2  className='nav-link' onClick={() => setSelectedOption(`health`)} >health</h2>
      </li>
      <li class="nav-item">
      <h2  className='nav-link' onClick={() => setSelectedOption(`entertainment`)}>entertainment</h2>
      </li>
      <li class="nav-item">
      <h2  className='nav-link' onClick={() => setSelectedOption(`science`)} >science</h2>
      </li>
      <li class="nav-item">
      <h2 className='nav-link'  onClick={() => setSelectedOption(`technology`)} >technology</h2>
      </li>
      <li class="nav-item">
      <h2 className='nav-link' onClick={() => setSelectedOption(`general`)}>general</h2>
      </li>
      <li class="nav-item">
      <h2 className='nav-link' onClick={() => setSelectedOption(``)}>latest</h2>
      </li>
    
    </ul>
  </div>
</nav>
    )
}

export default Nav
