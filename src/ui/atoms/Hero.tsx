import styled, { css } from "styled-components";
import { desktop } from "../responsive";

export const Hero = styled.h1`
  margin-top: 32px;
  font-size: 36px;
  white-space: pre;

  ${desktop(css`
    font-size: 82px;
  `)}
`;
