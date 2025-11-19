import React from 'react'
import Swipe from '../components/Swipe'
import Trending from '../components/Trending'
import CurrentPopular from '../components/CurrentPopular'

const Home = () => {
  return (
    <>
    <div className='explore h-screen w-full md:w-full bg-black  '>
        <Swipe />
        <Trending />
        <CurrentPopular />
    </div>
    </>
  )
}

export default Home