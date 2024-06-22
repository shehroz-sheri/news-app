import React from 'react'
import Hero from '../../components/home/Hero'
import Categories from '../../components/home/Categories'
import NewsCard from '../../components/home/NewsCard'
import { EditorsPick } from '../../components/home/EditorsPick'


const Home: React.FC = () => {
    return (
        <div className='bg-[#F1F2F3] md:pt-5'>
            <div className='sm:w-[95%] 2xl:w-[80%] mx-auto'>
                <Hero />
                <Categories />
                <NewsCard />
                <EditorsPick />
            </div>
        </div>
    )
}

export default Home