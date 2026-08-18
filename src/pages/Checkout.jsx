import { useState } from "react";
import { useNavigate } from "react-router";
import useCart from "../hooks/AddToCart";
import Toast from "../component/Toast";

export default function Checkout(){
    const {checkedItems, totalPrice} = useCart();
    const [showToast, setShowToast] = useState(false);
    console.log(checkedItems.length)
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

    }
    return (
        <section className="admin-page form-section">

            <h2 className="section-title">Checkout Page</h2>
            <div className="admin-form">
               {/* Add the items that have been shopped */}
            </div>
            <form onSubmit={handleCheckout} className="admin-form">
            
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