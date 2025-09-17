import { QRCodeSVG } from 'qrcode.react';  // Updated import
import { motion } from 'framer-motion';
import { useState } from 'react';
import * as htmlToImage from 'html-to-image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const tickets = [ // Mock data
    { id: 1, event: 'Tech Conference 2025', date: 'October 26, 2025', time: '9:00 AM - 5:00 PM', qrValue: 'ticket1' },
    { id: 2, event: 'Music Festival', date: 'July 15, 2025', time: '12:00 PM - 11:00 PM', qrValue: 'ticket2' },
    { id: 3, event: 'Art Exhibition', date: 'August 5, 2025', time: '10:00 AM - 6:00 PM', qrValue: 'ticket3' },
];

export default function MyTickets() {
    const handleDownload = (id: number) => {
        const node = document.getElementById(`ticket-${id}`);
        if (node) {
            htmlToImage.toPng(node).then((dataUrl) => {
                const link = document.createElement('a');
                link.download = `ticket-${id}.png`;
                link.href = dataUrl;
                link.click();
            });
        }
    };

    return (
        <div className="min-h-screen bg-bg-white">
            <Navbar />
            <section className="container mx-auto py-20">
                <h1 className="text-4xl font-bold text-text-dark-gray mb-12 text-center">My Tickets</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {tickets.map((ticket) => (
                        <motion.div
                            key={ticket.id}
                            className="bg-bg-light-gray p-6 rounded-2xl shadow-lg text-center"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div id={`ticket-${ticket.id}`} className="bg-bg-white p-4 rounded-xl mb-4 inline-block">
                                <QRCodeSVG value={ticket.qrValue} size={128} className="mb-4" />  // Updated component
                            </div>
                            <h3 className="text-xl font-bold mb-2">{ticket.event}</h3>
                            <p className="text-text-sub-gray mb-1">📅 {ticket.date}</p>
                            <p className="text-text-sub-gray mb-4">🕒 {ticket.time}</p>
                            <button onClick={() => handleDownload(ticket.id)} className="bg-primary-blue-mid text-bg-white py-3 px-6 rounded-full font-bold">Download Ticket</button>
                        </motion.div>
                    ))}
                </div>
            </section>
            <Footer />
        </div>
    );
}