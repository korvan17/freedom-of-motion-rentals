import { useDispatch } from 'react-redux';
import { MenuStyled } from './DropDownMenu.styled';
import { useRef } from 'react';
import useClickOutside from '../useClickOutside/useClickOutside';

export default function DropDownMenu({
  arr,
  setFunction,
  closeMenu,
  isMenuOpen,
}) {
  const dispatch = useDispatch();
  const menuRef = useRef(null);
  function getValue(e) {
    closeMenu();
    dispatch(setFunction(e.target.textContent));
  }

  useClickOutside(menuRef, () => {
    if (isMenuOpen) {
      setTimeout(() => closeMenu(), 100);
    }
  });

  return (
    <MenuStyled ref={menuRef}>
      {arr.map((item, i) => (
        <li key={i}>
          <button type="button" onClick={getValue}>
            {item}
          </button>
        </li>
      ))}
    </MenuStyled>
  );
}
