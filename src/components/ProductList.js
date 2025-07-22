import { useState, useEffect } from 'react';
import axios from 'axios';
import API_BASE_URL from '../config/api';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      console.log('Fetching from:', `${API_BASE_URL}/api/products`);
      const response = await axios.get(`${API_BASE_URL}/api/products`);
      console.log('Products received:', response.data);
      setProducts(response.data);
      setError(null);
    } catch (error) {
      console.error('Error fetching products:', error);
      setError('Failed to load products');
    } finally {
      setLoading(false);
    }
  };

  const addToCart = async (productId) => {
    try {
      await axios.post(`${API_BASE_URL}/api/cart`, { productId, quantity: 1 });
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  if (loading) return <div>Loading products...</div>;
  if (error) return <div>Error: {error}</div>;
  if (products.length === 0) return <div>No products found</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map(product => (
        <div key={product._id} className="bg-white rounded-lg shadow-md p-4">
          {product.image && (
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
          )}
          <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
          <p className="text-gray-600 mb-2">{product.description}</p>
          <p className="text-xl font-bold text-green-600 mb-4">${product.price}</p>
          <button 
            onClick={() => addToCart(product._id)}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;


