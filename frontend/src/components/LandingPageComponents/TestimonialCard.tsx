
import {Test} from './Testimoniols'

interface TestProps{
    test : Test
}


const TestimonialCard = ({test} : TestProps) => {
    return (
        <div className='w-[300px] bg-gradient-to-br from-slate-100/10 to-slate-400/10 p-6 rounded-lg text-stone-300 font-medium flex flex-col justify-between gap-8 border-2 border-slate-100/20'>
            <div className='p-0'>
                <p className='text-sm leading-6'>{test.message}</p>
            </div>
            <div className='flex flex-col gap-4'>
                <span className='border-t border-stone-200/20'></span>
                <div className='flex gap-4 items-center'>
                    <div className='w-16 h-16 rounded-full bg-slate-100/20'>

                    </div>
                    <div className='text-sm'>
                        <p className=''>{test.user.name}</p>
                        <p className='font-semibold text-stone-200/50'>{test.user.tag_name}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestimonialCard