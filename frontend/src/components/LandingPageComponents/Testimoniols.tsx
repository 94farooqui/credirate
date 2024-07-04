
import { testimonials } from '../../data/LandingPageData'
import TestimonialCard from './TestimonialCard'
import TestimonialCardMobile from './TestimonialCardMobile'

export interface Test {
    message: string,
    user: {
        name: string,
        tag_name: string,
        pofile_pic: string
    }
}


const Testimoniols = () => {
    return (
        <>
            <div className='sm:hidden w-screen py-8 '>

                <div className='font-exo flex flex-col items-center gap-6 text-white w-[80%] mx-auto'>
                    <h2 className='text-2xl text-center font-bold'>{testimonials.title}</h2>
                    <div className='flex flex-col gap-4'>
                        {testimonials.sayings.map(test => <TestimonialCardMobile test={test} />)}
                    </div>
                </div>
            </div>
            <div className='hidden sm:block w-full py-20 '>

                <div className='font-exo flex flex-col items-center gap-6 text-white w-[80%] mx-auto'>
                    <h2 className='text-5xl font-bold'>{testimonials.title}</h2>
                    <div className='flex gap-4'>
                        {testimonials.sayings.map(test => <TestimonialCard test={test} />)}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimoniols