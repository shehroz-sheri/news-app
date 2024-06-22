import React from 'react'
import { SearchSection } from '../../components/search/SearchSection'
import Categories from '../../components/home/Categories'
import NewsCard from '../../components/home/NewsCard'


export const Search: React.FC = () => {
    return (
        <>
            <div className='bg-[#F1F2F3]'>
                <div className='sm:w-[95%] 2xl:w-[80%] mx-auto'>
                    <SearchSection />
                    <Categories />
                    <NewsCard />
                </div>
            </div>
        </>
    )
}
