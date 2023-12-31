import { useState } from 'react';
import ButtonHeader from '../ButoonHeader/ButtonHeader';
import DropDownMenu from '../DropDownMenu/DropDownMenu';
import {
  FormMileage,
  HeaderCatalogStyle,
  InputStyled,
  InputStyledRight,
  Label,
  MenuBlock,
  MenuMake,
  MenuPrice,
  RightLabel,
  Search,
  TitleMenu,
} from './HeaderCatalog.styled';
import { Transition } from 'react-transition-group';
import makes from '../../resource/makes.json';
import { useDispatch, useSelector } from 'react-redux';
import {
  getBrand,
  getPrice,
  setBrand,
  setMileage,
  setPrice,
} from '../../redux/filterSlice';

export default function HeaderCatalog() {
  const brand = useSelector(getBrand);
  const priceHour = useSelector(getPrice);
  const [openMenu, setOpenMenu] = useState(false);
  const [openMenuTo, setOpenMenuTo] = useState(false);
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const dispatch = useDispatch();

  function price() {
    const numbers = ['All'];
    for (let i = 10; i <= 150; i += 10) {
      numbers.push(i);
    }
    return numbers;
  }

  function inputChange(e, inputNumber) {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      if (inputNumber === 1) {
        setFrom(value);
      } else if (inputNumber === 2) {
        setTo(value);
      }
    } else {
      alert('Enter numbers only');
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(setMileage([from, to]));
  }

  function togleMenu() {
    setOpenMenu(!openMenu);
  }
  function togleMenuTo() {
    setOpenMenuTo(!openMenuTo);
  }

  return (
    <HeaderCatalogStyle>
      <MenuMake>
        <TitleMenu>Car brand</TitleMenu>
        <ButtonHeader togleMenu={togleMenu} rotate={openMenu}>
          {brand === 'All' ? 'Enter the text' : brand}
        </ButtonHeader>
        <Transition in={openMenu} timeout={300} unmountOnExit={true}>
          {state => (
            <MenuBlock className={state}>
              <DropDownMenu
                arr={makes}
                setFunction={setBrand}
                closeMenu={togleMenu}
                isMenuOpen={openMenu}
              />
            </MenuBlock>
          )}
        </Transition>
      </MenuMake>
      <MenuPrice>
        <TitleMenu>Price/ 1 hour</TitleMenu>
        <ButtonHeader togleMenu={togleMenuTo} rotate={openMenuTo}>
          To {priceHour === 'All' ? '' : priceHour} $
        </ButtonHeader>
        <Transition in={openMenuTo} timeout={300} unmountOnExit={true}>
          {state => (
            <MenuBlock className={state}>
              <DropDownMenu
                arr={price()}
                setFunction={setPrice}
                closeMenu={togleMenuTo}
                isMenuOpen={openMenuTo}
              />
            </MenuBlock>
          )}
        </Transition>
      </MenuPrice>
      <div>
        <TitleMenu>Сar mileage / km</TitleMenu>
        <FormMileage onSubmit={handleSubmit}>
          <Label>From</Label>
          <InputStyled
            type="text"
            value={from}
            onChange={e => inputChange(e, 1)}
          />
          <RightLabel>To</RightLabel>
          <InputStyledRight
            type="text"
            value={to}
            onChange={e => inputChange(e, 2)}
          />
          <Search type="submit">Search</Search>
        </FormMileage>
      </div>
    </HeaderCatalogStyle>
  );
}
