import { ListOfDetail, MakeModel } from '../CarCard/CarCard.styled';
import { BackDrop, ModalWindow } from './Modal.styled';
import icons from '../../images/sprite.svg';

export default function Modal() {
  const car = {
    id: 9582,
    year: 2008,
    make: 'Buick',
    model: 'Enclave',
    type: 'SUV',
    img: 'https://res.cloudinary.com/ditdqzoio/image/upload/v1687252635/cars/buick_enclave.jpg',
    description:
      'The Buick Enclave is a stylish and spacious SUV known for its comfortable ride and luxurious features.',
    fuelConsumption: '10.5',
    engineSize: '3.6L V6',
    accessories: ['Leather seats', 'Panoramic sunroof', 'Premium audio system'],
    functionalities: [
      'Power liftgate',
      'Remote start',
      'Blind-spot monitoring',
    ],
    rentalPrice: '$40',
    rentalCompany: 'Luxury Car Rentals',
    address: '123 Example Street, Kiev, Ukraine',
    rentalConditions:
      "Minimum age: 25\nValid driver's license\nSecurity deposit required",
    mileage: 5858,
  };
  const {
    id,
    year,
    make,
    model,
    type,
    img,
    accessories,
    functionalities,
    fuelConsumption,
    engineSize,
    description,
    rentalPrice,
    rentalConditions,
    address,
    mileage,
  } = car;

  function handlClick() {}

  return (
    <BackDrop>
      <ModalWindow>
        <button type="button" onClick={handlClick}>
          <svg>
            <use xlinkHref={`${icons}#icon-close`}></use>
          </svg>
        </button>
        <img src={img} alt={make} />
        <ul>
          <li>
            <MakeModel>
              <li>{make}</li>
              <li>{model}, </li>
              <li>{year}</li>
            </MakeModel>
          </li>
          <li>
            <ListOfDetail>
              <li>{address.split(', ')[1]}</li>
              <li>{address.split(', ')[2]}</li>
              <li>id: {id}</li>
              <li>Year: {year}</li>
              <li>Type: {type}</li>
              <li>Fuel Consumption: {fuelConsumption}</li>
              <li>Engine Size: {engineSize}</li>
            </ListOfDetail>
          </li>
          <li>{description}</li>
          <li>
            <p>Accessories and functionalities:</p>
            <ListOfDetail>
              {accessories.map(acc => (
                <li>{acc}</li>
              ))}
              {functionalities.map(func => (
                <li>{func}</li>
              ))}
            </ListOfDetail>
          </li>
          <li>
            <p>Rental Conditions: </p>
            <ul className="rentalConditionals">
              <li className="fontMontserrat">
                Minimum age:
                <span className="number">
                  {` ${rentalConditions.split(`\n`)[0].replace(/\D/g, '')}`}
                </span>
              </li>
              {rentalConditions
                .split(`\n`)
                .slice(1)
                .map(condition => (
                  <li>{condition}</li>
                ))}
              <li className="fontMontserrat">
                Mileage:
                <span className="number">{` ${mileage.toLocaleString(
                  'en-US'
                )}`}</span>
              </li>
              <li className="fontMontserrat">
                Price:
                <span className="number">{` ${rentalPrice.slice(1)}$`}</span>
              </li>
            </ul>
          </li>
        </ul>
        <a href="tel:+380730000000" className="button">
          Rental car
        </a>
      </ModalWindow>
    </BackDrop>
  );
}
