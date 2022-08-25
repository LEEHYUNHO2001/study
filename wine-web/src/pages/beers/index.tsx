import { NextPage } from "next";
import { IndexList } from "../../conponents";

const BeersPage: NextPage = () => {
  const name = "Beers";
  const path = "beers";
  return (
    <div>
      <IndexList path={path} name={name} />
    </div>
  );
};

export default BeersPage;
