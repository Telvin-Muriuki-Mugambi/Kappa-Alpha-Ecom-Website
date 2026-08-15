import React, { useState, useEffect } from 'react';
import '../styles/admin.css';

function ProductListPage() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch products');
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setError(null);
      })
      .catch((err) => setError(err.message));
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:3000/products/${id}`, {
      method: 'DELETE'
    })
      .then(() => {
        setProducts(products.filter((item) => item.id !== id));
      })
      .catch((err) => console.error('Error deleting product:', err));
  };

  return (
    <section className="list-section">
      <h2 className="section-title">Product List</h2>

      {error ? (
        <div className="error-message">
          <p>⚠️ {error}. Ensure your JSON server is running on port 3000.</p>
        </div>
      ) : (
        <div className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <h3>{product.name || 'Vehicle Item'}</h3>
              <p className="description">{product.description || 'No description available.'}</p>
              <p className="price">${product.price}</p>
              
              <div className="card-buttons">
                <button className="btn-delete" onClick={() => handleDelete(product.id)}>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default ProductListPage;