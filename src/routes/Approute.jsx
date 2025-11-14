import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Explore from '../pages/Explore'
import Home from '../pages/Home'
import Search from '../components/SearchOverlay'
import SearchOverlay from '../components/SearchOverlay'

const Approute = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/explore' element={<Explore/>} />
        <Route path='/search' element={<SearchOverlay />} />
      </Routes>
    </>
  )
}

export default Approute