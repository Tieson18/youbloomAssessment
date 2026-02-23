import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Main from './pages/Main';
import { useAuthContext } from './context/AuthContext';
import Detail from './pages/Detail';

function App() {
  const { isAuthenticated } = useAuthContext();

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={isAuthenticated ? <Navigate to="/main" /> : <Navigate to="/login" />}
      />
      <Route
        path="/main"
        element={isAuthenticated ? <Main /> : <Navigate to="/login" />}
      />
      <Route
        path="/detail/:id"
        element={isAuthenticated ? <Detail /> : <Navigate to="/login" />}
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;