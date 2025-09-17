import { FaEnvelope, FaPhone } from 'react-icons/fa'; // Install react-icons if needed

export default function Footer() {
    return (
        <footer className="bg-text-dark-gray py-8 text-bg-white">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start space-y-4 md:space-y-0">
                <div>
                    <h4 className="font-bold mb-2">Tikiti Store</h4>
                    <p className="text-text-sub-gray">Discover and book student events easily.</p>
                </div>
                <div>
                    <h4 className="font-bold mb-2">Quick Links</h4>
                    <ul className="space-y-1 text-text-sub-gray">
                        <li><a href="#" className="hover:underline">About Us</a></li>
                        <li><a href="#" className="hover:underline">Terms of Service</a></li>
                        <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold mb-2">Contact Us</h4>
                    <ul className="space-y-1 text-text-sub-gray">
                        <li className="flex items-center"><FaEnvelope className="mr-2" /> support@tikiti.store</li>
                        <li className="flex items-center"><FaPhone className="mr-2" /> +123 456-7890</li>
                    </ul>
                </div>
            </div>
            <div className="mt-4 text-center text-text-sub-gray text-sm">
                © 2024 Tikiti Store. All rights reserved.
            </div>
        </footer>
    );
}