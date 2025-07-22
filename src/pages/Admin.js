import { useState } from 'react';
import API_BASE_URL from '../config/api';

function Admin() {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    image: '',
    stock: ''
  });
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const response = await fetch(`${API_BASE_URL}/api/products`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product)
      });

      if (!response.ok) {
        throw new Error('Failed to add product');
      }

      setMessage('Product added successfully!');
      setProduct({
        name: '',
        description: '',
        price: '',
        category: '',
        image: '',
        stock: ''
      });
    } catch (error) {
      setMessage('Error adding product: ' + error.message);
    }
    setLoading(false);
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h1>Add New Product</h1>
      
      {message && (
        <div style={{
          padding: '10px',
          marginBottom: '20px',
          borderRadius: '4px',
          backgroundColor: message.includes('Error') ? '#f8d7da' : '#d4edda',
          color: message.includes('Error') ? '#721c24' : '#155724',
          border: `1px solid ${message.includes('Error') ? '#f5c6cb' : '#c3e6cb'}`
        }}>
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <div>
          <label>Product Name *</label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              fontSize: '16px'
            }}
          />
        </div>

        <div>
          <label>Description</label>
          <textarea
            name="description"
            value={product.description}
            onChange={handleChange}
            rows="3"
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              fontSize: '16px',
              resize: 'vertical'
            }}
          />
        </div>

        <div>
          <label>Price *</label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            step="0.01"
            min="0"
            required
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              fontSize: '16px'
            }}
          />
        </div>

        <div>
          <label>Category</label>
          <select
            name="category"
            value={product.category}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              fontSize: '16px'
            }}
          >
            <option value="">Select Category</option>
            <option value="Electronics">Electronics</option>
            <option value="Clothing">Clothing</option>
            <option value="Home">Home & Garden</option>
            <option value="Sports">Sports</option>
            <option value="Books">Books</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label>Image URL</label>
          <input
            type="url"
            name="image"
            value={product.image}
            onChange={handleChange}
            placeholder="https://example.com/image.jpg"
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              fontSize: '16px'
            }}
          />
        </div>

        <div>
          <label>Stock Quantity</label>
          <input
            type="number"
            name="stock"
            value={product.stock}
            onChange={handleChange}
            min="0"
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              fontSize: '16px'
            }}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          style={{
            backgroundColor: loading ? '#6c757d' : '#007bff',
            color: 'white',
            border: 'none',
            padding: '12px 24px',
            borderRadius: '4px',
            fontSize: '16px',
            cursor: loading ? 'not-allowed' : 'pointer',
            marginTop: '10px'
          }}
        >
          {loading ? 'Adding Product...' : 'Add Product'}
        </button>
      </form>
    </div>
  );
}

export default Admin;

