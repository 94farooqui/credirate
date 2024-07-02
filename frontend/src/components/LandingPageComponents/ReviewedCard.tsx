import React from 'react'
import { Test } from './Testimoniols'
import { ReviewItem } from './RecentlyReviewed'
import MyStarComponent from '../MyStarComponent'


interface ReviewedProps {
    props: ReviewItem
}


const ReviewedCard = ({ props }: ReviewedProps) => {
    return (
        <div className='w-[250px] overflow-hidden bg-gradient-to-br from-slate-100/10 to-slate-400/10 rounded-lg text-stone-300 font-medium flex flex-col justify-between gap-8 border-2 border-slate-100/20'>
            <div className='flex flex-col gap-4'>
                <img src={props.image} />
                <div className='flex flex-col gap-2 px-4 pb-4'>
                    <h2 className='text-sm font-semibold'>{props.item_name}</h2>
                    <MyStarComponent value={props.rating} />
                    <span className='self-start bg-slate-100 rounded-full py-1 px-2 text-xs text-slate-600'>{props.tag}</span>
                </div>
            </div>
        </div>
    )
}

export default ReviewedCard