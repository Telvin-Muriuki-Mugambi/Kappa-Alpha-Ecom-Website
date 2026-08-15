import React, { useState } from 'react';
import Header from '../component/Header';
import '../styles/admin.css';

function AddProductPage() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    origin: '',
    price: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:3000/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('Product added:', data);
        setFormData({ name: '', description: '', origin: '', price: '' });
      })
      .catch((err) => console.error('Error adding product:', err));
  };

  return (
    <section className="admin-page form-section">
      <Header />
      <h2 className="section-title">Add Product</h2>

      <form onSubmit={handleSubmit} className="admin-form">
        <div className="form-title">
          <span className="icon">🏎️</span>
          <h3>ADD PRODUCT</h3>
        </div>

        <div className="field-group">
          <span className="field-icon">🏷️</span>
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="field-group">
          <span className="field-icon">📄</span>
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>

        <div className="field-group">
          <span className="field-icon">🌐</span>
          <input
            type="text"
            name="origin"
            placeholder="Origin"
            value={formData.origin}
            onChange={handleChange}
            required
          />
        </div>

        <div className="field-group">
          <span className="field-icon">$</span>
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="submit-btn">
          SAVE
        </button>
      </form>
    </section>
  );
}

export default AddProductPage;