import { useState } from 'react'
import "../styles/Product.css";
import { useProducts } from '../hooks/ProductContext';

function Productcard() {
  const { products } = useProducts(); // Use of the products context
  const [searchQuery, setSearchQuery] = useState("");
  
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const displayedProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className='shop-page'>
        <input
          className='search-input'
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>
      <div className='cards-grid'>
        {displayedProducts.map((product) => (
          <div key={product.id} className='card'>
            <h2>{product.name}</h2>
        <p className='description'>Description: {product.description}</p>
            <p className='price'>Price: ${product.price.toFixed(2)}</p>
            <p className='category'>Category: {product.category}</p>
            <p className='origin'>Origin: {product.origin}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Productcard

