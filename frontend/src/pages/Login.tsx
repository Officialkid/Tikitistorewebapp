import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { FaUser, FaLock, FaGoogle, FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import { login } from '../services/api'; // Mock API

interface FormData { username: string; password: string; }

const formVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const inputVariants = {
    focus: { scale: 1.05, transition: { duration: 0.3 } },
};

export default function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

    const onSubmit = async (data: FormData) => {
        try {
            await login(data);
            // Redirect or show success
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-primary-blue-light to-bg-light-gray">
            <Navbar />
            <div className="container mx-auto py-20 flex justify-center">
                <motion.div
                    className="flex bg-bg-white rounded-3xl shadow-2xl overflow-hidden max-w-4xl w-full"
                    initial="hidden"
                    animate="visible"
                    variants={formVariants}
                >
                    {/* Left Gradient Section */}
                    <div className="w-1/2 bg-gradient-to-br from-primary-blue-mid to-primary-blue-dark p-12 text-bg-white flex flex-col justify-center">
                        <motion.h1
                            className="text-4xl font-bold mb-4"
                            animate={{ y: [0, -10, 0], transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' } }}
                        >
                            Hello, Welcome!
                        </motion.h1>
                        <p className="text-lg mb-6">Don't have an account?</p>
                        <button
                            onClick={() => window.location.href = '/register'}
                            className="border-2 border-bg-white py-3 px-6 rounded-full font-bold hover:bg-bg-white/20 transition"
                        >
                            Register
                        </button>
                    </div>
                    {/* Right Form Section */}
                    <div className="w-1/2 p-12">
                        <h2 className="text-3xl font-bold text-text-dark-gray mb-8">Login</h2>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            <motion.div variants={inputVariants} whileFocus="focus" className="relative">
                                <input
                                    {...register('username', { required: true })}
                                    placeholder="Username"
                                    className="w-full p-4 border border-text-sub-gray rounded-xl focus:ring-2 focus:ring-primary-blue-mid"
                                />
                                <FaUser className="absolute right-4 top-1/2 -translate-y-1/2 text-text-sub-gray" />
                                {errors.username && <p className="text-red-500 text-sm mt-1">Username required</p>}
                            </motion.div>
                            <motion.div variants={inputVariants} whileFocus="focus" className="relative">
                                <input
                                    {...register('password', { required: true })}
                                    type="password"
                                    placeholder="Password"
                                    className="w-full p-4 border border-text-sub-gray rounded-xl focus:ring-2 focus:ring-primary-blue-mid"
                                />
                                <FaLock className="absolute right-4 top-1/2 -translate-y-1/2 text-text-sub-gray" />
                                {errors.password && <p className="text-red-500 text-sm mt-1">Password required</p>}
                            </motion.div>
                            <a href="/forgot" className="text-primary-blue-mid text-sm hover:underline">Forgot Password?</a>
                            <button type="submit" className="w-full bg-primary-blue-mid text-bg-white py-4 rounded-xl font-bold hover:shadow-lg transition">
                                Login
                            </button>
                        </form>
                        <p className="text-center text-text-sub-gray my-6">or login with social platforms</p>
                        <div className="flex justify-center space-x-4">
                            <button className="bg-bg-light-gray p-3 rounded-full hover:bg-primary-blue-light/20 transition"><FaGoogle className="text-2xl text-primary-blue-mid" /></button>
                            <button className="bg-bg-light-gray p-3 rounded-full hover:bg-primary-blue-light/20 transition"><FaFacebookF className="text-2xl text-primary-blue-mid" /></button>
                            <button className="bg-bg-light-gray p-3 rounded-full hover:bg-primary-blue-light/20 transition"><FaGithub className="text-2xl text-primary-blue-mid" /></button>
                            <button className="bg-bg-light-gray p-3 rounded-full hover:bg-primary-blue-light/20 transition"><FaLinkedinIn className="text-2xl text-primary-blue-mid" /></button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}