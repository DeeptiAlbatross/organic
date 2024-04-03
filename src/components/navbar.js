import React from 'react'
import Logo from '../assets/logo.png';

function navbar() {


  const scrollToTarget=(id)=>{
    const targetDiv = document.getElementById(id);
      if (targetDiv) {
        targetDiv.scrollIntoView({ behavior: "smooth", block: "start" });
      }
  }
  return (
    <nav class="navbar navbar-expand-lg pb-2">
      <div class="container" data-aos="zoom-in">
        <a class="navbar-brand" href="#"><img src={Logo} class="image-fluid" alt=""/></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"><i class="bi bi-list"></i></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav m-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link " onClick={()=>scrollToTarget("Home")}>Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" onClick={()=>scrollToTarget("Services")}>Services</a>
            </li>
            <li class="nav-item ">
              <a class="nav-link " onClick={()=>scrollToTarget("Products")}>
               Products
              </a>
             
            </li>
            <li class="nav-item">
              <a class="nav-link" onClick={()=>scrollToTarget("About")}>About us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" onClick={()=>scrollToTarget("Contact")}>Contact</a>
            </li>
          </ul>
          <form class="d-flex">
            <input class="px-2 search" type="search" placeholder="Search" aria-label="Search"/>
            <button class="btn1 me-2 px-3" type="submit">Search</button>
            <span><i class="bi bi-bag-plus"></i></span>
          </form>
        </div>
      </div>
    </nav>
    


  )
}

export default navbar