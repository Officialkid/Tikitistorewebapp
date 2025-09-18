import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getUpcomingEvents } from '../services/api';

export default function Search() {
    const location = useLocation();
    const query = new URLSearchParams(location.search).get('q');
    const [results, setResults] = useState([]);

    useEffect(() => {
        if (query) {
            getUpcomingEvents({ query }).then(setResults); // Mock filter by query
        }
    }, [query]);

    return (
        <div className="min-h-screen bg-bg-white">
            <Navbar />
            <section className="container mx-auto py-12">
                <h1 className="text-4xl font-bold mb-8">Search Results for "{query}"</h1>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {results.map(event => (
                        <div key={event.id} className="bg-bg-light-gray p-4 rounded-xl">
                            <h3 className="text-xl font-bold">{event.title}</h3>
                            <p>{event.date} - {event.location}</p>
                        </div>
                    ))}
                    {results.length === 0 && <p>No results found.</p>}
                </div>
            </section>
            <Footer />
        </div>
    );
}