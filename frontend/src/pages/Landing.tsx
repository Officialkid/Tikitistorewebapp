import Footer from '../components/Footer';
import { FaTicketAlt, FaLock, FaUniversity, FaQrcode } from 'react-icons/fa';

export default function Landing() {
    return (
        <div className="min-h-screen bg-bg-white">
            {/* Hero Section */}
            <section className="relative bg-cover bg-center h-96" style={{ backgroundImage: 'ur[](https://via.placeholder.com/1920x400?text=Auditorium+Background)' }}>
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="relative container mx-auto px-4 py-16 text-bg-white text-center">
                    <h1 className="text-5xl font-bold mb-4">Discover & Book Student Events Easily</h1>
                    <p className="text-xl mb-8">Find and book tickets to the best student events on campus. From concerts to workshops, we've got you covered.</p>
                    <div className="space-x-4">
                        <button className="bg-bg-white text-primary-blue-dark py-3 px-6 rounded-full font-semibold hover:bg-primary-blue-light">Browse Events</button>
                        <button className="border border-bg-white text-bg-white py-3 px-6 rounded-full font-semibold hover:bg-bg-white/20">Register as Organizer</button>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="container mx-auto py-16 text-center">
                <h2 className="text-3xl font-bold mb-4">Features</h2>
                <p className="text-text-sub-gray mb-8">Explore the benefits of using Tikiti Store for your next event.</p>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="bg-bg-light-gray p-6 rounded-xl shadow">
                        <FaTicketAlt className="text-primary-blue-mid text-4xl mb-4 mx-auto" />
                        <h3 className="font-semibold mb-2">Easy Ticketing</h3>
                        <p className="text-text-sub-gray">Buy and book tickets to your favorite student events.</p>
                    </div>
                    <div className="bg-bg-light-gray p-6 rounded-xl shadow">
                        <FaLock className="text-primary-blue-mid text-4xl mb-4 mx-auto" />
                        <h3 className="font-semibold mb-2">Secure Payments</h3>
                        <p className="text-text-sub-gray">Your payment information is encrypted and secure.</p>
                    </div>
                    <div className="bg-bg-light-gray p-6 rounded-xl shadow">
                        <FaUniversity className="text-primary-blue-mid text-4xl mb-4 mx-auto" />
                        <h3 className="font-semibold mb-2">Campus-First Events</h3>
                        <p className="text-text-sub-gray">Exclusive events tailored for university students.</p>
                    </div>
                    <div className="bg-bg-light-gray p-6 rounded-xl shadow">
                        <FaQrcode className="text-primary-blue-mid text-4xl mb-4 mx-auto" />
                        <h3 className="font-semibold mb-2">Direct QR Entry</h3>
                        <p className="text-text-sub-gray">Seamless entry with QR codes directly from your phone.</p>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="bg-bg-light-gray py-16 text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
                    <p className="text-text-sub-gray mb-8">Hear from students and organizers who love Tikiti Store.</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-bg-white p-6 rounded-xl shadow">
                            <p className="text-text-sub-gray mb-4">"Tikiti Store made finding and attending campus events so much easier. I love how intuitive the platform is!"</p>
                            <div className="flex items-center justify-center">
                                <img src="https://via.placeholder.com/40" alt="Sarah" className="rounded-full mr-2" />
                                <span>Sarah Johnson, University Student</span>
                            </div>
                        </div>
                        <div className="bg-bg-white p-6 rounded-xl shadow">
                            <p className="text-text-sub-gray mb-4">"As an event organizer, Tikiti Store has been flawless. It saves us so much time."</p>
                            <div className="flex items-center justify-center">
                                <img src="https://via.placeholder.com/40" alt="Michael" className="rounded-full mr-2" />
                                <span>Michael Chen, Event Organizer</span>
                            </div>
                        </div>
                        <div className="bg-bg-white p-6 rounded-xl shadow">
                            <p className="text-text-sub-gray mb-4">"I've discovered so many cool workshops and events. Highly recommend Tikiti Store to all students!"</p>
                            <div className="flex items-center justify-center">
                                <img src="https://via.placeholder.com/40" alt="Emily" className="rounded-full mr-2" />
                                <span>Emily Rodriguez, Student</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="container mx-auto py-16">
                <h2 className="text-3xl font-bold mb-4 text-center">Frequently Asked Questions</h2>
                <p className="text-text-sub-gray mb-8 text-center">Find answers to common questions about Tikiti Store.</p>
                <div className="space-y-4">
                    <details className="bg-bg-white p-4 rounded border border-text-sub-gray/20">
                        <summary className="font-semibold cursor-pointer">How do I purchase a ticket?</summary>
                        <p className="mt-2 text-text-sub-gray">Browse events, select one, and complete the checkout with M-Pesa.</p>
                    </details>
                    <details className="bg-bg-white p-4 rounded border border-text-sub-gray/20">
                        <summary className="font-semibold cursor-pointer">Can I get a refund for my ticket?</summary>
                        <p className="mt-2 text-text-sub-gray">Refunds depend on the organizer's policy—check event details.</p>
                    </details>
                    <details className="bg-bg-white p-4 rounded border border-text-sub-gray/20">
                        <summary className="font-semibold cursor-pointer">How do I use my QR code for entry?</summary>
                        <p className="mt-2 text-text-sub-gray">Show the QR at the gate for scanning.</p>
                    </details>
                    <details className="bg-bg-white p-4 rounded border border-text-sub-gray/20">
                        <summary className="font-semibold cursor-pointer">How can I become an event organizer?</summary>
                        <p className="mt-2 text-text-sub-gray">Register as an organizer and start creating events.</p>
                    </details>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-bg-light-gray py-16 text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-4">Ready to explore?</h2>
                    <p className="text-text-sub-gray mb-8">Join Tikiti Store today and start discovering exciting student events.</p>
                    <button className="bg-primary-blue-mid text-bg-white py-3 px-6 rounded-full font-semibold">Get Started</button>
                </div>
            </section>

            <Footer />
        </div>
    );
}