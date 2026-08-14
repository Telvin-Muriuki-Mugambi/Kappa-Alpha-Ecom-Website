import { useState, useEffect } from 'react';

const API = 'http://localhost:3001/products';

export function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const res = await fetch(API);
      if (!res.ok) throw new Error('Could not fetch products');
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const addProduct = async (newProduct) => {
    try {
      const res = await fetch(API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newProduct),
      });
      if (!res.ok) throw new Error('Failed to create product');
      const data = await res.json();
      setProducts((prev) => [...prev, data]);
      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  };

  const updateProduct = async (id, patchData) => {
    try {
      const res = await fetch(`${API}/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(patchData),
      });
      if (!res.ok) throw new Error('Failed to update product');
      const data = await res.json();
      setProducts((prev) => prev.map((p) => (p.id === id ? data : p)));
      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  };

  const deleteProduct = async (id) => {
    try {
      const res = await fetch(`${API}/${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Failed to delete product');
      setProducts((prev) => prev.filter((p) => p.id !== id));
      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  };

  return { products, loading, error, addProduct, updateProduct, deleteProduct };
}