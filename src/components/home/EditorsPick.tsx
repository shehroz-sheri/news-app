import React from 'react'
import { FaStar } from 'react-icons/fa6'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { RootState } from '../../redux/store';


export const EditorsPick: React.FC = () => {
  const { articles, loading, error } = useSelector((state: RootState) => state.news);

  if (loading) return <>
    <div className="flex justify-center items-center min-h-[25vh]">
      <div className="relative w-16 h-16">
        <div className="absolute border-t-4 border-blue-500 border-solid rounded-full w-full h-full animate-spin"></div>
        <div className="absolute border-t-4 border-red-500 border-solid rounded-full w-full h-full animate-spin delay-150"></div>
      </div>
    </div>
  </>

  if (error) return <p className='text-center py-8 text-red-700'>nytimes Api limits the api requests per minute. Please try again later.</p>


  return (
    <>
      <div className='max-md:mx-2'>
        <div className="flex text-dark my-4">
          <h3 className='font-bold text-lg'>Editor's Pick</h3>
          <p className='flex items-center mx-3'><FaStar size={'15'} /></p>
        </div>
        <div className='pb-6'>
          <div className="grid lg:grid-cols-2 gap-10 my-2">

            <div className='md:flex md:gap-4'>
              <div className='flex items-center'>
                <img className='w-full max-h-60 max-md:mb-1 md:max-h-80 object-cover' src={articles[0]?.imageUrl || `https://placehold.co/4000x2800?text=${articles[0].title}`} alt={articles[0]?.title} />
              </div>
              <div className='text-dark flex flex-col justify-evenly'>
                <Link to={articles[0]?.url} target='_blank' className='font-semibold font-serif lg:leading-tight hover:text-danger'>{articles[0]?.title}</Link>
                <p className='text-sm'>{articles[0]?.description}</p>
              </div>
            </div>

            <div className='md:flex md:gap-4'>
              <div className='flex items-center'>
                <img className='w-full object-cover' src={articles[1]?.imageUrl || `https://placehold.co/4000x2800?text=${articles[1].title}`} alt={articles[1]?.title} />
              </div>
              <div className='text-dark flex flex-col justify-evenly'>
                <Link to={articles[1]?.url} target='_blank' className='font-semibold font-serif lg:leading-tight hover:text-danger'>{articles[1]?.title}</Link>
                <p className='text-sm'>{articles[0]?.description}</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
