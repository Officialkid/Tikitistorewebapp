import { HeartIcon } from '@heroicons/react/24/outline';
import { useState, useEffect } from 'react';
import { useCart } from '../contexts/CartContext'; // New import
import { useNavigate } from 'react-router-dom';

interface UpcomingEventCardProps {
    badge: string;
    badgeColor: string;
    image: string;
    title: string;
    date: string;
    location: string;
    price: string;
    buttonText: string;
    id: number; // Add ID for favorites/cart
}

export default function UpcomingEventCard({
    badge,
    badgeColor,
    image,
    title,
    date,
    location,
    price,
    buttonText,
    id,
}: UpcomingEventCardProps) {
    const [isFavorite, setIsFavorite] = useState(false);
    const { addToCart } = useCart();
    const navigate = useNavigate();

    useEffect(() => {
        const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        setIsFavorite(favorites.includes(id));
    }, [id]);

    const toggleFavorite = () => {
        const newFavorite = !isFavorite;
        setIsFavorite(newFavorite);
        const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        if (newFavorite) {
            localStorage.setItem('favorites', JSON.stringify([...favorites, id]));
        } else {
            localStorage.setItem('favorites', JSON.stringify(favorites.filter(favId => favId !== id)));
        }
    };

    const handleAddToCart = () => {
        addToCart({ id, title, price }); // Mock event object
        navigate('/cart'); // Redirect to cart (we'll create next)
    };

    return (
        <div className="bg-bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
            <div className="relative">
                <img src={image} alt={title} className="w-full h-40 object-cover" />
                <span className={`absolute top-2 left-2 px-3 py-1 rounded-full text-sm font-medium ${badgeColor}`}>
                    {badge}
                </span>
            </div>
            <div className="p-4">
                <h3 className="text-lg font-bold text-text-dark-gray mb-1">{title}</h3>
                <p className="text-text-sub-gray text-sm mb-1">{date}</p>
                <p className="text-text-sub-gray text-sm mb-1">📍 {location}</p>
                <p className="text-text-sub-gray text-sm mb-2">{price}</p>
                <div className="flex justify-between items-center">
                    <HeartIcon
                        className={`h-5 w-5 cursor-pointer ${isFavorite ? 'text-primary-blue-mid fill-primary-blue-mid' : 'text-text-sub-gray'}`}
                        onClick={toggleFavorite}
                    />
                    <button onClick={handleAddToCart} className="bg-primary-blue-mid text-bg-white py-2 px-4 rounded-full text-sm font-semibold">
                        {buttonText}
                    </button>
                </div>
            </div>
        </div>
    );
}