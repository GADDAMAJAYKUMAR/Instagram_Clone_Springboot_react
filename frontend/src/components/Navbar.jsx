import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { FaHome, FaPlusSquare, FaUser, FaSignOutAlt, FaSearch } from 'react-icons/fa';
import CreatePostModal from './CreatePostModal';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    const handleSearch = (e) => {
        e.preventDefault();
        // Implement search logic or navigation
        console.log('Searching for:', searchQuery);
    };

    return (
        <>
            <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200">
                <div className="flex items-center justify-between max-w-5xl px-4 py-3 mx-auto">
                    <Link to="/" className="text-xl font-bold text-gray-900">
                        Instagram Clone
                    </Link>

                    <form onSubmit={handleSearch} className="hidden sm:block">
                        <div className="relative">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                                <FaSearch />
                            </span>
                            <input
                                type="text"
                                placeholder="Search"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="py-1 pl-10 pr-4 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-gray-400"
                            />
                        </div>
                    </form>

                    <div className="flex items-center space-x-6">
                        <Link to="/" className="text-2xl text-gray-800 hover:text-gray-600">
                            <FaHome />
                        </Link>
                        <button onClick={() => setShowModal(true)} className="text-2xl text-gray-800 hover:text-gray-600">
                            <FaPlusSquare />
                        </button>
                        <Link to={`/profile/${user?.username}`} className="text-2xl text-gray-800 hover:text-gray-600">
                            <FaUser />
                        </Link>
                        <button onClick={handleLogout} className="text-2xl text-gray-800 hover:text-gray-600">
                            <FaSignOutAlt />
                        </button>
                    </div>
                </div>
            </nav>
            {showModal && <CreatePostModal onClose={() => setShowModal(false)} />}
        </>
    );
};

export default Navbar;
