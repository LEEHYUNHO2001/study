import { NextPage } from "next";

const BeersPage: NextPage = () => {
  return (
    <div>
      <h1>Beers</h1>
      <a href="beers/ale">ale</a>
      <a href="beers/stouts">stouts</a>
    </div>
  );
};

export default BeersPage;
