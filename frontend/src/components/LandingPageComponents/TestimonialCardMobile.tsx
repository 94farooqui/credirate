
import {Test} from './Testimoniols'

interface TestProps{
    test : Test
}


const TestimonialCardMobile = ({test} : TestProps) => {
    return (
        <div className='w-[250px] bg-gradient-to-br from-slate-100/10 to-slate-400/10 p-4 rounded-lg text-stone-300 font-medium flex flex-col justify-between gap-4 border-2 border-slate-100/20'>
            <div className='p-0'>
                <p className='text-xs leading-6'>{test.message}</p>
            </div>
            <div className='flex flex-col gap-2'>
                <span className='border-t border-stone-200/20'></span>
                <div className='flex gap-4 items-center'>
                    <div className='w-12 h-12 rounded-full bg-slate-100/20'>

                    </div>
                    <div className='text-xs'>
                        <p className=''>{test.user.name}</p>
                        <p className='font-semibold text-stone-200/50'>{test.user.tag_name}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestimonialCardMobile