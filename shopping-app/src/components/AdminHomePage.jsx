import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import AddProducts from './AddProducts';
import Dashboard from './Dashboard';
import ViewProduct from "./ViewProduct"; 
import UpdateProduct from './UpdateProduct';


function AdminHome() {
  return (
    <div>
      <NavBar />

      <Routes>
        {/* Default route: Dashboard is shown immediately when admin logs in */}
        <Route index element={<Dashboard />} />

        {/* Add Products page */}
        <Route path="add-products" element={<AddProducts />} />

        {/* View Product by ID */}
        <Route path="ViewProduct/:id" element={<ViewProduct />} />
        {/* update product page  */}
        <Route path="/updateproduct/:id" element={<UpdateProduct />} />

      </Routes>
    </div>
  );
}

export default AdminHome;
