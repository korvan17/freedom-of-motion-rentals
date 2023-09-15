import { Outlet } from 'react-router-dom';
import { LayoutStyle } from './Layout.styled';
import Header from '../Header/Header';

export default function Layout() {
  return (
    <LayoutStyle>
      <Header />
      <Outlet />
    </LayoutStyle>
  );
}
