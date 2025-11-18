import React from 'react'
import Swipe from '../components/Swipe'
import Trending from '../components/Trending'

const Home = () => {
  return (
    <>
    <div className='explore h-screen w-full md:w-full bg-black  '>
        <Swipe />
        <Trending />
    </div>
    </>
  )
}

export default Home