import React from 'react'
import { Link } from 'react-router-dom';
import { TiWiFi } from "react-icons/ti";
import { FaFacebook, FaRedditAlien, FaTwitter } from "react-icons/fa6";


export const Footer: React.FC = () => {
    const year = new Date().getFullYear();

    return (
        <>
            <div className='bg-primary text-white'>
                <div className="container w-[95%] sm:w-[85%] 2xl:w-[80%] mx-auto min-h-72 sm:min-h-60 flex items-center text-center">
                    <div className="grid md:grid-cols-3 w-full">
                        <div className='flex justify-start items-start md:w-max flex-col'>
                            <p className='mx-auto'>
                                <Link to={'/'}>
                                    <img className='w-20' src={require('../assets/images/footer-logo.png')} alt="News-App" />
                                </Link>
                            </p>
                            <p className='text-gray-400 mt-auto text-sm max-md:text-center max-md:w-full'>copyright &copy; {year} | <Link to={'https://www.linkedin.com/in/shehroz-arshad/'} target='_blank'>Shehroz Arshad</Link></p>
                        </div>
                        <div className='hidden text-start sm:flex flex-col max-lg:my-4'>
                            <div className='text-[15px]'>
                                <p className='mb-1'>Privacy Policy</p>
                                <p className='mb-1'>Do not sell my personal info</p>
                                <p className='mb-1'>Terms of service</p>
                                <p className='mb-1'><Link to={'/'} target='_blank'>nbcnews.com</Link> Site Map</p>
                            </div>
                        </div>
                        <div className='flex flex-col justify-around gap-1'>
                            <div className='flex max-sm:flex-col justify-center max-sm:my-3 md:justify-end sm:gap-6 max-sm:text-[15px]'>
                                <Link className='hover:underline hover:underline-offset-2' to={'#'}>About</Link>
                                <Link className='hover:underline hover:underline-offset-2' to={'#'}>Contact</Link>
                                <Link className='hover:underline hover:underline-offset-2' to={'#'}>Careers</Link>
                                <Link className='hover:underline hover:underline-offset-2' to={'#'}>Coupons</Link>
                            </div>
                            <div className='flex justify-center md:ms-auto gap-8 max-sm:my-3'>
                                <TiWiFi className='cursor-pointer hover:text-gray-400' size={'28'} style={{ transform: 'rotate(45deg)' }} /> <FaTwitter className='cursor-pointer hover:text-gray-400' size={'28'} /> <FaRedditAlien className='cursor-pointer hover:text-gray-400' size={'28'} /> <Link to={'https://fb.com/shehroz.arshad.376'} target='_blank'><FaFacebook className='cursor-pointer hover:text-gray-400' size={'28'} /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
