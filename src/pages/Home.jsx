import React, { Suspense } from 'react'
import Loader from '../components/Loader';

const Swipe = React.lazy(() => import('../components/Swipe'));
const Trending = React.lazy(() => import('../components/Trending'));
const CurrentPopular = React.lazy(() => import('../components/CurrentPopular'));
const LatestMovie = React.lazy(() => import('../components/LatestMovie'));
const UpComing = React.lazy(() => import('../components/UpComing'));

const Home = () => {
  return (
    <>
    <div className='explore relative h-screen w-full md:w-full bg-black  '>
      <Suspense fallback={<Loader />}>
        <Swipe />
        <Trending />
        <CurrentPopular />
        <LatestMovie />
        <UpComing />
      </Suspense>
    </div>
    </>
  )
}

export default Home