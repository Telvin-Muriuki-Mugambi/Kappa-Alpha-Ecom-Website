import { useState } from "react";
import { useNavigate } from "react-router";

export default function Checkout(){
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
        navigate('/products')
    }
    return (
        <section className="admin-page form-section">

            <h2 className="section-title">Checkout Page</h2>

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

                <button type="submit" className="submit-btn">
                Order
                </button>
            </form>
    </section>
    )
}