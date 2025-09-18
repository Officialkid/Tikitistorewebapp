import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getEventById } from '../services/api'; // Mock fetch
import { useCart } from '../contexts/CartContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function EventDetails() {
    const { id } = useParams();
    const [event, setEvent] = useState(null);
    const { addToCart } = useCart();

    useEffect(() => {
        getEventById(id).then(setEvent);
    }, [id]);

    if (!event) return <div>Loading...</div>;

    const handleBuy = () => {
        addToCart(event);
    };

    return (
        <div className="min-h-screen bg-bg-white">
            <Navbar />
            <section className="container mx-auto py-12">
                <img src={event.image} alt={event.title} className="w-full h-96 object-cover rounded-2xl mb-8" />
                <h1 className="text-4xl font-bold mb-4">{event.title}</h1>
                <p className="text-text-sub-gray mb-4">{event.description}</p>
                <p className="text-text-sub-gray mb-2">Date: {event.date}</p>
                <p className="text-text-sub-gray mb-2">Location: {event.location}</p>
                <p className="text-primary-blue-mid text-xl mb-8">Price: {event.price}</p>
                <button onClick={handleBuy} className="bg-primary-blue-mid text-bg-white py-3 px-6 rounded-full">Buy Ticket</button>
            </section>
            <Footer />
        </div>
    );
}