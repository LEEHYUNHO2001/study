import { NextPage } from "next";
import { IndexList } from "../../conponents";

const BeersPage: NextPage = () => {
  const name = "Beers";
  return (
    <div>
      <IndexList name={name} />
    </div>
  );
};

export default BeersPage;
