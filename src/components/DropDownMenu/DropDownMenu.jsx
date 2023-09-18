import { useDispatch } from 'react-redux';
import { MenuStyled } from './DropDownMenu.styled';

export default function DropDownMenu({ arr, setFunction, closeMenu }) {
  const dispatch = useDispatch();
  function getValue(e) {
    closeMenu();
    dispatch(setFunction(e.target.textContent));
  }

  return (
    <MenuStyled>
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
