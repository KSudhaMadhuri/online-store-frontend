import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Admin from './pages/Admin';
import { testConnection } from './services/api';

function App() {
  useEffect(() => {
    testConnection()
      .then(data => console.log('Backend connected:', data))
      .catch(error => console.error('Backend connection failed:', error));
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;

<div className="bg-blue-500 text-white p-4 rounded-lg">
  <h1 className="text-2xl font-bold">Hello Tailwind!</h1>
</div>


