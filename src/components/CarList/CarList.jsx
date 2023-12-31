import { useDispatch, useSelector } from 'react-redux';
import { useGetCarsQuery } from '../../redux/carSlice';
import CarCard from '../CarCard/CarCard';
import { ListOfCars, LoadMore } from './CarList.styled';
import {
  getBrand,
  getMileage,
  getPrice,
  setFavorite,
} from '../../redux/filterSlice';
import { useEffect, useState } from 'react';

export default function Carlist() {
  const { data, isSuccess } = useGetCarsQuery();
  const dispatch = useDispatch();
  const brand = useSelector(getBrand);
  const price = useSelector(getPrice);
  const [from, to] = useSelector(getMileage);
  const [noElements, setNoElements] = useState(8);

  useEffect(() => {
    if (isSuccess && data) {
      dispatch(setFavorite(data.some(car => car.favorite)));
    }
  }, [data, isSuccess, dispatch]);

  let filterData = data;

  if (brand !== 'Enter the text') {
    filterData = filterData.filter(car => car.make === brand);
  }

  if (price !== '') {
    const priceNumber = parseInt(price, 10);
    filterData = filterData.filter(
      car =>
        car.rentalPrice &&
        parseInt(car.rentalPrice.replace('$', ''), 10) <= priceNumber
    );
  }

  if (from && to) {
    filterData = filterData.filter(car => {
      const mileage = Number(car.mileage);
      return mileage > from && mileage < to;
    });
  }

  const slicedData = filterData ? filterData.slice(0, noElements) : [];

  return (
    <>
      <ListOfCars>
        {isSuccess &&
          slicedData.map(car => (
            <li key={car.id}>
              <CarCard card={car} />
            </li>
          ))}
      </ListOfCars>
      {slicedData.length > 0 && data.length > noElements && (
        <LoadMore type="button" onClick={() => setNoElements(prev => prev + 8)}>
          Load more
        </LoadMore>
      )}
    </>
  );
}
