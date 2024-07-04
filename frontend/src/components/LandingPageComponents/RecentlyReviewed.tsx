
import { reviewed } from './../../data/LandingPageData'
import ReviewedCard from './ReviewedCard'
import ReviewedCardMobile from './ReviewedCardMobile'

export interface ReviewItem {
  image: string,
  item_name: string,
  rating: number,
  tag: string
}

const RecentlyReviewed = () => {
  return (
    <>
      <div className='sm:hidden w-screen py-8 '>

        <div className='font-exo flex flex-col items-center gap-6 text-white w-[80%] mx-auto'>
          <h2 className='text-xl font-bold'>{reviewed.title}</h2>
          <div className='flex flex-col gap-8'>
            {reviewed.reviewed_list.map(item => <ReviewedCardMobile props={item} />)}
          </div>
        </div>
      </div>
      <div className='hidden sm:block w-full py-20 '>

        <div className='font-exo flex flex-col items-center gap-6 text-white w-[80%] mx-auto'>
          <h2 className='text-5xl font-bold'>{reviewed.title}</h2>
          <div className='flex gap-4'>
            {reviewed.reviewed_list.map(item => <ReviewedCard props={item} />)}
          </div>
        </div>
      </div>
    </>
  )
}


export default RecentlyReviewed



ReviewedCardMobile