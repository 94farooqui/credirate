import React from 'react'
import {reviewed} from './../../data/LandingPageData'
import ReviewedCard from './ReviewedCard'

export interface ReviewItem {
  image:string,
  item_name:string,
  rating:number,
  tag: string
}

const RecentlyReviewed = () => {
  return (
    <div className='w-full py-20 '>

        <div className='font-exo flex flex-col items-center gap-6 text-white w-[80%] mx-auto'>
            <h2 className='text-5xl font-bold'>{reviewed.title}</h2>
            <div className='flex gap-4'>
                {reviewed.reviewed_list.map(item => <ReviewedCard props={item} />)}
            </div>
        </div>
    </div>
)
}


export default RecentlyReviewed