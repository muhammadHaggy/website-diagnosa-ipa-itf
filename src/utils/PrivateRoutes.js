import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { getToken, getUser } from './authUtils';

// handle the private routes
const PrivateRoutes = () => {
    console.log(getToken())
  return getUser() ? <Outlet /> : <Navigate to="auth/login" />
}

export default PrivateRoutes;