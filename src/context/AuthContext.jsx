import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(() => localStorage.getItem('youbloom_auth') === 'true');

    const login = () => {
        localStorage.setItem('youbloom_auth', 'true');
        setIsAuthenticated(true);
    };

    const logout = () => {
        localStorage.removeItem('youbloom_auth');
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;

export const useAuthContext = () => useContext(AuthContext)