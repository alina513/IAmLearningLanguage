import { Suspense } from 'react';
import { AppBar } from '../components/AppBar/AppBar';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

export const Layout = () => {
  return (
    <>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster />
    </>
  );
};
