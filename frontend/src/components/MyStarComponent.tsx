import React from 'react'
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

interface RatingProps{
    value : number
}


const MyStarComponent:React.FC<RatingProps> = ({value}) => {
    const unfilled = 5 - value
  return (
    <div className='flex'>
        {[...Array(value)].map(filled => <FaStar key={filled} className='text-yellow-300'/>)}
        {[...Array(unfilled)].map(unfilled => <FaRegStar key={unfilled} className='text-yellow-300'/>)}
    
    </div>
  )
}

export default MyStarComponent