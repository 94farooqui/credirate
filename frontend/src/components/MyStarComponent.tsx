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
        {[...Array(value)].map(filled => <FaStar className='text-yellow-300'/>)}
        {[...Array(unfilled)].map(unfilled => <FaRegStar className='text-yellow-300'/>)}
    
    </div>
  )
}

export default MyStarComponent