import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import FeaturedEventCard from '../components/FeaturedEventCard';
import UpcomingEventCard from '../components/UpcomingEventCard';
import Footer from '../components/Footer';
import { getFeaturedEvents, getUpcomingEvents } from '../services/api';

export default function Home() {
    const [featured, setFeatured] = useState([]);
    const [upcoming, setUpcoming] = useState([]);
    const [filters, setFilters] = useState({ category: '', date: '', location: '', sort: '' });

    useEffect(() => {
        getFeaturedEvents().then(setFeatured);
        getUpcomingEvents(filters).then(setUpcoming);
    }, [filters]);

    const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFilters({ ...filters, [e.target.name]: e.target.value });
    };

    return (
        <div className="min-h-screen bg-bg-white">
            <Navbar />
            <section className="container mx-auto py-8">
                <h2 className="text-3xl font-bold text-text-dark-gray mb-6">Featured Events</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <FeaturedEventCard
                        image="https://via.placeholder.com/400x200?text=Live+Music"
                        title="Live Music Extravaganza"
                        description="Experience the energy of live music with top artists."
                    />
                    <FeaturedEventCard
                        image="https://via.placeholder.com/400x200?text=Summer+Beats"
                        title="Summer Beats Festival"
                        description="Dance the night away at the hottest festival of the year."
                    />
                    <FeaturedEventCard
                        image="https://via.placeholder.com/400x200?text=Food+Fair"
                        title="Food & Fun Fair"
                        description="Enjoy delicious food and fun activities for the whole family."
                    />
                    <FeaturedEventCard
                        image="https://via.placeholder.com/400x200?text=Art+Exhibit"
                        title="Art & Culture Exhibit"
                        description="Explore amazing artworks and cultural displays."
                    />
                </div>
            </section>
            <section className="container mx-auto py-8 bg-bg-light-gray">
                <h2 className="text-3xl font-bold text-text-dark-gray mb-6">Upcoming Events</h2>
                <div className="flex flex-wrap gap-4 mb-6">
                    <select name="category" onChange={handleFilterChange} className="bg-bg-white border border-text-sub-gray rounded py-2 px-4 text-text-sub-gray">
                        <option>Category</option>
                        <option>Campus Events</option>
                        <option>Concerts</option>
                        <option>Games</option>
                        <option>Entertainment</option>
                    </select>
                    <select name="date" onChange={handleFilterChange} className="bg-bg-white border border-text-sub-gray rounded py-2 px-4 text-text-sub-gray">
                        <option>Date</option>
                        <option>This Week</option>
                        <option>This Month</option>
                    </select>
                    <select name="location" onChange={handleFilterChange} className="bg-bg-white border border-text-sub-gray rounded py-2 px-4 text-text-sub-gray">
                        <option>Location</option>
                        <option>University Hall</option>
                        <option>Main Auditorium</option>
                    </select>
                    <select name="sort" onChange={handleFilterChange} className="bg-bg-white border border-text-sub-gray rounded py-2 px-4 text-text-sub-gray">
                        <option>Sort by</option>
                        <option>Date</option>
                        <option>Price</option>
                    </select>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <UpcomingEventCard
                        id={1} // Added IDs
                        badge="Comedy"
                        badgeColor="bg-pink-100 text-pink-600"
                        image="https://via.placeholder.com/300x200?text=Comedy+Night"
                        title="Campus Comedy Night"
                        date="Oct 25, 2023"
                        location="University Hall"
                        price="From $15"
                        buttonText="Add to Cart"
                    />
                    <UpcomingEventCard
                        id={2}
                        badge="Tech"
                        badgeColor="bg-blue-100 text-blue-600"
                        image="https://via.placeholder.com/300x200?text=Tech+Talk"
                        title="Tech Talk Conference"
                        date="Nov 5, 2023"
                        location="Main Auditorium"
                        price="From $50"
                        buttonText="Add to Cart"
                    />
                    <UpcomingEventCard
                        id={3}
                        badge="Film"
                        badgeColor="bg-purple-100 text-purple-600"
                        image="https://via.placeholder.com/300x200?text=Film+Festival"
                        title="Student Film Festival"
                        date="Nov 12, 2023"
                        location="Cinema Hall"
                        price="From $10"
                        buttonText="Add to Cart"
                    />
                    <UpcomingEventCard
                        id={4}
                        badge="Charity"
                        badgeColor="bg-green-100 text-green-600"
                        image="https://via.placeholder.com/300x200?text=Charity+Run"
                        title="Charity Run for Education"
                        date="Nov 20, 2023"
                        location="City Park"
                        price="Donation"
                        buttonText="Register"
                    />
                </div>
            </section>
            <Footer />
        </div>
    );
}