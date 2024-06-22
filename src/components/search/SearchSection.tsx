import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { fetchNews } from '../../redux/slices/newsSlice';
import { useNavigate, useSearchParams } from 'react-router-dom';


export const SearchSection: React.FC = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const name = searchParams.get('query');

    const [query, setQuery] = useState<string>(name || '');
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        if (!query) {
            dispatch(fetchNews({ query: 'politics', page: 0 }));
        }
    }, [dispatch, query]);


    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(fetchNews({ query, page: 0 }));
        setSearchParams()
    };

    const setSearchParams = () => {
        const params = new URLSearchParams();
        params.set('query', query);
        navigate({ search: params.toString() });
    };


    return (
        <>
            <div className='min-h-[60vh] flex justify-center items-center'>
                <div className="text-center w-full">
                    <div className='container mx-auto w-[90%] flex flex-col gap-8'>
                        <h2 className='font-bold text-3xl font-serif text-[#2A2A2A]'>Search News</h2>

                        <form onSubmit={handleSearch} className="mx-auto w-full sm:w-[60%]">
                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                    <img className='w-4' src={require('../../assets/images/search-icon.png')} alt="search" />
                                </div>
                                <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} id="email-address-icon" className="bg-gray-50 border text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Here..." />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
