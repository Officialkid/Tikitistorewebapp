import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function AdminDashboard() {
    return (
        <div className="min-h-screen bg-bg-white">
            <Navbar />
            <section className="container mx-auto py-12">
                <h1 className="text-4xl font-bold mb-8">Admin Dashboard</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-bg-light-gray p-6 rounded-2xl">
                        <h2 className="text-2xl font-bold mb-4">Manage Users</h2>
                        <p>List of users: Mock User 1, Mock User 2</p>
                        <button className="bg-red-500 text-bg-white py-2 px-4 rounded-full mt-4">Ban User</button>
                    </div>
                    <div className="bg-bg-light-gray p-6 rounded-2xl">
                        <h2 className="text-2xl font-bold mb-4">Manage Events</h2>
                        <p>List of events: Mock Event 1, Mock Event 2</p>
                        <button className="bg-green-500 text-bg-white py-2 px-4 rounded-full mt-4">Approve Event</button>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}