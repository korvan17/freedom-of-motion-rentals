import { ListOfDetail, MakeModel } from '../CarCard/CarCard.styled';
import { BackDrop, ModalWindow } from './Modal.styled';
import icons from '../../images/sprite.svg';

export default function Modal({ closeModal, car }) {
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

  document.body.style.overflow = 'hidden';

  return (
    <BackDrop>
      <ModalWindow>
        <svg className="buttonClose" onClick={closeModal}>
          <use xlinkHref={`${icons}#icon-close`}></use>
        </svg>
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
                <li key={acc}>{acc}</li>
              ))}
              {functionalities.map(func => (
                <li key={func}>{func}</li>
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
                  <li key={condition}>{condition}</li>
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
