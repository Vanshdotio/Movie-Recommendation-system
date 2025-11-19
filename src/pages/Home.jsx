import React from 'react'
import Swipe from '../components/Swipe'
import Trending from '../components/Trending'
import CurrentPopular from '../components/CurrentPopular'
import LatestMovie from '../components/LatestMovie'
import UpComing from '../components/UpComing'

const Home = () => {
  return (
    <>
    <div className='explore relative h-screen w-full md:w-full bg-black  '>
        <Swipe />
        <Trending />
        <CurrentPopular />
        <LatestMovie />
        <UpComing />
    </div>
    </>
  )
}

export default Home