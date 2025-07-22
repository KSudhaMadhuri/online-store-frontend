import ProductList from '../components/ProductList';

function Products() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Products</h1>
          <p className="text-lg text-gray-600">Discover our amazing collection of products</p>
        </div>
        <ProductList />
      </div>
    </div>
  );
}

export default Products;

