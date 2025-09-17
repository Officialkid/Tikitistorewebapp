import { motion } from 'framer-motion';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaTachometerAlt, FaCalendarAlt, FaTicketAlt, FaChartBar, FaCog } from 'react-icons/fa';  // Replaced FaDashboard with FaTachometerAlt

interface FormData {
    name: string;
    description: string;
    poster: File | null;
    category: string;
    type: string;
    date: string;
    time: string;
    location: string;
    price: number;
    maxAttendees: number;
}

const sidebarVariants = {
    hover: { scale: 1.05, transition: { duration: 0.2 } },
};

export default function CreateEvent() {
    const { register, handleSubmit, watch } = useForm<FormData>();
    const [posterPreview, setPosterPreview] = useState<string | null>(null);

    const formValues = watch(); // For live preview

    const onSubmit = (data: FormData) => {
        console.log('Event created:', data); // Mock API
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => setPosterPreview(reader.result as string);
        }
    };

    return (
        <div className="min-h-screen bg-bg-light-gray">
            <Navbar />
            <div className="container mx-auto py-12 flex gap-8">
                {/* Sidebar */}
                <motion.aside
                    className="w-1/4 bg-bg-white p-6 rounded-2xl shadow-lg sticky top-24 h-fit"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                >
                    <h2 className="text-2xl font-bold mb-6 text-primary-blue-mid">Campus Events</h2>
                    <ul className="space-y-4">
                        <motion.li variants={sidebarVariants} whileHover="hover" className="flex items-center text-text-dark-gray hover:text-primary-blue-mid cursor-pointer">
                            <FaDashboard className="mr-3" /> Dashboard
                        </motion.li>
                        <motion.li variants={sidebarVariants} whileHover="hover" className="flex items-center text-text-dark-gray hover:text-primary-blue-mid cursor-pointer">
                            <FaCalendarAlt className="mr-3" /> Events
                        </motion.li>
                        <motion.li variants={sidebarVariants} whileHover="hover" className="flex items-center text-text-dark-gray hover:text-primary-blue-mid cursor-pointer">
                            <FaTicketAlt className="mr-3" /> Tickets
                        </motion.li>
                        <motion.li variants={sidebarVariants} whileHover="hover" className="flex items-center text-text-dark-gray hover:text-primary-blue-mid cursor-pointer">
                            <FaChartBar className="mr-3" /> Analytics
                        </motion.li>
                        <motion.li variants={sidebarVariants} whileHover="hover" className="flex items-center text-text-dark-gray hover:text-primary-blue-mid cursor-pointer">
                            <FaCog className="mr-3" /> Settings
                        </motion.li>
                    </ul>
                </motion.aside>
                {/* Main Content */}
                <div className="w-3/4 flex gap-8">
                    {/* Form */}
                    <form onSubmit={handleSubmit(onSubmit)} className="w-2/3 space-y-8">
                        <h1 className="text-4xl font-bold text-text-dark-gray">Create Event</h1>
                        <p className="text-text-sub-gray">Fill in the details below to create your new event.</p>
                        <div className="bg-bg-white p-6 rounded-2xl shadow">
                            <h3 className="text-xl font-bold mb-4">Event Details</h3>
                            <input {...register('name')} placeholder="Enter event name" className="w-full p-4 border rounded-xl mb-4" />
                            <textarea {...register('description')} placeholder="Enter event description" rows={4} className="w-full p-4 border rounded-xl mb-4" />
                            <div className="border-2 border-dashed border-text-sub-gray p-6 rounded-xl text-center">
                                <input type="file" {...register('poster')} onChange={handleFileChange} className="hidden" id="poster-upload" />
                                <label htmlFor="poster-upload" className="cursor-pointer text-primary-blue-mid">Upload a file or drag and drop</label>
                                <p className="text-text-sub-gray text-sm">PNG, JPG, GIF up to 10MB. Recommended 1080x1920px.</p>
                            </div>
                            <div className="flex gap-4 mt-4">
                                <select {...register('category')} className="w-1/2 p-4 border rounded-xl">
                                    <option>Select category</option>
                                    <option>Campus Events</option>
                                    {/* Add more */}
                                </select>
                                <select {...register('type')} className="w-1/2 p-4 border rounded-xl">
                                    <option>Select event type</option>
                                    <option>Concert</option>
                                    {/* Add more */}
                                </select>
                            </div>
                        </div>
                        <div className="bg-bg-white p-6 rounded-2xl shadow">
                            <h3 className="text-xl font-bold mb-4">Date, Time & Location</h3>
                            <input type="date" {...register('date')} className="w-1/2 p-4 border rounded-xl mr-4" />
                            <input type="time" {...register('time')} className="w-1/4 p-4 border rounded-xl mr-4" />
                            <input {...register('location')} placeholder="e.g., Main Auditorium" className="w-full p-4 border rounded-xl mt-4" />
                        </div>
                        <div className="bg-bg-white p-6 rounded-2xl shadow">
                            <h3 className="text-xl font-bold mb-4">Ticketing</h3>
                            <input type="number" {...register('price')} placeholder="$ 0.00" className="w-1/2 p-4 border rounded-xl mr-4" />
                            <input type="number" {...register('maxAttendees')} placeholder="e.g., 100" className="w-1/2 p-4 border rounded-xl" />
                        </div>
                        <div className="flex justify-end gap-4">
                            <button type="button" className="bg-text-sub-gray text-bg-white py-3 px-6 rounded-full">Save as Draft</button>
                            <button type="submit" className="bg-primary-blue-mid text-bg-white py-3 px-6 rounded-full">Publish Event</button>
                        </div>
                    </form>
                    {/* Preview */}
                    <div className="w-1/3 bg-bg-white p-6 rounded-2xl shadow sticky top-24 h-fit">
                        <h3 className="text-xl font-bold mb-4">Preview</h3>
                        <img src={posterPreview || 'https://via.placeholder.com/300x400?text=Event+Poster'} alt="Preview" className="w-full rounded-xl mb-4" />
                        <h4 className="text-lg font-bold">{formValues.name || 'Event Name Preview'}</h4>
                        <p className="text-text-sub-gray text-sm mb-2">Date & Time: {formValues.date} {formValues.time}</p>
                        <p className="text-text-sub-gray text-sm mb-2">Location: {formValues.location || 'Preview Location'}</p>
                        <p className="text-text-sub-gray mb-4">{formValues.description || 'Event description will appear here once you start typing.'}</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}