import React, { useState } from 'react';
import Header from '../component/Header';
import '../styles/admin.css';
import { useProducts } from '../hooks/ProductContext';

function AddProductPage() {
  const {addProduct} = useProducts();
  
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    origin: '',
    price: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const productToAdd = {
        ...formData,
        price: parseFloat(formData.price)
      };

      const saved = await addProduct(productToAdd);

      if (saved) {
        console.log('Product added:', saved);
        setFormData({ name: '', description: '', origin: '', category:'', price: '' });
      }
    } catch (err) {
      console.error('Error adding product:', err);
    }
  };
  console.log(`This is new data added ${formData}`);

  return (
    <section className="admin-page form-section">

      <h2 className="section-title">Add Product</h2>

      <form onSubmit={handleSubmit} className="admin-form">
        <div className="form-title">
          <h3>ADD PRODUCT</h3>
        </div>

        <div className="field-group">
          <span className="field-icon">Name</span>
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
          <span className="field-icon">Description</span>
          <textarea
            type="text"
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>

        <div className="field-group">
          <span className="field-icon">Origin</span>
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
          <span className="field-icon">Category</span>
          <input
            type="text"
            name="category"
            placeholder="Category"
            value={formData.category}
            onChange={handleChange}
            required
          />
        </div>

        <div className="field-group">
          <span className="field-icon">Price</span>
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