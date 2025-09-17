import { MagnifyingGlassIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
    const [searchQuery, setSearchQuery] = useState('');
    const [isDark, setIsDark] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const savedMode = localStorage.getItem('theme');
        if (savedMode === 'dark') {
            setIsDark(true);
            document.documentElement.classList.add('dark');
        }
    }, []);

    const toggleDarkMode = () => {
        const newMode = !isDark;
        setIsDark(newMode);
        if (newMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    };

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchQuery) {
            navigate(`/search?q=${searchQuery}`);
        }
    };

    return (
        <nav className="bg-gradient-to-r from-primary-blue-light to-primary-blue-dark p-4 text-bg-white sticky top-0 z-50 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    <span className="text-3xl">🔵</span>
                    <h1 className="text-2xl font-bold">TikitiStore</h1>
                </div>
                <div className="flex items-center space-x-6">
                    <a href="/events" className="hover:underline text-lg">Browse Events</a>
                    <a href="/organize" className="hover:underline text-lg">Organize Events</a>
                    <a href="/contact" className="hover:underline text-lg">Contact Us</a>
                    <button onClick={() => navigate('/login')} className="bg-bg-white text-primary-blue-dark py-2 px-4 rounded-full font-semibold hover:bg-primary-blue-light">
                        Login
                    </button>
                    <button onClick={() => navigate('/register')} className="border border-bg-white py-2 px-4 rounded-full font-semibold hover:bg-bg-white/20">
                        Sign Up
                    </button>
                    <form onSubmit={handleSearch} className="relative">
                        <input
                            type="text"
                            placeholder="Search events..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="bg-bg-white/20 text-bg-white rounded-full py-2 px-4 pr-10 focus:outline-none"
                        />
                        <button type="submit">
                            <MagnifyingGlassIcon className="h-5 w-5 absolute right-3 top-1/2 -translate-y-1/2 text-bg-white/60" />
                        </button>
                    </form>
                    <ShoppingCartIcon className="h-6 w-6 cursor-pointer hover:scale-110 transition" />
                    <button onClick={toggleDarkMode} className="ml-4">
                        {isDark ? <FaSun className="text-2xl text-yellow-300" /> : <FaMoon className="text-2xl text-gray-300" />}
                    </button>
                </div>
            </div>
        </nav>
    );
}