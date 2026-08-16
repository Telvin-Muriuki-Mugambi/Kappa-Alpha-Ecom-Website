import React, { useState } from 'react';
import '../styles/admin.css';
import { useProducts } from '../hooks/ProductContext';

function EditProductPage() {
  const { products, updateProduct } = useProducts();
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

  const handleSelect = (e) => {
    const selectedId = e.target.value;
    const product = products.find((p) => String(p.id) === String(selectedId));
    console.log(`The selected product is ${product.name}`)
    if (!product) {
      setForm({ productId: '', name: '', description: '', category: '', origin: '', price: '' });
      return;
    }

    setForm({
      productId: product.id,
      name: product.name || '',
      description: product.description || '',
      category: product.category || '',
      origin: product.origin || '',
      price: product.price ?? ''
    });
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
       

        <div className="field-group">
          <span className="field-icon">Select</span>
          <select style={{maxWidth:'370px'}}name="productSelect" value={form.productId} onChange={handleSelect} required>
            <option value="">-- choose product --</option>
            {products && products.map((p) => (
              <option key={p.id} value={p.id}>{p.name}</option>
            ))}
          </select>
        </div>

        <div className="field-group">
          <span className="field-icon">Name</span>
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
          <span className="field-icon">Description</span>
          <textarea
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
          <span className="field-icon">Price</span>
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