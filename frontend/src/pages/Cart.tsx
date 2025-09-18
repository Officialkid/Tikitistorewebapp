import { useCart } from '../contexts/CartContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
    const { cart } = useCart();
    const navigate = useNavigate();

    const total = cart.reduce((sum, item) => sum + parseFloat(item.price.replace('$', '')) || 0, 0);

    const handleCheckout = () => {
        // Mock payment
        navigate('/order-confirmed');
    };

    return (
        <div className="min-h-screen bg-bg-white">
            <Navbar />
            <section className="container mx-auto py-12">
                <h1 className="text-4xl font-bold mb-8">Your Cart</h1>
                {cart.length === 0 ? (
                    <p className="text-text-sub-gray">Cart is empty.</p>
                ) : (
                    <div className="space-y-4">
                        {cart.map((item, index) => (
                            <div key={index} className="bg-bg-light-gray p-4 rounded-xl flex justify-between">
                                <span>{item.title}</span>
                                <span>{item.price}</span>
                            </div>
                        ))}
                        <p className="text-xl font-bold mt-4">Total: ${total.toFixed(2)}</p>
                        <button onClick={handleCheckout} className="bg-primary-blue-mid text-bg-white py-3 px-6 rounded-full mt-4">Proceed to Checkout</button>
                    </div>
                )}
            </section>
            <Footer />
        </div>
    );
}