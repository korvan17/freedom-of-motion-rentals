import { Outlet } from 'react-router-dom';
import { LayoutStyle } from './Layout.styled';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { useSelector } from 'react-redux';
import { getCarForModal, getIsModal } from '../../redux/filterSlice';
import Modal from '../Modal/Modal';

export default function Layout() {
  const isModal = useSelector(getIsModal);
  const getCar = useSelector(getCarForModal);
  return (
    <LayoutStyle>
      {isModal && <Modal car={getCar} />}
      <div>
        <Header />
        <Outlet />
      </div>
      <Footer />
    </LayoutStyle>
  );
}
