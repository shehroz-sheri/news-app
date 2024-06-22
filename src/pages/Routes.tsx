import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './home/Home'
import { Footer } from '../components/Footer'
import { Search } from './search/Search'
import { Navbar } from '../components/Navbar'
import NoPage from './NoPage'


const Index: React.FC = () => {
    return (
        <>
            <Navbar />
            <main>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/search' element={<Search />} />
                    
                    <Route path='/*' element={<NoPage />} />
                </Routes>
            </main>
            <Footer />
        </>
    )
}

export default Index