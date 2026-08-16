import { useState } from 'react'
import "../styles/Product.css";
import { useProducts } from '../hooks/ProductContext';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
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
        <span className='shopping-cart' onClick={() => console.log("Shopping cart clicked")}>
          <ShoppingCartOutlinedIcon style={{color:'green'}}/>
        </span>
        
      </div>
      <div className='cards-grid'>
        {displayedProducts.map((product) => (
          <div key={product.id} className='card'>
            <h2>{product.name}</h2>
        <p className='description'>Description: {product.description}</p>
            <p className='price'>Price: {product.price.toFixed(2)} KES</p>
            <p className='category'>Category: {product.category}</p>
            <p className='origin'>Origin: {product.origin}</p>
            <span className='add-to-cart' onClick={() => console.log(`${product.name} was added to the shopping cart`)}>
              <AddCircleOutlinedIcon />
            </span>
            
          </div>
        ))}
      </div>
    </div>
  )
}

export default Productcard

