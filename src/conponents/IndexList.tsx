import styled from "styled-components";
import { ROUTES } from "../constants";
import { ROUTE } from "../types/Route";
import Link from "next/link";

interface PageName {
  name: string;
}

export const IndexList = ({ name }: PageName) => {
  return (
    <div>
      <h1>{name}</h1>
      {ROUTES.filter(
        (routeObject: ROUTE) => routeObject.LABEL === name
      )[0]?.SUBS.map((subRouteObject: ROUTE) => {
        return (
          <ul key={`${subRouteObject.LABEL}-list-${subRouteObject.ID}`}>
            <Link href={`beers/${subRouteObject.PATH}`}>
              <a>{subRouteObject.LABEL}</a>
            </Link>
          </ul>
        );
      })}
    </div>
  );
};
