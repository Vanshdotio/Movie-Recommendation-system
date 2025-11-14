import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Explore from '../pages/Explore'
import Home from '../pages/Home'

const Approute = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/explore' element={<Explore/>} />
      </Routes>
    </>
  )
}

export default Approute