import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/AuthProvider";

export default function Login() {
    const [password, setPassword] = useState("");
    const { login } = useAuth();
    const navigate = useNavigate();

    function handleLogin(event) {
        event.preventDefault();
        const userRole = login(password);

        if (userRole === "admin") {
            navigate("/admin");
        } else {
            navigate("/home");
        }
    }

    function proceedAsUser() {
        login(""); // sets role to 'user'
        navigate("/home");
    }

    return (
        <form onSubmit={handleLogin}>
            <label>Enter the password</label>
            <input
                type="password"
                placeholder="Enter the password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
            <button type="button" onClick={proceedAsUser}>
                Proceed as normal user
            </button>
        </form>
    );
}