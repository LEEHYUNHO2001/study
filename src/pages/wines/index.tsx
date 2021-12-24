import type { NextPage } from "next";
import styled from "styled-components";
import { IndexList } from "../../conponents";

const WinesPage: NextPage = () => {
  const name = "Wines";
  return (
    <div>
      <IndexList name={name} />
    </div>
  );
};

export default WinesPage;
