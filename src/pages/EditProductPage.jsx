import React, { useState } from 'react';
import '../styles/admin.css';
import { useProducts } from '../hooks/ProductContext';

function EditProductPage() {
  const { updateProduct } = useProducts();

  const [productId, setProductId] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [origin, setOrigin] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!productId) return;

    const updated = {
      name,
      description,
      category,
      origin,
      price: Number(price)
    };

    try {
      const saved = await updateProduct(productId, updated);
      if (saved) {
        console.log('Product updated:', saved);
        // clear form
        setProductId('');
        setName('');
        setDescription('');
        setCategory('');
        setOrigin('');
        setPrice('');
      }
    } catch (err) {
      console.error('Error updating product:', err);
    }
  };

  return (
    <section className="admin-page form-section">
      <h2 className="section-title">Edit Product</h2>

      <form onSubmit={handleSubmit} className="admin-form">
        <div className="form-title">
          <span className="icon">✏️</span>
          <h3>EDIT PRODUCT</h3>
        </div>

        <div className="field-group">
          <span className="field-icon">#</span>
          <input
            type="text"
            placeholder="Product ID"
            value={productId}
            onChange={(e) => setProductId(e.target.value)}
            required
          />
        </div>

        <div className="field-group">
          <span className="field-icon">🏷️</span>
          <input
            type="text"
            placeholder="Edit the new name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="field-group">
          <span className="field-icon">📄</span>
          <input
            type="text"
            placeholder="Edit the new description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <div className="field-group">
          <span className="field-icon">📂</span>
          <input
            type="text"
            placeholder="Edit the new category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </div>

        <div className="field-group">
          <span className="field-icon">🌐</span>
          <input
            type="text"
            placeholder="Edit the new origin"
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
            required
          />
        </div>

        <div className="field-group">
          <span className="field-icon">$</span>
          <input
            type="number"
            placeholder="New Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="submit-btn">
          UPDATE PRODUCT
        </button>
      </form>
    </section>
  );
}

export default EditProductPage;