import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { CiBookmark } from "react-icons/ci";
import { IoShareOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { Article, fetchNews, incrementPage, resetArticles } from '../../redux/slices/newsSlice';
import { formatDistanceToNow } from 'date-fns';
import { NewsArticle } from '../article/NewsArticle'



const NewsCard: React.FC = () => {
    const dispatch: AppDispatch = useDispatch()

    const { articles, loading, error, page } = useSelector((state: RootState) => state.news);
    const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

    const [searchParams] = useSearchParams();
    const name = searchParams.get('query');

    useEffect(() => {
        dispatch(resetArticles())
        dispatch(fetchNews({ query: name || 'politics', page: 0 }))
    }, [dispatch, name])


    const loadMoreArticles = () => {
        dispatch(incrementPage());
        dispatch(fetchNews({ query: name || 'politics', page: page + 1 }));
    };


    if (loading && page === 0) return <>
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
            <div className='grid md:grid-cols-3 gap-6 my-4 mx-2 text-dark'>
                {articles.slice(1).map((article, i) => (
                    <div key={i} className="flex flex-col bg-white shadow-lg rounded-sm">
                        <div onClick={() => setSelectedArticle(article)}>
                            <img className='cursor-pointer w-full object-cover h-60' src={article.imageUrl || `https://placehold.co/4000x4000?text=${article.title}`} alt={article.title} />
                        </div>
                        <div className='p-2 md:px-6 my-3 flex flex-col justify-between flex-1'>
                            <div>
                                <p onClick={() => setSelectedArticle(article)} className='font-bold font-serif hover:text-danger cursor-pointer'>{article.title}</p>
                                <p className='text-[13px] my-3 md:h-32'>{article.description}</p>
                            </div>
                            <div className='flex gap-10 text-xs'>
                                <p>{formatDistanceToNow(new Date(article.publishedAt))} ago</p>
                                <p className='text-secondary'><span className='px-1'>{article.author} </span><span className='border-s-[1px] border-dark ps-2'>4min read</span></p>
                            </div>
                        </div>
                        <div className='border-t border-dark/20 py-2'>
                            <div className='flex justify-center gap-8'>
                                <p className='cursor-pointer flex items-center'>
                                    <IoIosHeartEmpty /><span className='text-xs ms-1'>{article.likes}</span>
                                </p>
                                <p className='cursor-pointer flex items-center'>
                                    <IoShareOutline /> <span className='text-xs ms-1'>{article.shares}</span>
                                </p>
                                <p className='cursor-pointer flex items-center'>
                                    <CiBookmark />
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
                {selectedArticle && <NewsArticle article={selectedArticle} onClose={() => setSelectedArticle(null)} />}
            </div>

            {/* Load More Btn Section */}
            {loading && <div className="flex justify-center items-center w-full h-12">
                <div className="w-10 h-10 border-t-2 border-r-2 border-b-2 border-l-2 border-blue-500 animate-spin"></div>
            </div>}
            <div className="flex justify-center mt-5 pb-3">
                <button onClick={loadMoreArticles} className='uppercase mx-auto px-10 py-2 text-[15px] font-medium text-danger border rounded-sm text-center border-danger hover:bg-danger hover:text-white hover:border-white'>LOAD MORE</button>
            </div>
        </>
    )
}

export default NewsCard