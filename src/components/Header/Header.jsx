import { useState } from 'react';
import ButtonHeader from '../ButoonHeader/ButtonHeader';
import DropDownMenu from '../DropDownMenu/DropDownMenu';
import { HeaderStyle, InputStyled } from './Header.styled';
import { Transition } from 'react-transition-group';
import makes from '../../resource/makes.json';
import { useSelector } from 'react-redux';
import {
  getBrand,
  getPrice,
  setBrand,
  setPrice,
} from '../../redux/filterSlice';

export default function Header() {
  const brand = useSelector(getBrand);
  const priceHour = useSelector(getPrice);

  function price() {
    const numbers = ['All'];
    for (let i = 10; i <= 150; i += 10) {
      numbers.push(i);
    }
    return numbers;
  }
  const [openMenu, setOpenMenu] = useState(false);
  const [openMenuTo, setOpenMenuTo] = useState(false);
  function togleMenu() {
    setOpenMenu(!openMenu);
  }
  function togleMenuTo() {
    setOpenMenuTo(!openMenuTo);
  }

  return (
    <HeaderStyle>
      <div className={`menuMake`}>
        <ButtonHeader togleMenu={togleMenu} rotate={openMenu}>
          {brand === 'All' ? 'Enter the text' : brand}
        </ButtonHeader>
        <Transition in={openMenu} timeout={300} unmountOnExit={true}>
          {state => (
            <div className={`menuBlock ${state}`}>
              <DropDownMenu arr={makes} setFunction={setBrand} />
            </div>
          )}
        </Transition>
      </div>
      <div className="menuPrice">
        <ButtonHeader togleMenu={togleMenuTo} rotate={openMenuTo}>
          To {priceHour === 'All' ? '' : priceHour} $
        </ButtonHeader>
        <Transition in={openMenuTo} timeout={300} unmountOnExit={true}>
          {state => (
            <div className={`menuBlock ${state}`}>
              <DropDownMenu arr={price()} setFunction={setPrice} />
            </div>
          )}
        </Transition>
      </div>
      <InputStyled type="text" />
      <InputStyled type="text" className="right" />
    </HeaderStyle>
  );
}
