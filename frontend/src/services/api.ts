// src/services/api.ts
import axios from 'axios';

const api = axios.create({ baseURL: '/api' }); // Change to real backend later

// Mock data
const mockEvents = [
    { id: 1, name: 'Campus Concert', category: 'Concerts', date: '2025-10-01', location: 'University Hall', price: 500 },
    // Add more...
];

export const getFeaturedEvents = () => Promise.resolve(mockEvents.slice(0, 3));
export const getUpcomingEvents = (filters: any) => Promise.resolve(mockEvents);
export const register = (data: any) => Promise.resolve({ token: 'fake-token' });
export const login = (data: any) => Promise.resolve({ token: 'fake-token' });