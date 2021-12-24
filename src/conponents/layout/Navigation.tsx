import Link from "next/link";
import { ROUTES } from "../../constants";
import styled from "styled-components";
import { ROUTE } from "../../types/Route";
import { SUBS } from "../../types/SUBS";

export const Navigation = () => {
  return (
    <Header>
      <H1>
        <Link href="/">
          <a>Beers and Wine</a>
        </Link>
      </H1>
      <nav>
        <MainUl>
          {ROUTES.map((routeObject: ROUTE) => {
            return (
              <Li key={`${routeObject.LABEL}-${routeObject.ID}`}>
                <Link href={routeObject.PATH}>
                  <A>{routeObject.LABEL}</A>
                </Link>
                <Grid>
                  {routeObject.SUBS &&
                    routeObject.SUBS.map((subRouteObject: SUBS) => {
                      return (
                        <Detail
                          key={`${subRouteObject.LABEL}-list-${subRouteObject.ID}`}
                        >
                          <Link
                            href={`${routeObject.PATH}${subRouteObject.PATH}`}
                          >
                            <a>{subRouteObject.LABEL}</a>
                          </Link>
                        </Detail>
                      );
                    })}
                </Grid>
              </Li>
            );
          })}
        </MainUl>
      </nav>
    </Header>
  );
};

const Header = styled.header`
  display: flex;
  justify-content: space-around;
  background-color: #000;
  color: #fff;
`;
const H1 = styled.h1`
  margin-top: 1.2em;
  color: deeppink;
`;
const MainUl = styled.ul`
  display: flex;
  justify-content: space-between;
`;
const A = styled.a`
  color: #f24405;
  font-weight: bold;
  font-size: 2em;
  cursor: pointer;
`;
const Li = styled.li`
  display: flex;
  margin-right: 10em;
  font-size: 1.5em;
`;
const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;
const Detail = styled.li`
  list-style: none;
  background-color: #590202;
  color: #f2c5bb;
  padding: 5px 10px;
  text-align: center;
  border-radius: 10px;
  height: 50px;
`;
