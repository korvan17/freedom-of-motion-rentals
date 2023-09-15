import { ButtonMenu } from './ButtonHeader.styled';
import icons from '../../images/sprite.svg';

export default function ButtonHeader({ togleMenu, rotate, children }) {
  return (
    <ButtonMenu type="button" onClick={togleMenu}>
      {children}
      <svg className={`${rotate ? 'svgRotate' : ''}`}>
        <use xlinkHref={`${icons}#icon-chevron-down`}></use>
      </svg>
    </ButtonMenu>
  );
}
