import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);
const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD = "admin101";

export function AuthProvider({ children }) {
    const [role, setRole] = useState();

    const login = (username, password) => {
        if (password === ADMIN_PASSWORD && username === ADMIN_USERNAME) {
            setRole("admin");
            return "admin";
        } else {
            setRole("user");
            return "user";
        }
    };


    const logout = () => setRole("guest");

    return (
        <AuthContext.Provider value={{ role, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}