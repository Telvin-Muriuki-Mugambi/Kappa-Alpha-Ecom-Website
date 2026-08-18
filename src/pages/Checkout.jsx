import { useState } from "react";
import { useNavigate } from "react-router";
import { useCart } from "../hooks/CartContext";
import Toast from "../component/Toast";

export default function Checkout(){
    const {cartItems, totalPrice, clearCart} = useCart();
    const [showToast, setShowToast] = useState(false);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        address: ''
    });
    
    const handleChange = (e) => {
        setFormData({
        ...formData,
        [e.target.name]: e.target.value
        });
    };

    function handleCheckout(event){
        event.preventDefault();
        console.log(`The user ${formData.firstName} has made an order to the delivery location ${formData.address}`);
        clearCart();
    }
    return (
        <section className="admin-page form-section">

            <h2 className="section-title">Checkout Page</h2>
            
            {/* Cart Items Display */}
            {cartItems.length > 0 && (
                <div className="admin-form cart-summary">
                    <h3 className="cart-title">Order Summary</h3>
                    <table className="cart-items-table">
                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Unit Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td>Ksh {item.price.toFixed(2)}</td>
                                    <td>{item.quantity}</td>
                                    <td>Ksh {(item.price * item.quantity).toFixed(2)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="cart-total">
                        <span className="total-label">Grand Total: </span>
                        <span className="total-price"> Ksh {totalPrice.toFixed(2)}</span>
                    </div>
                </div>
            )}
            
            {cartItems.length === 0 && (
                <div className="admin-form empty-cart">
                    <p className="empty-cart-message">Your cart is empty. Please add items before proceeding to checkout.</p>
                </div>
            )}

            <form onSubmit={handleCheckout} className="admin-form">
                <h3 className="cart-title">Delivery Information</h3>
                <div className="field-group">
                <span className="field-icon">First Name: </span>
                <input
                    type="text"
                    name="firstName"
                    placeholder="Enter your first name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                />
                </div>

                <div className="field-group">
                <span className="field-icon">Last Name</span>
                <input
                    type="text"
                    name="lastName"
                    placeholder="Enter your last name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                />
                </div>

                <div className="field-group">
                <span className="field-icon">Phone Number</span>
                <input
                    type="text"
                    name="phoneNumber"
                    placeholder="Enter your phone number"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                />
                </div>

                <div className="field-group">
                <span className="field-icon">Address</span>
                <input
                    type="text"
                    name="address"
                    placeholder="Enter your address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                />
                </div>

                <button type="submit" className="submit-btn" onClick={() => setShowToast(true)}>
                Order
                </button>
            </form>
            {showToast && (
                <div style={{maxWidth: '560px', margin: '1rem auto'}}>
                    <Toast
                        message={"Order has been placed successfully. Thank you for choosing Kappa Alpha Wellness Store"}
                        duration={3000}
                        onClose={() => {setShowToast(false); navigate('/products')} }
                    />
                </div>
            )}
    </section>
    )
}