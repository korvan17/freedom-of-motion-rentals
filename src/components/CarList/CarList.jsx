import { useDispatch, useSelector } from 'react-redux';
import { useGetCarsQuery } from '../../redux/carSlice';
import CarCard from '../CarCard/CarCard';
import { ListOfCars, LoadMore } from './CarList.styled';
import {
  getBrand,
  getPrice,
  setFavorite,
  // setBrandList,
  // setPrice,
} from '../../redux/filterSlice';
import { useEffect, useState } from 'react';

export default function Carlist() {
  const { data } = useGetCarsQuery();
  const dispatch = useDispatch();
  const brand = useSelector(getBrand);
  const price = useSelector(getPrice);
  const [noElements, setNoElements] = useState(8);
  useEffect(() => {
    if (data) {
      dispatch(
        setFavorite(data.find(car => car.favorite === true) !== undefined)
      );
    }
  }, [data, dispatch]);

  // const brandList = [];
  // const priceList = [];

  // data.forEach(car => {
  //   const rentalPrice = Number(car.rentalPrice.replace('$', ''));
  //   brandList.push(car.make);
  //   priceList.push(rentalPrice);
  // });
  // const roundedPrices = priceList.map(price => Math.ceil(price / 10) * 10).sort();

  // dispatch(setBrandList(brandList));
  // dispatch(setPrice(roundedPrices));

  let filterData = data;
  if (brand !== 'Enter the text' && brand !== 'All') {
    filterData = data.filter(car => car.make === brand);
  }

  if (price !== '' && price !== 'All') {
    const priceNumber = parseInt(price, 10);
    filterData = filterData.filter(
      car =>
        car.rentalPrice &&
        parseInt(car.rentalPrice.replace('$', ''), 10) <= priceNumber
    );
  }

  filterData = filterData.slice(0, noElements);

  return (
    <>
      <ListOfCars>
        {filterData &&
          filterData.map(car => (
            <li key={car.id}>
              <CarCard card={car} />
            </li>
          ))}
      </ListOfCars>
      {filterData.length > 0 && data.length > noElements && (
        <LoadMore type="button" onClick={() => setNoElements(prev => prev + 8)}>
          Load more
        </LoadMore>
      )}
    </>
  );
}
