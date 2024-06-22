import React from 'react';
import { Link } from 'react-router-dom';

const NoPage: React.FC = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="bg-white p-10 rounded-lg shadow-lg text-center">
                <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
                <p className="text-2xl text-gray-600 mb-8">Page Not Found</p>
                <Link to={'/'} className="text-blue-500 hover:underline">
                    Go back to Home
                </Link>
            </div>
        </div>
    );
}

export default NoPage;
