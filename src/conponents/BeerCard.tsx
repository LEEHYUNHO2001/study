import { appendFile } from "fs";
import { Beer } from "../types/Beer";
import styled from "styled-components";

interface BeerProps {
  beerData: Beer;
}

export const BeerCard = ({ beerData }: BeerProps) => {
  const { name, price, rating, image } = beerData;
  console.log(image);

  return (
    <Container>
      <img src={image} alt="맥주" />
      <h1>
        {name}
        <Average>{rating.average}</Average>
      </h1>
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
