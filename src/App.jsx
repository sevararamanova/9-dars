
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/UserContext.jsx'; 
import Home from './components/home/Home.jsx'; 
import DeletedUsers from './components/deleteUsers/DeleteUser.jsx'; 
import './App.css';

const App = () => {
  return (
    <Router>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/deleted" element={<DeletedUsers />} />
        </Routes>
      </UserProvider>
    </Router>
  );
};

export default App;
