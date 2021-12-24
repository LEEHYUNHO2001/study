import styled from "styled-components";
import { ROUTES } from "../constants";
import { ROUTE } from "../types/Route";
import Link from "next/link";

interface PageName {
  name: string;
  path: string;
}

export const IndexList = ({ name, path }: PageName) => {
  return (
    <div>
      <h1>{name}</h1>
      <Container>
        {ROUTES.filter(
          (routeObject: ROUTE) => routeObject.LABEL === name
        )[0]?.SUBS.map((subRouteObject: ROUTE) => {
          return (
            <Item key={`${subRouteObject.LABEL}-list-${subRouteObject.ID}`}>
              <Link href={`${path}${subRouteObject.PATH}`}>
                <a>{subRouteObject.LABEL}</a>
              </Link>
              {/* <Img src={subRouteObject.SRC} alt="" /> */}
            </Item>
          );
        })}
      </Container>
    </div>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const Item = styled.ul`
  width: 5.5em;
  height: 5.5em;
  background-color: #f2cf8d;
  margin: 15px;
  text-align: center;
  font-size: 4em;
  font-weight: bold;
  color: #d98b79;
`;
const Img = styled.img`
  width: 4em;
  height: 4em;
`;
