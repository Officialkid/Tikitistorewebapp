import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import Home from './pages/Home';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';
import ContactUs from './pages/ContactUs';
import CreateEvent from './pages/CreateEvent';
import MyTickets from './pages/MyTickets';
import OrderConfirmed from './pages/OrderConfirmed';
import EventDetails from './pages/EventDetails'; // New
import Cart from './pages/Cart'; // New
import './index.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/events" element={<Home />} />
          <Route path="/events/:id" element={<EventDetails />} /> {/* New */}
          <Route path="/cart" element={<Cart />} /> {/* New */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/organize" element={<CreateEvent />} />
          <Route path="/my-tickets" element={<MyTickets />} />
          <Route path="/order-confirmed" element={<OrderConfirmed />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;