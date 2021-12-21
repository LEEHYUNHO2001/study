import type { NextPage } from "next";

import { Wine } from "../../types/wine";
import { useWineData } from "../../hooks/useWindData";
import { Error, Loading, WineCard } from "../../conponents";

const PortPage: NextPage = () => {
  const name = "port";
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
              key={`port-wine-list-${wineData.id}`}
              wineData={wineData}
            />
          );
        })}
      </main>
    </div>
  );
};

export default PortPage;
