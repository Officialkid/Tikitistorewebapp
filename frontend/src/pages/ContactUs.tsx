import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaEnvelope, FaPhone, FaUsers } from 'react-icons/fa';

interface FormData { name: string; email: string; subject: string; message: string; }

const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
};

const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

export default function ContactUs() {
    const { register, handleSubmit } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        console.log('Contact form submitted:', data); // Mock send
    };

    return (
        <div className="min-h-screen bg-bg-white">
            <Navbar />
            <div className="wave-divider">
                <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="var(--color-bg-light-gray)"></path>
                </svg>
            </div>
            <motion.section
                className="container mx-auto py-20 px-4 max-w-6xl"
                initial="hidden"
                animate="visible"
                variants={formVariants}
            >
                <motion.h1 variants={childVariants} className="text-5xl font-bold text-text-dark-gray mb-4 text-center">Contact Us</motion.h1>
                <motion.p variants={childVariants} className="text-text-sub-gray text-lg mb-12 text-center">We're here to help! Please fill out the form below or use the alternative contact methods provided.</motion.p>
                <div className="flex flex-col md:flex-row gap-12">
                    {/* Left Form */}
                    <motion.form variants={childVariants} onSubmit={handleSubmit(onSubmit)} className="w-full md:w-1/2 space-y-6">
                        <input {...register('name')} placeholder="Name" className="w-full p-4 border border-text-sub-gray rounded-xl focus:ring-2 focus:ring-primary-blue-mid" />
                        <input {...register('email')} placeholder="Your Email" className="w-full p-4 border border-text-sub-gray rounded-xl focus:ring-2 focus:ring-primary-blue-mid" />
                        <input {...register('subject')} placeholder="Subject" className="w-full p-4 border border-text-sub-gray rounded-xl focus:ring-2 focus:ring-primary-blue-mid" />
                        <textarea {...register('message')} placeholder="Your Message" rows={6} className="w-full p-4 border border-text-sub-gray rounded-xl focus:ring-2 focus:ring-primary-blue-mid" />
                        <button type="submit" className="w-full bg-primary-blue-mid text-bg-white py-4 rounded-xl font-bold hover:shadow-lg transition">Submit</button>
                    </motion.form>
                    {/* Right Alternatives + Map */}
                    <motion.div variants={childVariants} className="w-full md:w-1/2 space-y-8">
                        <h2 className="text-3xl font-bold text-text-dark-gray">Alternative Contact Methods</h2>
                        <div className="space-y-4">
                            <div className="flex items-center bg-bg-light-gray p-4 rounded-xl shadow hover:bg-primary-blue-light/20 transition">
                                <FaEnvelope className="text-primary-blue-mid text-2xl mr-4" />
                                <p>support@tikiti.store</p>
                            </div>
                            <div className="flex items-center bg-bg-light-gray p-4 rounded-xl shadow hover:bg-primary-blue-light/20 transition">
                                <FaPhone className="text-primary-blue-mid text-2xl mr-4" />
                                <p>+1 (555) 123-4567</p>
                            </div>
                            <div className="flex items-center bg-bg-light-gray p-4 rounded-xl shadow hover:bg-primary-blue-light/20 transition">
                                <FaUsers className="text-primary-blue-mid text-2xl mr-4" />
                                <p>Connect with us on social media</p>
                            </div>
                        </div>
                        <h2 className="text-3xl font-bold text-text-dark-gray mt-8">Our Location</h2>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.3420349647!2d-122.419416!3d37.77493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan+Francisco%2C+CA!5e0!3m2!1sen!2sus!4v1492693856823"
                            width="100%"
                            height="300"
                            className="rounded-xl shadow-lg"
                            allowFullScreen
                            loading="lazy"
                        ></iframe>
                    </motion.div>
                </div>
            </motion.section>
            <Footer />
        </div>
    );
}