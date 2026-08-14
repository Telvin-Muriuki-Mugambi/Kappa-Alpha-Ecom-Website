import React, { useState } from 'react';

function EditProductPage() {
  const [productId, setProductId] = useState('');
  const [price, setPrice] = useState('');

  const handleUpdatePrice = (e) => {
    e.preventDefault();
    if (!productId) return;

    fetch(`http://localhost:3000/products/${productId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ price: Number(price) })
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('Price updated:', data);
        setPrice('');
        setProductId('');
      })
      .catch((err) => console.error('Error updating price:', err));
  };

  return (
    <section className="form-section">
      <h2 className="section-title">Edit Product</h2>

      <form onSubmit={handleUpdatePrice} className="admin-form">
        <div className="form-title">
          <span className="icon">✏️</span>
          <h3>EDIT PRODUCT PRICE</h3>
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
          UPDATE PRICE
        </button>
      </form>
    </section>
  );
}

export default EditProductPage;