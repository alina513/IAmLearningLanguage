

import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { Layout } from '../components/Layout';
import { Reviews } from '../components/Reviews/Reviews';
import {PrivateRoute} from '../helpers/Privaateroute';
import { auth } from '../firebase';
import { useDispatch } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { addToken } from '../redux/authSlice';


const HomePage = lazy(() => import('../pages/HomePage'));
const TeachersPage = lazy(() => import('../pages/TeachersPage'));
const FavoritesPage = lazy(() => import('../pages/FavoritesPage'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        dispatch(addToken({ email: user.email, accessToken: user.accessToken }));
      }
    });

    return () => {
      unsubscribe();
    };
  }, [dispatch]);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/teachers" element={<TeachersPage />}>
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route
          path="/favorites"
          element={
            <PrivateRoute redirectTo="/" component={<FavoritesPage />} />
          }
        />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
};


