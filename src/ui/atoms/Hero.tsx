import styled, { css } from "styled-components";
import { desktop } from "../responsive";

export const Hero = styled.h1`
  margin-top: 32px;
  font-size: 36px;
  white-space: pre;
  /* --hero-offset: 0.15em; */

  ${desktop(css`
    font-size: 82px;
  `)}

  /* span {
    position: relative;
    cursor: default;
    display: inline-block;

    @supports (mix-blend-mode: multiply) {
      color: #ff00ff;
    }

    &:hover {
      &::before,
      &::after {
        transform: none;
      }
    }

    &::before,
    &::after {
      content: attr(data-content);
      transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      mix-blend-mode: multiply;
      pointer-events: none;
    }

    @supports (mix-blend-mode: multiply) {
      &::before {
        transform: translate(
          calc(-1 * var(--hero-offset)),
          calc(-1 * var(--hero-offset))
        );
        color: #ffff00;
      }

      &::after {
        transform: translate(var(--hero-offset), var(--hero-offset));
        color: #00ffff;
      }
    } */
  }
`;
