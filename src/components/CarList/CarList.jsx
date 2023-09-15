import { useSelector } from 'react-redux';
import { useGetCarsQuery } from '../../redux/carSlice';
import CarCard from '../CarCard/CarCard';
import { ListOfCars } from './CarList.styled';
import {
  getBrand,
  getPrice,
  // setBrandList,
  // setPrice,
} from '../../redux/filterSlice';

export default function Carlist() {
  const { data } = useGetCarsQuery();
  // const dispatch = useDispatch();
  const brand = useSelector(getBrand);
  const price = useSelector(getPrice);

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

  return (
    <ListOfCars>
      {filterData &&
        filterData.map(car => (
          <li key={car.id + car.mileage}>
            <CarCard card={car} />
          </li>
        ))}
    </ListOfCars>
  );
}
