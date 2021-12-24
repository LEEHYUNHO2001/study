import Link from "next/link";
import { ROUTES } from "../../constants";
import styled from "styled-components";
import { ROUTE } from "../../types/Route";

export const Navigation = () => {
  return (
    <header>
      <h1>
        <Link href="/">
          <a>Beers and Wine</a>
        </Link>
      </h1>
      <nav>
        <ul>
          {ROUTES.map((routeObject: ROUTE) => {
            return (
              <li key={`${routeObject.LABEL}-${routeObject.ID}`}>
                <Link href={routeObject.PATH}>
                  <a>{routeObject.LABEL}</a>
                </Link>
                <ul>
                  {routeObject.SUBS &&
                    routeObject.SUBS.map((subRouteObject: ROUTE) => {
                      return (
                        <li
                          key={`${subRouteObject.LABEL}-list-${subRouteObject.ID}`}
                        >
                          <Link
                            href={`${routeObject.PATH}${subRouteObject.PATH}`}
                          >
                            <a>{subRouteObject.LABEL}</a>
                          </Link>
                        </li>
                      );
                    })}
                </ul>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

// const Header = styled.header`
//   display: flex;
//   justify-content: space-around;
//   background-color: #000;
//   color: #fff;
// `;
// const H1 = styled.h1`
//   margin-top: 3em;
//   color: deeppink;
// `;
// const MainUl = styled.ul`
//   display: flex;
//   justify-content: space-between;
// `;
// const A = styled.a`
//   color: #f24405;
//   font-weight: bold;
//   font-size: 2em;
//   cursor: pointer;
// `;
// const Li = styled.li`
//   display: flex;
//   margin-right: 10em;
//   font-size: 1.5em;
// `;
// const Detail = styled.li`
//   font-size: 0.8em;
//   list-style: none;
//   background-color: #590202;
//   color: #f2c5bb;
//   margin-bottom: 10px;
//   padding: 5px 10px;
//   text-align: center;
//   border-radius: 10px;
// `;
