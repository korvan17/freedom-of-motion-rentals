import {
  BlockImg,
  CarImg,
  Card,
  EndItem,
  LearnMoreButton,
  ListOfDetail,
  MakeModel,
} from './CarCard.styled';

export default function CarCard({ card }) {
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
  } = card;

  return (
    <Card>
      <BlockImg>
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
