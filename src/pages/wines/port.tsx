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
      <h1>port</h1>
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

// Next.js에서 SSR을 위해서 데이터를 미리 불러오는 함수
// export async function getServerSideProps(context) {
//   const { data, error } = useSWR(
//     "https://api.sampleapis.com/wines/port",
//     fetcher
//   );

//   return { props: { data, error } };
// }
export default PortPage;
