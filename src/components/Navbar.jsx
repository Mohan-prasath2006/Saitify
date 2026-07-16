import React from 'react'
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const Navbar = () =>{
    const navigate = useNavigate()
    return(
        <>
         <div className='w-full flex justify-between items-center font-semibold'>
            <div className='flex items-center gap-2'>
                <img onClick={()=>navigate(-1)} className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_left}/>
                <img onClick={()=>navigate(+1)} className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_right}/>
            </div>
            <div className='flex items-center gap-4'>
                <p className='bg-white text-[15px] px-4 py-1 text-black rounded-lg hidden lg:block md:block cursor-pointer'>Explore Premium</p>
                <p className='bg-black py-1 px-4 rounded-lg text-[15px] cursor-pointer'>Install App</p>
                <p className='bg-purple-500 text-black w-7 h-7 rounded-full flex items-center justify-center border-none cursor-pointer'>M</p>
            </div>
         </div>
         <div className='flex items-center gap-2 mt-4'>
            <p className='bg-white text-black px-4 py-1 rounded-2xl cursor-pointer'>All</p>
            <p className='bg-black px-4 py-1 rounded-2xl cursor-pointer'>Music</p>
            <p className='bg-black px-4 py-1 rounded-2xl cursor-pointer'>Podcasts</p>
         </div>

        </>
    )
}

export default Navbar;
