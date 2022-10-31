import React from 'react'
import { Header, WhatBit, Features, Footer } from '../containers';
import { Navbar, Brand, CTA } from '../components';
import '../App.css';


const Home = () => {
  return (
    <div>
      <div className="gradient__bg">
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <WhatBit/>
      <Features/>
      <CTA/>
      <Footer/> 
    </div>
  )
}

export default Home;