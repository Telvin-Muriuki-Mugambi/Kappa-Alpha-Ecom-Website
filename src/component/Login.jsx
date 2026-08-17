import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/AuthProvider";

export default function Login() {
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const { login } = useAuth();
    const navigate = useNavigate();

    function handleLogin(event) {
        event.preventDefault();
        const userRole = login(password, username);

        if (userRole === "admin") {
            navigate("/admin", { replace: true });
        } else {
            navigate("/home", { replace: true });
        }
    }

    function proceedAsUser() {
        console.log("Clicked")
        login(""); // sets role to 'user'
        navigate("/home");
    }

    return (
        <section className="admin-page form-section">
        <h2 className="section-title">Login</h2>
        <form onSubmit={handleLogin} className="admin-form">
            <div className="field-group">
            <span className="field-icon">Username</span>
            <input
                type="text"
                name="username"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
            />
            </div>

            <div className="field-group">
            <span className="field-icon">Password</span>
            <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            </div>

            <button type="submit" className="submit-btn">
            Login
            </button>
            <div>
                <span style={{cursor:'pointer'}} onClick={() => proceedAsUser}><p>Back to Login</p></span>
            </div>
            
        </form>
        </section>

        
    );
}