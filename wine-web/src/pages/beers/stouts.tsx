import type { NextPage } from "next";
import { BeerContainer } from "../../conponents";

const StoutsPage: NextPage = () => {
  const name = "stouts";
  return (
    <div>
      <main>
        <BeerContainer name={name} />
      </main>
    </div>
  );
};

export default StoutsPage;
