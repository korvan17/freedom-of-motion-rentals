import { useDispatch, useSelector } from 'react-redux';
import { useGetCarsQuery } from '../../redux/carSlice';
import CarCard from '../CarCard/CarCard';
import { ListOfCars } from './CarList.styled';
import {
  getBrand,
  getPrice,
  setFavorite,
  // setBrandList,
  // setPrice,
} from '../../redux/filterSlice';
import { useEffect, useState } from 'react';
import Modal from '../Modal/Modal';

export default function Carlist() {
  const { data } = useGetCarsQuery();
  const dispatch = useDispatch();
  const brand = useSelector(getBrand);
  const price = useSelector(getPrice);
  const [isModal, setModal] = useState(false);
  const [getCar, setCar] = useState(null);
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

  function openModal(car) {
    setModal(true);
    setCar(car);
  }

  function closeModal() {
    setModal(false);
  }
  return (
    <>
      {isModal && <Modal closeModal={closeModal} car={getCar} />}
      <ListOfCars>
        {filterData &&
          filterData.map(car => (
            <li key={car.id}>
              <CarCard card={car} openModal={openModal} />
            </li>
          ))}
      </ListOfCars>
    </>
  );
}
