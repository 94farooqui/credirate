
import LandingHero from './../../assets/LandingPage/landing_Hero.svg'
import {hero} from '../../data/LandingPageData'

const Hero = () => {
  return (
    <>
    <div className='sm:hidden w-screen py-4 px-2'>
        <div className='flex flex-col-reverse gap-4 justify-between items-center font-exo'>
            <div className='flex flex-col items-center justify-center gap-2 text-white'>
                <h2 className='text-xl text-center font-bold'>{hero.title}</h2>
                <p className='text-sm text-center text-stone-300'>{hero.sub_title}</p>
                <button className=' bg-red-600 mt-2 py-2 px-4 text-lg font-medium rounded-lg'>{hero.call_of_action}</button>
            </div>
            <img src={LandingHero} className='w-[50%]'/>
        </div>
    </div>

    <div className='hidden sm:block w-full py-20'>
        <div className='flex justify-between items-center font-exo'>
            <div className='flex flex-col gap-6 text-white w-[60%]'>
                <h2 className='text-5xl font-bold'>{hero.title}</h2>
                <p className='text-xl text-stone-300'>{hero.sub_title}</p>
                <button className='self-start bg-red-600 py-2 px-4 text-lg font-medium rounded-lg'>{hero.call_of_action}</button>
            </div>
            <img src={LandingHero} className='w-[25%]'/>
        </div>
    </div>
    </>
  )
}

export default Hero