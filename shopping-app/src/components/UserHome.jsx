import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UserNavBar from "./UserNavBar";
import UserProducts from './UserProducts';
import ViewProduct from "./ViewProduct";


function UserHome() {
  return (
    <div>
      <UserNavBar />
      <Routes>
        {/* Default route → show all products */}
        <Route index element={<UserProducts />} />

        {/* View single product */}
        <Route path="view/:id" element={<ViewProduct />} />
      </Routes>
    </div>
  );
}

export default UserHome;
