import { MagnifyingGlassIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchQuery) {
            navigate(`/search?q=${searchQuery}`);
        }
    };

    return (
        <nav className="bg-bg-white p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center space-x-4">
                    <h1 className="text-primary-blue-mid text-2xl font-bold flex items-center">
                        <span className="mr-1">🔵</span> TikitiStore {/* Logo placeholder */}
                    </h1>
                    <a href="/" className="text-text-dark-gray hover:text-primary-blue-mid">Home</a>
                    <a href="/categories" className="text-text-dark-gray hover:text-primary-blue-mid">Categories</a>
                    <a href="/favorites" className="text-text-dark-gray hover:text-primary-blue-mid">Favorites</a>
                    <a href="/my-tickets" className="text-text-dark-gray hover:text-primary-blue-mid">My Tickets</a>
                    <a href="/organizer" className="text-text-dark-gray hover:text-primary-blue-mid">Organizer Login</a>
                </div>
                <div className="flex items-center space-x-4">
                    <form onSubmit={handleSearch} className="relative">
                        <input
                            type="text"
                            placeholder="Search events..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="bg-bg-light-gray text-text-dark-gray rounded-full py-2 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-primary-blue-mid"
                        />
                        <button type="submit">
                            <MagnifyingGlassIcon className="h-5 w-5 absolute right-3 top-1/2 -translate-y-1/2 text-text-sub-gray" />
                        </button>
                    </form>
                    <ShoppingCartIcon className="h-6 w-6 text-text-dark-gray cursor-pointer hover:text-primary-blue-mid" />
                </div>
            </div>
        </nav>
    );
}