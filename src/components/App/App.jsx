import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from '../Layout/Laypout';
import CatalogPage from '../../pages/CatalogPage';
import FavoritesPage from '../../pages/FavoritesPage';
import HomePage from '../../pages/HomePage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="catalog" element={<CatalogPage />} />
        <Route path="favorites" element={<FavoritesPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}
