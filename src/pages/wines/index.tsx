import type { NextPage } from "next";
import styled from "styled-components";
import { IndexList } from "../../conponents";

const WinesPage: NextPage = () => {
  const name = "Wines";
  const path = "wines";
  return (
    <div>
      <IndexList path={path} name={name} />
    </div>
  );
};

export default WinesPage;
