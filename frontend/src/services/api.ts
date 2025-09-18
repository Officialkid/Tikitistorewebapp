import axios from 'axios';

const api = axios.create({ baseURL: '/api' }); // For real backend later

// Mock data
const mockEvents = [
    { id: 1, title: 'Campus Comedy Night', description: 'Laugh out loud with student comedians.', image: 'https://via.placeholder.com/800x400?text=Comedy+Night', date: 'Oct 25, 2023', location: 'University Hall', price: '$15' },
    { id: 2, title: 'Tech Talk Conference', description: 'Learn from industry experts.', image: 'https://via.placeholder.com/800x400?text=Tech+Talk', date: 'Nov 5, 2023', location: 'Main Auditorium', price: '$50' },
    { id: 3, title: 'Student Film Festival', description: 'Support young filmmakers.', image: 'https://via.placeholder.com/800x400?text=Film+Festival', date: 'Nov 12, 2023', location: 'Cinema Hall', price: '$10' },
    { id: 4, title: 'Charity Run for Education', description: 'Run for a cause.', image: 'https://via.placeholder.com/800x400?text=Charity+Run', date: 'Nov 20, 2023', location: 'City Park', price: 'Donation' },
];

export const getFeaturedEvents = () => Promise.resolve(mockEvents.slice(0, 4));
export const getUpcomingEvents = (filters) => Promise.resolve(mockEvents); // Add filter logic later
export const getEventById = (id) => Promise.resolve(mockEvents.find(e => e.id === parseInt(id))); // New: Fix for error
export const register = (data) => Promise.resolve({ token: 'fake-token' });
export const login = (data) => Promise.resolve({ token: 'fake-token' });