import { Outlet } from 'react-router-dom';
import { LayoutStyle } from './Layout.styled';
import Header from '../Header/Header';
// import Modal from '../Modal/Modal';

export default function Layout() {
  return (
    <LayoutStyle>
      {/* <Modal /> */}
      <Header />
      <Outlet />
    </LayoutStyle>
  );
}
