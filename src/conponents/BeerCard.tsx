import { Beer } from "../types/Beer";
import styled from "styled-components";

interface BeerProps {
  beerData: Beer;
}

const handleImgError = (e: any) => {
  e.target.src =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png";
};

export const BeerCard = ({ beerData }: BeerProps) => {
  const { name, price, rating, image } = beerData;

  return (
    <Container key={`${name}-${price}`}>
      <CustomImg src={image} onError={handleImgError} alt="맥주" />
      <h1>{name}</h1>
      <Average>{Math.floor(rating.average)}</Average>
      <p>{price}</p>
      <p>리뷰 갯수 : {rating.reviews}</p>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding: 1em;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
  border-radius: 1em;
`;
const Average = styled.span`
  display: inline-block;
  padding: 0.3em;
  font-size: 16px;
  margin-left: 0.5em;
  color: white;
  background-color: #2ac1bc;
  border-radius: 3px;
`;
const CustomImg = styled.img`
  width: 150px;
  height: 400px;
`;
