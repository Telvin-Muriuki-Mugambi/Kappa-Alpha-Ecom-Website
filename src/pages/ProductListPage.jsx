import '../styles/admin.css';
import { useProducts } from '../hooks/ProductContext';

function ProductListPage() {
  const {products, error, deleteProduct} = useProducts();

  return (
    <section className="admin-page list-section">
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
              <p className="price">{product.price} KES</p>
              
              <div className="card-buttons">
                <button className="btn-delete" onClick={() => deleteProduct(product.id)}>
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