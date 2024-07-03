import React from 'react'
import Hero from '../components/LandingPageComponents/Hero'
import CollectionOfCategories from '../components/LandingPageComponents/CollectionOfCategories'
import Testimoniols from '../components/LandingPageComponents/Testimoniols'
import RecentlyReviewed from '../components/LandingPageComponents/RecentlyReviewed'
import JoinUs from '../components/LandingPageComponents/JoinUs'
import Footer from '../components/LandingPageComponents/Footer'

const LandingPage = () => {
  return (
    <div className='w-screen'>
      <div className='w-[1200px] max-w-[1200px] mx-auto flex flex-col gap-12'>
        <Hero/>
        <CollectionOfCategories/>
        <Testimoniols/>
        <RecentlyReviewed/>
        <JoinUs/>
        
      </div>
    </div>
  )
}

export default LandingPage