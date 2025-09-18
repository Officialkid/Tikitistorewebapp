import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getEventById } from '../services/api'; // Reuse for details

export default function Favorites() {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const favIds = JSON.parse(localStorage.getItem('favorites') || '[]');
        Promise.all(favIds.map(id => getEventById(id))).then(setFavorites);
    }, []);

    return (
        <div className="min-h-screen bg-bg-white">
            <Navbar />
            <section className="container mx-auto py-12">
                <h1 className="text-4xl font-bold mb-8">My Favorites</h1>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {favorites.map(event => (
                        <div key={event.id} className="bg-bg-light-gray p-4 rounded-xl">
                            <h3 className="text-xl font-bold">{event.title}</h3>
                            <p>{event.date} - {event.location}</p>
                            <button className="bg-primary-blue-mid text-bg-white py-2 px-4 rounded-full mt-4">View Details</button>
                        </div>
                    ))}
                    {favorites.length === 0 && <p>No favorites yet.</p>}
                </div>
            </section>
            <Footer />
        </div>
    );
}