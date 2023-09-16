import {
  BlockImg,
  CarImg,
  Card,
  EndItem,
  LearnMoreButton,
  ListOfDetail,
  MakeModel,
} from './CarCard.styled';
import icons from '../../images/sprite.svg';
import { useDispatch } from 'react-redux';
import { Api } from '../../redux/carSlice';

export default function CarCard({ card }) {
  const dispatch = useDispatch();

  function handlClick(carId) {
    dispatch(
      Api.util.updateQueryData('getCars', undefined, Cars => {
        const carIndex = Cars.findIndex(car => car.id === carId);

        if (carIndex !== -1) {
          Cars[carIndex].favorite = !Cars[carIndex].favorite;
        }
      })
    );
  }
  const {
    id,
    year,
    make,
    model,
    type,
    img,
    functionalities,
    rentalPrice,
    rentalCompany,
    address,
    favorite,
  } = card;

  return (
    <Card>
      <BlockImg>
        <button type="button" onClick={() => handlClick(id)}>
          <svg>
            <use xlinkHref={`${icons}#icon-heart-${favorite}`}></use>
          </svg>
        </button>
        <CarImg src={img} alt={make} />
      </BlockImg>
      <MakeModel>
        <li>{make}</li>
        <li>{model}, </li>
        <li>{year}</li>
        <EndItem>{rentalPrice}</EndItem>
      </MakeModel>
      <ListOfDetail>
        <li>{address.split(', ')[1]}</li>
        <li>{address.split(', ')[2]}</li>
        <li>{rentalCompany}</li>
        <li>Premium</li>
        <li>{type}</li>
        <li>{model}</li>
        <li>{id}</li>
        <li>{functionalities[0]}</li>
      </ListOfDetail>
      <LearnMoreButton>Learn more</LearnMoreButton>
    </Card>
  );
}
