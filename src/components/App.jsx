import React from "react";
import {Route, Routes} from 'react-router-dom';
import { lazy } from "react";
import {Layout} from '../components/Layout';

const HomePage = lazy(() => import('../pages/HomePage'));
const TeachersPage = lazy(() => import('../pages/TeachersPage'));
const FavoritesPage = lazy(() => import('../pages/FavoritesPage'))

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<HomePage/>}/>
      <Route path="/teachers" element={<TeachersPage/>}/>
      <Route path="/favorites" element={<FavoritesPage/>}/>
      <Route path="*" element={<HomePage/>}/>
      </Route>
    </Routes>
  );
};
