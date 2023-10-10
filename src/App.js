import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile.jsx";
import Register from "./pages/register/Register";

function App() {
  return (
    <BrowserRouter> {/* Wrap your entire app with BrowserRouter */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profile/:id' element={<Profile />} />
        <Route path="*" element={(<h1>Page not found</h1>)}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
