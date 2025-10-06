import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import AddProducts from './AddProducts';
import Dashboard from './Dashboard';

function AdminHome() {
  return (
    <div>
      <NavBar />

      <Routes>
        {/* Default route: Dashboard is shown immediately when admin logs in */}
        <Route index element={<Dashboard />} />

        {/* Add Products page */}
        <Route path="add-products" element={<AddProducts />} />
      </Routes>
    </div>
  );
}

export default AdminHome;
