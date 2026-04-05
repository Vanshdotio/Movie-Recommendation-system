import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

const Explore = React.lazy(() => import('../pages/Explore'));
const Home = React.lazy(() => import('../pages/Home'));
const SearchOverlay = React.lazy(() => import('../components/SearchOverlay'));

const Approute = () => {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/explore' element={<Explore/>} />
        <Route path='/search' element={<SearchOverlay />} />
      </Routes>
    </Suspense>
  )
}

export default Approute