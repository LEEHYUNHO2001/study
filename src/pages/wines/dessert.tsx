import type { NextPage } from "next";
import { WineContainer } from "../../conponents";

const DessertPage: NextPage = () => {
  const name = "dessert";

  return (
    <div>
      <WineContainer name={name} />
    </div>
  );
};

export default DessertPage;
