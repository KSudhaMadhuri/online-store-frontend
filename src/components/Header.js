import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={{
      backgroundColor: '#007bff',
      padding: '1rem',
      marginBottom: '2rem'
    }}>
      <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <Link to="/" style={{
          color: 'white',
          textDecoration: 'none',
          fontSize: '1.5rem',
          fontWeight: 'bold'
        }}>
          Online Store
        </Link>
        
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
            Home
          </Link>
          <Link to="/products" style={{ color: 'white', textDecoration: 'none' }}>
            Products
          </Link>
          <Link to="/cart" style={{ color: 'white', textDecoration: 'none' }}>
            Cart
          </Link>
          <Link to="/admin" style={{ color: 'white', textDecoration: 'none' }}>
            Admin
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
