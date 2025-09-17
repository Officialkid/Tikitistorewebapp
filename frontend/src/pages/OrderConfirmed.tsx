import QRCode from 'qrcode.react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function OrderConfirmed() {
    return (
        <div className="min-h-screen bg-bg-white">
            <Navbar />
            <section className="container mx-auto py-20 text-center">
                <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="text-green-500 text-6xl mb-4">✓</div>
                    <h1 className="text-4xl font-bold mb-4">Your Order is Confirmed!</h1>
                    <p className="text-text-sub-gray text-lg mb-6">You'll receive an email with your tickets and event details shortly.</p>
                    <p className="text-text-sub-gray text-lg mb-8">Your e-ticket is also available below.</p>
                    <div className="bg-gradient-to-br from-green-600 to-green-800 p-12 rounded-2xl inline-block shadow-lg">
                        <QRCode value="confirmed-ticket-qr" size={200} bgColor="transparent" fgColor="#FFFFFF" />
                    </div>
                    <button onClick={() => window.location.href = '/my-tickets'} className="mt-12 bg-primary-blue-mid text-bg-white py-4 px-8 rounded-full font-bold">View My Tickets</button>
                </motion.div>
            </section>
            <Footer />
        </div>
    );
}