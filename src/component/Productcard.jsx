import { useState } from 'react';
import '../styles/Product.css';
import { useProducts } from '../hooks/ProductContext';
import { useCart } from '../hooks/CartContext';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import { useNavigate } from 'react-router';

function Productcard() {
  const { products } = useProducts();
  const { cartItems, totalPrice, addToCart, removeFromCart, isCartOpen, toggleCart } = useCart();
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const displayedProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='shop-wrapper'>
      <div className='shop-page'>
        <input
          className='search-input'
          type='text'
          placeholder='Search products...'
          value={searchQuery}
          onChange={handleSearch}
        />

        <button
          type='button'
          className='shopping-cart'
          onClick={toggleCart}
          aria-label='Toggle cart'
        >
          <ShoppingCartOutlinedIcon style={{ color: '#136a48' }} />
          {cartItems.length > 0 && <span className='cart-count'>{cartItems.length}</span>}
        </button>
      </div>

      {isCartOpen && (
        <aside className='cart-panel'>
          <div className='cart-header'>
            <h3>Shopping Cart</h3>
            <button type='button' className='close-cart' onClick={toggleCart}>×</button>
          </div>

          {cartItems.length === 0 ? (
            <p className='empty-cart'>Your cart is empty.</p>
          ) : (
            <>
              <div className='cart-items'>
                {cartItems.map((item) => (
                  <div key={item.id} className='cart-item'>
                    <div>
                      <p className='cart-item-name'>{item.name}</p>
                      <p className='cart-item-meta'>Qty: {item.quantity}</p>
                    </div>
                    <div className='cart-item-right'>
                      <span>KES {Number(item.price * item.quantity).toFixed(2)}</span>
                      <button type='button' onClick={() => removeFromCart(item.id)}>Remove</button>
                    </div>
                  </div>
                ))}
              </div>

              <div className='cart-summary'>
                <span>Total</span>
                <strong>KES {Number(totalPrice).toFixed(2)}</strong>
              </div>

              <button type='button' className='checkout-btn' onClick={() => navigate('/checkout')}>Proceed to checkout</button>
            </>
          )}
        </aside>
      )}

      <div className='cards-grid'>
        {displayedProducts.map((product) => (
          <div key={product.id} className='card'>
            <h2>{product.name}</h2>
            <p className='description'>Description: {product.description}</p>
            <p className='price'>Price: {Number(product.price).toFixed(2)} KES</p>
            <p className='category'>Category: {product.category}</p>
            <p className='origin'>Origin: {product.origin}</p>

            <button
              type='button'
              className='add-to-cart'
              onClick={() => addToCart(product)}
              aria-label={`Add ${product.name} to cart`}
            >
              <AddCircleOutlinedIcon />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Productcard;

