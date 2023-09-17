import { NavLink } from 'react-router-dom';
import { HeaderStyled } from './Header.styled';
import { useSelector } from 'react-redux';
import { getFavorite } from '../../redux/filterSlice';
import { useGetCarsQuery } from '../../redux/carSlice';

export default function Header() {
  const isFavorite = useSelector(getFavorite);
  const { isSuccess } = useGetCarsQuery();
  return (
    <HeaderStyled>
      <NavLink to="/">Home</NavLink>
      {isSuccess && <NavLink to="/catalog">Catalog</NavLink>}
      {isFavorite ? (
        <NavLink to="/favorites">Favorite</NavLink>
      ) : (
        <span className="notLink">Favorite</span>
      )}
    </HeaderStyled>
  );
}
