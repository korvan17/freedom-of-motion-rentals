import { Outlet } from 'react-router-dom';
import { LayoutStyle } from './Layout.styled';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export default function Layout() {
  return (
    <LayoutStyle>
      <div>
        <Header />
        <Outlet />
      </div>
      <Footer />
    </LayoutStyle>
  );
}
