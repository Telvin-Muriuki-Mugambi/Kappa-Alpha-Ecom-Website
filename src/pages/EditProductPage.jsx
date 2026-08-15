import React, { useState } from 'react';
import '../styles/admin.css';
import { useProducts } from '../hooks/ProductContext';

function EditProductPage() {
  const { updateProduct } = useProducts();

  const [form, setForm] = useState({
    productId: '',
    name: '',
    description: '',
    category: '',
    origin: '',
    price: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { productId, name, description, category, origin, price } = form;
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
        setForm({ productId: '', name: '', description: '', category: '', origin: '', price: '' });
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
          <h3>EDIT PRODUCT</h3>
        </div>

        <div className="field-group">
          <span className="field-icon">#</span>
          <input
            type="text"
            name="productId"
            placeholder="Car ID"
            value={form.productId}
            onChange={handleChange}
            required
          />
        </div>

        <div className="field-group">
          <span className="field-icon">Car Name</span>
          <input
            type="text"
            name="name"
            placeholder="Edit the new name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="field-group">
          <span className="field-icon">Car Description</span>
          <input
            type="text"
            name="description"
            placeholder="Edit the new description"
            value={form.description}
            onChange={handleChange}
            required
          />
        </div>

        <div className="field-group">
          <span className="field-icon">Category</span>
          <input
            type="text"
            name="category"
            placeholder="Edit the new category"
            value={form.category}
            onChange={handleChange}
            required
          />
        </div>

        <div className="field-group">
          <span className="field-icon">Origin</span>
          <input
            type="text"
            name="origin"
            placeholder="Edit the new origin"
            value={form.origin}
            onChange={handleChange}
            required
          />
        </div>

        <div className="field-group">
          <span className="field-icon">Car Price</span>
          <input
            type="number"
            name="price"
            placeholder="New Price"
            value={form.price}
            onChange={handleChange}
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