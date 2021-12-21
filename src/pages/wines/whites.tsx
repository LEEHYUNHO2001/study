import type { NextPage } from "next";

import { Wine } from "../../types/wine";
import { useWineData } from "../../hooks/useWineData";
import { Error, Loading, WineCard } from "../../conponents";

const WhitesPage: NextPage = () => {
  const name = "whites";
  const { data, error } = useWineData(name);
  if (error) return <Error />;
  if (!data) return <Loading />;
  return (
    <div>
      <h1>Wine</h1>
      <main>
        {data.map((wineData: Wine) => {
          return (
            <WineCard
              key={`${name}-wine-list-${wineData.id}`}
              wineData={wineData}
            />
          );
        })}
      </main>
    </div>
  );
};
export default WhitesPage;
