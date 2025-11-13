import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Explore from '../pages/Explore'

const Approute = () => {
  return (
    <>
      <Routes>
        <Route path='/explore' element={<Explore/>} />
      </Routes>
    </>
  )
}

export default Approute