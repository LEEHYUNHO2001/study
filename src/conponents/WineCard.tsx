import { Wine } from "../types/Wine";
import styled from "styled-components";

interface WineProps {
  wineData: Wine;
}

const handleImgError = (e: any) => {
  e.target.src =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png";
};

export const WineCard = ({ wineData }: WineProps) => {
  const { wine, winery, image, location, rating } = wineData;

  return (
    <div key={`${wine}-${winery}`}>
      <img src={image} onError={handleImgError} alt="와인" />
      <h2>
        {wine}
        <span>{rating.average}</span>
      </h2>
      <p>
        {winery} - {location}
      </p>
      <p>리뷰 갯수 : {rating.reviews.replace("ratings", "")}</p>
    </div>
  );
};

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: flex-end;
//   padding: 1em;
//   box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
//   border-radius: 1em;
// `;
// const Average = styled.span`
//   display: inline-block;
//   padding: 0.3em;
//   font-size: 16px;
//   margin-left: 0.5em;
//   color: white;
//   background-color: #2ac1bc;
//   border-radius: 3px;
// `;
// const CustomImg = styled.img`
//   width: 150px;
//   height: 400px;
// `;
