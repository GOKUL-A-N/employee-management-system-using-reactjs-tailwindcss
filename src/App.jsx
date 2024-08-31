import React from 'react';
import { Route , Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Salary from "./components/Salary";
import Login from './components/Login';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/Salary' element={<Salary />} />
    </Routes>
  )
}

export default App