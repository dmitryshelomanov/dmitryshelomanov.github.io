import styled, { css } from "styled-components";

export const Cell = styled.div`
  width: 65px;
  height: 65px;
  box-sizing: border-box;
  background-color: #cdc0b4;
  font-weight: 200;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  text-transform: uppercase;

  ${(p) =>
    p.short &&
    css`
      width: 25px;
      height: 25px;
    `}

  ${(p) =>
    p.hasWord &&
    css`
      background-color: #edcc61;
    `}

    ${(p) =>
    p.none &&
    css`
      background-color: #ede0c8;
      color: #776e65;
    `}


  ${(p) =>
    p.onPlace &&
    css`
      background-color: #9c0;
    `}
`;
