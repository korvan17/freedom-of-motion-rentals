import { useState } from 'react';
import ButtonHeader from '../ButoonHeader/ButtonHeader';
import DropDownMenu from '../DropDownMenu/DropDownMenu';
import {
  FormMileage,
  HeaderCatalogStyle,
  InputStyled,
  Search,
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
    if (from && to) {
      dispatch(setMileage([from, to]));
    } else {
      alert('Fill in both fields');
    }
  }

  function togleMenu() {
    setOpenMenu(!openMenu);
  }
  function togleMenuTo() {
    setOpenMenuTo(!openMenuTo);
  }

  return (
    <HeaderCatalogStyle>
      <div className={`menu make`}>
        <p className="title">Car brand</p>
        <ButtonHeader togleMenu={togleMenu} rotate={openMenu}>
          {brand === 'All' ? 'Enter the text' : brand}
        </ButtonHeader>
        <Transition in={openMenu} timeout={300} unmountOnExit={true}>
          {state => (
            <div className={`menuBlock ${state}`}>
              <DropDownMenu
                arr={makes}
                setFunction={setBrand}
                closeMenu={togleMenu}
              />
            </div>
          )}
        </Transition>
      </div>
      <div className="menu price">
        <p className="title">Price/ 1 hour</p>
        <ButtonHeader togleMenu={togleMenuTo} rotate={openMenuTo}>
          To {priceHour === 'All' ? '' : priceHour} $
        </ButtonHeader>
        <Transition in={openMenuTo} timeout={300} unmountOnExit={true}>
          {state => (
            <div className={`menuBlock ${state}`}>
              <DropDownMenu
                arr={price()}
                setFunction={setPrice}
                closeMenu={togleMenuTo}
              />
            </div>
          )}
        </Transition>
      </div>
      <div className="menu mileage">
        <p className="title">Сar mileage / km</p>
        <FormMileage onSubmit={handleSubmit}>
          <InputStyled
            type="text"
            value={from}
            onChange={e => inputChange(e, 1)}
          />
          <InputStyled
            type="text"
            value={to}
            onChange={e => inputChange(e, 2)}
            className="right"
          />
          <Search type="submit" disabled={!from || !to}>
            Search
          </Search>
        </FormMileage>
      </div>
    </HeaderCatalogStyle>
  );
}
