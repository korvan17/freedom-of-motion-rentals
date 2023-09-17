import { Outlet } from 'react-router-dom';
import { LayoutStyle } from './Layout.styled';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Modal from '../Modal/Modal';

export default function Layout() {
  return (
    <LayoutStyle>
      <div>
        <Modal />
        <Header />
        <Outlet />
      </div>
      <Footer />
    </LayoutStyle>
  );
}
