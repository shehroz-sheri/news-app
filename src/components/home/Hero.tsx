import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { CiBookmark } from "react-icons/ci";
import { IoBookmark, IoShareOutline } from "react-icons/io5";
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';


const Hero: React.FC = () => {
    const [isLiked, setIsLiked] = useState<boolean>(false)
    const [isSaved, setIsSaved] = useState<boolean>(false)

    const { articles, loading, error } = useSelector((state: RootState) => state.news);

    if (loading) return <>
        <div className="flex justify-center items-center min-h-[70vh]">
            <div className="border-t-4 border-b-4 border-blue-500 rounded-full w-16 h-16 animate-spin"></div>
        </div>
    </>

    if (error) return <p className='text-center py-8 text-red-700'>nytimes Api limits the api requests per minute. Please try again later.</p>

    if (!articles) return null


    return (
        <div className=''>
            <article className="max-md:relative md:gap-12 max-md:h-[80vh] max-md:isolate flex max-md:flex-col max-md:justify-end overflow-hidden md:grid md:grid-cols-2 max-md:pb-6 max-md:pt-40 w-full mx-auto">
                <img src={articles[0]?.imageUrl || `https://placehold.co/4000x4000?text=${articles[0].title}`} alt={articles[0]?.title} className="max-md:absolute max-md:inset-0 max-md:h-full md:h-96 max-md:w-full lg:w-full object-cover" />
                <div className="absolute md:hidden inset-0 bg-gradient-to-t from-gray-900 via-gray-900/30"></div>
                <div className="max-md:z-10 md:text-dark max-md:mt-3 md:flex md:items-center px-1 max-md:text-white">
                    <div>
                        <div className="flex justify-between max-md:hidden my-3">
                            <p className='text-danger text-md font-bold'>Trending</p>
                            <div className='flex justify-center gap-4'>
                                <p className='cursor-pointer flex items-center'>
                                    {!isLiked ? <IoIosHeartEmpty onClick={() => setIsLiked(true)} /> : <IoIosHeart onClick={() => setIsLiked(false)} color='red' />}
                                </p>
                                <p className='cursor-pointer flex items-center'>
                                    <IoShareOutline />
                                </p>
                                <p className='cursor-pointer flex items-center'>
                                    {!isSaved ? <CiBookmark onClick={() => setIsSaved(true)} /> : <IoBookmark onClick={() => setIsSaved(false)} />}
                                </p>
                            </div>
                        </div>
                        <Link to={articles[0]?.url} target='_blank' className='max-md:font-serif font-medium md:font-semibold text-xl md:text-2xl md:text-dark md:hover:text-danger'>{articles[0]?.title}</Link>
                        <div className='max-md:hidden'>
                            <p className="z-10 w-[90%] gap-y-1 overflow-hidden text-md leading-6 max-md:text-gray-300 text-sm my-4">{articles[0]?.fullDescription}</p>
                            <div className='flex gap-10 text-xs'>
                                <p>2 days ago</p>
                                <p className='text-secondary'>{articles[0]?.author} &nbsp; | &nbsp; 4min read</p>
                            </div>
                        </div>
                    </div>
                </div>
            </article>

            {/* Breaking News Section */}
            <div className="py-4 flex flex-wrap  gap-3 sm:gap-12 bg-danger justify-center sm:my-8">
                <button className='bg-white border border-danger text-danger px-4 rounded-sm py-2 hover:text-white hover:bg-danger hover:border hover:border-white'>Breaking News</button>
                <p className='my-auto text-center px-1 text-white'>Kanye West says he's running for president in 2020.</p>
            </div>
        </div>
    )
}

export default Hero