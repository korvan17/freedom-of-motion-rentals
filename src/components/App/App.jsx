import { Route, Routes } from 'react-router-dom';
import Carlist from '../CarList/CarList';
import Layout from '../Layout/Laypout';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Carlist />} />
        {/* <Route path="shop" element={<Shop />} /> */}
      </Route>
    </Routes>
  );
}
