import { useState } from "react"
import { IoMenu } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { IoClose } from "react-icons/io5";


const Header = () => {
    const [mobileSidebar, setMobileSidebar] = useState(false)
    return (
        <>
            {/* for mobile */}
            <div className='sm:hidden w-screen bg-slate-100/10'>
                <div className='w-screen flex justify-between items-center py-4 px-2 font-exo text-slate-200'>
                    <div onClick={()=>setMobileSidebar(true)} className="text-3xl">
                        <IoMenu />
                    </div>
                    <div>
                        <h1 className='text-2xl font-exo font-semibold'>CrediRate</h1>
                    </div>
                    <div  className="text-2xl">
                        <IoSearch />
                    </div>

                </div>
                {mobileSidebar && <div className="absolute top-0 left-0 w-screen flex flex-row-reverse gap-4">
                    <button onClick={()=>setMobileSidebar(false)} className="bg-white p-2 rounded-full m-2 self-start"><IoClose /></button>
                    <ul className='w-full h-screen flex flex-col gap-4 text-xl bg-red-700 p-4 text-white'>
                        <li>Home</li>
                        <li>Login</li>
                    </ul>
                </div>}
            </div>

            {/* or desktop */}
            {<div className='hidden sm:block w-screen bg-slate-100/10'>
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
            </div>}
        </>
    )
}

export default Header