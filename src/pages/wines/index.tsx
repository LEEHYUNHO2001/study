import type { NextPage } from "next";
import styled from "styled-components";

const A = styled.a`
  display: block;
`;

const WinesPage: NextPage = () => {
  return (
    <div>
      <h1>Wines</h1>
      <A href="wines/dessert">dessert</A>
      <A href="wines/port">port</A>
      <A href="wines/reds">reds</A>
      <A href="wines/rose">rose</A>
      <A href="wines/sparkling">sparkling</A>
      <A href="wines/whites">whites</A>
    </div>
  );
};

export default WinesPage;
