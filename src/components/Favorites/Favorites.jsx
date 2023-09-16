import { useDispatch, useSelector } from 'react-redux';
import { useGetCarsQuery } from '../../redux/carSlice';
import CarCard from '../CarCard/CarCard';
import { ListOfCars } from '../CarList/CarList.styled';
import { getFavorite, setFavorite } from '../../redux/filterSlice';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

export default function Favorites() {
  const { data } = useGetCarsQuery();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isFavorite = useSelector(getFavorite);

  const filterData = data.filter(car => car.favorite === true);
  useEffect(() => {
    dispatch(
      setFavorite(data.find(car => car.favorite === true) !== undefined)
    );
  }, [data, dispatch]);

  return (
    <>
      {isFavorite ? (
        <ListOfCars>
          {filterData &&
            filterData.map(car => (
              <li key={car.id}>
                <CarCard card={car} />
              </li>
            ))}
        </ListOfCars>
      ) : (
        navigate('/catalog')
      )}
    </>
  );
}
