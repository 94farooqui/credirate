import React from 'react'

const Header = () => {
  return (
    <div className='w-screen bg-slate-100/10'>
        <div className='w-[1200px] max-w-[1200px] mx-auto flex justify-between items-center py-4 font-exo text-slate-200'>
            <div>
                <h1 className='text-4xl font-exo font-semibold'>CrediRate</h1>
            </div>
            <div>
                <ul className='flex gap-4 text-xl'>
                    <li>Home</li>
                    <li>Login</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header