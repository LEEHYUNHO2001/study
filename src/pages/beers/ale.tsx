import type { NextPage } from "next";
import { BeerContainer } from "../../conponents";

const AlePage: NextPage = () => {
  const name = "ale";
  return (
    <div>
      <main>
        <BeerContainer name={name} />
      </main>
    </div>
  );
};

export default AlePage;
