import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar'; // Added Navbar
import { FaTicketAlt, FaLock, FaUniversity, FaQrcode, FaStar } from 'react-icons/fa';

const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.2 } },
};

const childVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
};

export default function Landing() {
    const [reviewText, setReviewText] = useState('');
    const [rating, setRating] = useState(0);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmitReview = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Submitted review:', { reviewText, rating }); // Mock API call
        setSubmitted(true);
        setReviewText('');
        setRating(0);
    };

    return (
        <div className="min-h-screen bg-bg-white">
            <Navbar /> {/* Added to all pages */}
            {/* Hero Section with parallax bg */}
            <section className="relative bg-fixed bg-cover bg-center h-[600px]" style={{ backgroundImage: 'ur[](https://images.unsplash.com/photo-1545987796-200677ee1011?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)' }}>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-blue-dark/70 to-primary-blue-mid/50"></div>
                <motion.div
                    className="relative container mx-auto px-4 py-32 text-bg-white text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                >
                    <motion.h1 className="text-6xl font-bold mb-6" variants={childVariants}>Discover & Book Student Events Easily</motion.h1>
                    <motion.p className="text-2xl mb-10" variants={childVariants}>Find and book tickets to the best student events on campus. From concerts to workshops, we've got you covered.</motion.p>
                    <motion.div className="space-x-6" variants={childVariants}>
                        <button className="bg-bg-white text-primary-blue-dark py-4 px-8 rounded-full font-bold text-lg hover:shadow-lg transition">Browse Events</button>
                        <button className="border-2 border-bg-white py-4 px-8 rounded-full font-bold text-lg hover:bg-bg-white/20 transition">Register as Organizer</button>
                    </motion.div>
                </motion.div>
            </section>

            <div className="wave-divider">
                <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#F6F7FA"></path>
                </svg>
            </div>

            {/* Features Section */}
            <motion.section
                className="container mx-auto py-20 text-center bg-bg-light-gray"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={sectionVariants}
            >
                <motion.h2 variants={childVariants} className="text-4xl font-bold mb-6">Features</motion.h2>
                <motion.p variants={childVariants} className="text-text-sub-gray text-lg mb-12">Explore the benefits of using Tikiti Store for your next event.</motion.p>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <motion.div variants={childVariants} className="bg-bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition">
                        <FaTicketAlt className="text-primary-blue-mid text-5xl mb-4 mx-auto" />
                        <h3 className="font-bold text-xl mb-2">Easy Ticketing</h3>
                        <p className="text-text-sub-gray">Buy and book tickets to your favorite student events.</p>
                    </motion.div>
                    {/* Repeat for other features with motion.div */}
                    <motion.div variants={childVariants} className="bg-bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition">
                        <FaLock className="text-primary-blue-mid text-5xl mb-4 mx-auto" />
                        <h3 className="font-bold text-xl mb-2">Secure Payments</h3>
                        <p className="text-text-sub-gray">Your payment information is encrypted and secure.</p>
                    </motion.div>
                    <motion.div variants={childVariants} className="bg-bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition">
                        <FaUniversity className="text-primary-blue-mid text-5xl mb-4 mx-auto" />
                        <h3 className="font-bold text-xl mb-2">Campus-First Events</h3>
                        <p className="text-text-sub-gray">Exclusive events tailored for university students.</p>
                    </motion.div>
                    <motion.div variants={childVariants} className="bg-bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition">
                        <FaQrcode className="text-primary-blue-mid text-5xl mb-4 mx-auto" />
                        <h3 className="font-bold text-xl mb-2">Direct QR Entry</h3>
                        <p className="text-text-sub-gray">Seamless entry with QR codes directly from your phone.</p>
                    </motion.div>
                </div>
            </motion.section>

            {/* Testimonials Section */}
            <motion.section
                className="py-20 text-center bg-gradient-to-b from-bg-light-gray to-bg-white"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={sectionVariants}
            >
                <motion.h2 variants={childVariants} className="text-4xl font-bold mb-6">What Our Users Say</motion.h2>
                <motion.p variants={childVariants} className="text-text-sub-gray text-lg mb-12">Hear from students and organizers who love Tikiti Store.</motion.p>
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
                    <motion.div variants={childVariants} className="bg-bg-white p-6 rounded-2xl shadow-lg">
                        <p className="text-text-sub-gray mb-4">"Tikiti Store made finding and attending campus events so much easier. I love how intuitive the platform is!"</p>
                        <div className="flex items-center justify-center">
                            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Sarah" className="rounded-full mr-2 h-10 w-10" />
                            <span>Sarah Johnson, University Student</span>
                        </div>
                    </motion.div>
                    {/* Repeat for others with different Unsplash avatars */}
                    <motion.div variants={childVariants} className="bg-bg-white p-6 rounded-2xl shadow-lg">
                        <p className="text-text-sub-gray mb-4">"As an event organizer, Tikiti Store has been flawless. It saves us so much time."</p>
                        <div className="flex items-center justify-center">
                            <img src="https://images.unsplash.com/photo-1500648762-4d4d1549c99f?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Michael" className="rounded-full mr-2 h-10 w-10" />
                            <span>Michael Chen, Event Organizer</span>
                        </div>
                    </motion.div>
                    <motion.div variants={childVariants} className="bg-bg-white p-6 rounded-2xl shadow-lg">
                        <p className="text-text-sub-gray mb-4">"I've discovered so many cool workshops and events. Highly recommend Tikiti Store to all students!"</p>
                        <div className="flex items-center justify-center">
                            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Emily" className="rounded-full mr-2 h-10 w-10" />
                            <span>Emily Rodriguez, Student</span>
                        </div>
                    </motion.div>
                </div>
                {/* Dynamic Testimonial Form */}
                <motion.div variants={childVariants} className="container mx-auto px-4 mt-16 max-w-lg">
                    <h3 className="text-2xl font-bold mb-4">Add Your Testimonial</h3>
                    <form onSubmit={handleSubmitReview} className="space-y-4">
                        <textarea
                            value={reviewText}
                            onChange={(e) => setReviewText(e.target.value)}
                            placeholder="Your review..."
                            className="w-full p-4 border border-text-sub-gray rounded-xl focus:ring-primary-blue-mid"
                            rows={4}
                        />
                        <div className="flex justify-center space-x-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <FaStar
                                    key={star}
                                    className={`text-3xl cursor-pointer ${star <= rating ? 'text-primary-blue-mid' : 'text-text-sub-gray'}`}
                                    onClick={() => setRating(star)}
                                />
                            ))}
                        </div>
                        <button type="submit" className="bg-primary-blue-mid text-bg-white py-3 px-6 rounded-full font-bold w-full">
                            Submit Review
                        </button>
                        {submitted && <p className="text-primary-blue-mid text-center">Thanks for your review! It's under review.</p>}
                    </form>
                </motion.div>
            </motion.section>

            {/* FAQ Section */}
            <motion.section
                className="container mx-auto py-20"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={sectionVariants}
            >
                <motion.h2 variants={childVariants} className="text-4xl font-bold mb-6 text-center">Frequently Asked Questions</motion.h2>
                <motion.p variants={childVariants} className="text-text-sub-gray text-lg mb-12 text-center">Find answers to common questions about Tikiti Store.</motion.p>
                <div className="space-y-4">
                    <AnimatePresence>
                        <motion.details
                            className="bg-bg-light-gray p-6 rounded-2xl shadow-md cursor-pointer"
                            initial={false}
                            animate={{ backgroundColor: '#F6F7FA' }}
                        >
                            <summary className="font-bold text-lg text-primary-blue-dark">How do I purchase a ticket?</summary>
                            <motion.p
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="mt-4 text-text-sub-gray"
                            >
                                Browse events, select one, and complete the checkout with M-Pesa.
                            </motion.p>
                        </motion.details>
                        {/* Repeat for other FAQs with motion.details */}
                        <motion.details className="bg-bg-light-gray p-6 rounded-2xl shadow-md cursor-pointer">
                            <summary className="font-bold text-lg text-primary-blue-dark">Can I get a refund for my ticket?</summary>
                            <motion.p
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="mt-4 text-text-sub-gray"
                            >
                                Refunds depend on the organizer's policy—check event details.
                            </motion.p>
                        </motion.details>
                        {/* Add more */}
                    </AnimatePresence>
                </div>
            </motion.section>

            {/* CTA Section */}
            <motion.section
                className="py-20 text-center bg-gradient-to-r from-primary-blue-light to-primary-blue-mid text-bg-white"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={sectionVariants}
            >
                <motion.h2 variants={childVariants} className="text-4xl font-bold mb-6">Ready to explore?</motion.h2>
                <motion.p variants={childVariants} className="text-lg mb-8">Join Tikiti Store today and start discovering exciting student events.</motion.p>
                <motion.button variants={childVariants} className="bg-bg-white text-primary-blue-dark py-4 px-8 rounded-full font-bold text-lg hover:shadow-lg transition">
                    Get Started
                </motion.button>
            </motion.section>

            <Footer />
        </div>
    );
}