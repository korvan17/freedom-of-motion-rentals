import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from '../Layout/Laypout';
import CatalogPage from '../../pages/CatalogPage';
import FavoritesPage from '../../pages/FavoritesPage';
import HomePage from '../../pages/HomePage';
import { useGetCarsQuery } from '../../redux/carSlice';

export default function App() {
  const { isSuccess } = useGetCarsQuery();
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="catalog" element={<CatalogPage />} />
        {isSuccess && <Route path="favorites" element={<FavoritesPage />} />}
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}
