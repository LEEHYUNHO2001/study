import React from "react";
import { Navigation } from "./Navigation";
import styled from "styled-components";

export const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Navigation />
      <main>{children}</main>
    </div>
  );
};

// const Container = styled.main`
//   max-width: 1280px;
//   margin: auto;
// `;
