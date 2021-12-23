import type { NextPage } from "next";
import styled from "styled-components";
import { IndexList } from "../../conponents";

const WinesPage: NextPage = () => {
  return (
    <div>
      <IndexList eng="Wines" kor="와인" />
    </div>
  );
};

export default WinesPage;
