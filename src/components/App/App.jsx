import { Route, Routes } from 'react-router-dom';
import Layout from '../Layout/Laypout';
import CatalogPage from '../../pages/CatalogPage';
import FavoritesPage from '../../pages/FavoritesPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<CatalogPage />} />
        <Route path="catalog" element={<CatalogPage />} />
        <Route path="favorites" element={<FavoritesPage />} />
      </Route>
    </Routes>
  );
}
