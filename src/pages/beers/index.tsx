import { NextPage } from "next";
import { IndexList } from "../../conponents";

const BeersPage: NextPage = () => {
  return (
    <div>
      <IndexList eng="Beers" kor="맥주" />
    </div>
  );
};

export default BeersPage;
