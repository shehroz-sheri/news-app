import React, { useState } from 'react'
import { Link } from 'react-router-dom';


export const Navbar: React.FC = () => {
    const navLinks = ['Politics', 'Business', 'Sports', 'World', 'Travel', 'Podcasts']
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <>
            <div className='bg-[#ffffffd9] sticky top-0 z-10 shadow-md'>
                <div className="container sm:w-[95%] 2xl:w-full mx-auto">
                    <nav className="bg-[#ffffffd9]">
                        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                            <div className="relative flex items-center justify-between h-14">
                                <div className="flex items-center w-full">
                                    <div className="flex-shrink-0">
                                        <Link to={'/'}>
                                            <img className="h-7 md:h-8 w-auto" src={require('../assets/images/logo.png')} alt="Workflow" />
                                        </Link>
                                    </div>
                                    <div className="hidden lg:block lg:mx-auto">
                                        <div className="flex space-x-4 text-[#2A2A2A]">
                                            <Link to={'#'} className="hover:bg-gray-300 px-3 py-2 rounded-md text-sm font-medium"><img className='inline me-[6px] w-2' src={require('../assets/images/Checkbox.png')} alt="" />Corona Updates</Link>
                                            {
                                                navLinks.map((link, i) => (
                                                    <Link key={i} to={`/search?query=${link}`} className="hover:bg-gray-300 px-3 py-2 rounded-md text-sm font-medium">{link}</Link>
                                                ))
                                            }
                                            <span className="lg:flex items-center hidden">
                                                <img className='inline w-[10px] h-[10px]' src={require('../assets/images/nav-vector.png')} alt="" />
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="absolute inset-y-0 right-0 flex items-center lg:hidden">
                                    <span className="sr-only">Open main menu</span>
                                    {isOpen ? (
                                        <>
                                            <span className="cursor-pointer mx-3 py-2 rounded-md text-sm font-medium">
                                                <img className='w-3' src={require('../assets/images/profile.png')} alt="user" />
                                            </span>

                                            <span className="cursor-pointer mx-3 py-2 rounded-md text-sm font-medium">
                                                <Link to={'/search'}><img className='w-4' src={require('../assets/images/search-icon.png')} alt="search" /></Link>
                                            </span>
                                            <button
                                                onClick={() => setIsOpen(!isOpen)}
                                                type="button"
                                                className="inline-flex items-center justify-center p-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                                aria-controls="mobile-menu"
                                                aria-expanded="false"
                                            >
                                                <img className="block h-4 w-4 ms-2" src={require('../assets/images/menu-lines.png')} alt="menu" />
                                            </button>
                                        </>
                                    ) : (
                                        <>
                                            <span className="cursor-pointer mx-3 py-2 rounded-md text-sm font-medium">
                                                <img className='w-3' src={require('../assets/images/profile.png')} alt="user" />
                                            </span>

                                            <span className="cursor-pointer mx-3 py-2 rounded-md text-sm font-medium">
                                                <Link to={'/search'}><img className='w-4' src={require('../assets/images/search-icon.png')} alt="search" /></Link>
                                            </span>
                                            <button
                                                onClick={() => setIsOpen(!isOpen)}
                                                type="button"
                                                className="inline-flex items-center justify-center p-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                                aria-controls="mobile-menu"
                                                aria-expanded="false"
                                            >
                                                <img className="block h-4 w-4 ms-2" src={require('../assets/images/menu-lines.png')} alt="menu" />
                                            </button>
                                        </>
                                    )}
                                </div>
                                <div className="hidden lg:block lg:ml-auto">
                                    <div className="flex space-x-4">
                                        <span className="cursor-pointer mx-3 py-2 rounded-md text-sm font-medium">
                                            <img className='w-4' src={require('../assets/images/profile.png')} alt="user" />
                                        </span>

                                        <span className="cursor-pointer mx-3 py-2 rounded-md text-sm font-medium">
                                            <Link to={'/search'}><img className='w-5' src={require('../assets/images/search-icon.png')} alt="search" /></Link>
                                        </span>

                                        <span className='ps-3 flex items-center'>
                                            <img className="w-6 h-4" src={require('../assets/images/menu-lines.png')} alt="menu" />
                                        </span>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={`lg:hidden fixed top-14 inset-0 bg-gray-900 bg-opacity-80 z-20 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} id="mobile-menu">
                            <div className="absolute text-white inset-0 p-2 flex flex-col space-y-1 z-30" aria-controls="mobile-menu"
                                aria-expanded="false" onClick={() => setIsOpen(!isOpen)}>
                                <Link to={'#'} className="px-3 py-2 rounded-md text-sm block font-medium">Corona Updates</Link>
                                {
                                    navLinks.map((link, i) => (
                                        <Link key={i} to={`/search?query=${link}`} className="px-3 py-2 rounded-md text-sm block font-medium">{link}</Link>
                                    ))
                                }
                            </div>
                        </div>
                    </nav>
                </div >
            </div >
        </>
    )
}
