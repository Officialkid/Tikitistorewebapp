// src/pages/EventDetail.tsx
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getEventById } from '../services/api'; // Add this to api.ts: export const getEventById = (id: string) => Promise.resolve(mockEvents.find(e => e.id === parseInt(id)));

export default function EventDetail() {
    const { id } = useParams();
    const [event, setEvent] = useState(null);

    useEffect(() => {
        if (id) getEventById(id).then(setEvent);
    }, [id]);

    if (!event) return <div>Loading...</div>;

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold mb-4">{event.name}</h1>
            <p className="text-text-sub-gray mb-2">{event.date} | {event.location} | KES {event.price}</p>
            <p className="mb-4">Description: {event.description || 'Details coming soon.'}</p>
            <button className="bg-primary-blue-mid text-bg-white py-2 px-4 rounded">Buy Ticket</button>
        </div>
    );
}