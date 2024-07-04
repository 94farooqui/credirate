
import { categories } from '../../data/LandingPageData'
const CollectionOfCategories = () => {
  return (
    <>
      <div className='sm:hidden w-screen'>
        <div className='flex flex-col items-center justify-start gap-2 text-white font-exo'>
          <h2 className='text-2xl text-center font-bold'>{categories.title}</h2>
          <p className='text-sm text-center text-stone-300'>{categories.sub_title}</p>
          <div className='mt-4 w-[95%] flex gap-1 justify-center flex-wrap'>
            {categories.categories_list.map(category => <span className='bg-slate-100/10 px-2 py-1 rounded-lg text-stone-300 font-medium text-sm'>{category}</span>)}
          </div>

        </div>
      </div>
      <div className='hidden sm:block w-full'>
        <div className='flex flex-col items-center gap-4 text-white font-exo'>
          <h2 className='text-4xl font-bold'>{categories.title}</h2>
          <p className='text-xl text-stone-300'>{categories.sub_title}</p>
          <div className='mt-4 w-[80%] flex gap-2 justify-center flex-wrap'>
            {categories.categories_list.map(category => <span className='bg-slate-100/10 px-4 py-3 rounded-lg text-stone-300 font-medium text-lg'>{category}</span>)}
          </div>

        </div>
      </div>
    </>

  )
}

export default CollectionOfCategories