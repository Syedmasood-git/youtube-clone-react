import React from 'react'
import Sidebar from '../Components/Sidebar'
import Navbar from '../Components/Navbar'
import Home from '../Components/Home'
import { Routes,Route } from 'react-router-dom'
const HomePage = () => {
  return (
    <>
      <Sidebar/> 
      <Navbar/>
      <Home/>
    </>
  )
}

export default HomePage
