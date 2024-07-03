
import JoinImage from './../../assets/LandingPage/undraw_join.svg'

const JoinUs = () => {
  return (
    <div>
      <div className='font-exo flex flex-col items-center gap-6 text-white w-[80%] mx-auto bg-gradient-to-br from-slate-100/10 to-slate-400/10 rounded-lg pt-8'>
        <h2 className='text-5xl font-bold'>Join Us</h2>
        <div className='flex items-center justify-center gap-16'>
        <img src={JoinImage} className='w-64'/>
        <div>
          <form className='flex flex-col items-start gap-4'>
            <input placeholder='Enter Email' className='text-xl p-2 bg-transparent border-2 border-slate-100/50 rounded-lg'/>
            <button className='bg-red-600 text-white text-xl px-8 py-2 rounded-lg'>Join</button>
          </form>
        </div>
      </div>
      </div>
    </div>
  )
}

export default JoinUs