import React from 'react'
import { testimonials } from '../../data/LandingPageData'
import TestimonialCard from './TestimonialCard'

export interface Test {
    message: String,
    user: {
        name: String,
        tag_name: String,
        pofile_pic: String
    }
}


const Testimoniols = () => {
    return (
        <div className='w-full py-20 '>

            <div className='font-exo flex flex-col items-center gap-6 text-white w-[80%] mx-auto'>
                <h2 className='text-5xl font-bold'>{testimonials.title}</h2>
                <div className='flex gap-4'>
                    {testimonials.sayings.map(test => <TestimonialCard test={test} />)}
                </div>
            </div>
        </div>
    )
}

export default Testimoniols