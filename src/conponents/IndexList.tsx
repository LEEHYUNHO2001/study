import type { NextPage } from "next";
import styled from "styled-components";
import { ROUTES } from "../constants";
import { ROUTE } from "../types/Route";
import Link from "next/link";

interface lang {
  eng: string;
  kor: string;
}

export const IndexList = ({ eng, kor }: lang) => {
  return (
    <div>
      <h1>{eng}</h1>
      {ROUTES.filter(
        (routeObject: ROUTE) => routeObject.LABEL === kor
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
