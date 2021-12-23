import { BeerCard, Error, Loading } from ".";
import { useBeerData } from "../hooks/useBeerData";
import { Beer } from "../types/Beer";

interface BeerContainerProps {
  name: string;
}

export const BeerContainer = ({ name }: BeerContainerProps) => {
  const { data, error } = useBeerData(name);

  if (error) return <Error />;
  if (!data) return <Loading />;

  return (
    <main>
      <h1>{name} Beer</h1>
      {data.map((beerData: Beer) => {
        return (
          <BeerCard
            key={`${name}-beer-data-${beerData.id}`}
            beerData={beerData}
          />
        );
      })}
    </main>
  );
};
