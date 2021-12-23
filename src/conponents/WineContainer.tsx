import { Error, Loading, WineCard } from ".";
import { useWineData } from "../hooks/useWineData";
import { Wine } from "../types/Wine";
import styled from "styled-components";

// import { MEDIA_QUERY_END_POINT } from "../constants/index";

interface WineContainerProps {
  name: string;
}

export const WineContainer = ({ name }: WineContainerProps) => {
  const { data, error } = useWineData(name);

  if (error) return <Error />;
  if (!data) return <Loading />;

  return (
    <div>
      <WineCardContainer>
        <WineTitle>{name} wine</WineTitle>
        {data.map((wineData: Wine) => {
          return (
            <WineCard
              key={`${name}-wine-list-${wineData.id}`}
              wineData={wineData}
            />
          );
        })}
      </WineCardContainer>
    </div>
  );
};

const WineTitle = styled.h1`
  line-height: 180%;
  border-bottom: 1px solid #eee;
`;
const WineCardContainer = styled.main`
  display: grid;
  gap: 1em;
  @media (max-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
