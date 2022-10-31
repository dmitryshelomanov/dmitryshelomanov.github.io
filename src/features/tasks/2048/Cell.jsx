import { memo, useEffect, useRef } from "react";
import { useSpring, animated } from "react-spring";
import styled, { css } from "styled-components";
import { CELL_SIZE } from "./settings";

const Cell = styled(animated.div)`
  position: absolute;
  width: ${CELL_SIZE}px;
  height: ${CELL_SIZE}px;
  box-sizing: border-box;
  background-color: #cdc0b4;
  font-weight: 200;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;

  ${(p) =>
    p.children &&
    css`
      z-index: 2;
    `}

  &.n2 {
    background-color: #eee3da;
    color: #776e65;
  }

  &.n4 {
    background-color: #ede0c8;
    color: #776e65;
  }

  &.n8 {
    background-color: #f2b179;
  }

  &.n16 {
    background-color: #f59563;
  }

  &.n32 {
    background-color: #f67c5f;
  }

  &.n64 {
    background-color: #f65e3b;
  }

  &.n128 {
    background-color: #edcf72;
  }

  &.n256 {
    background-color: #edcc61;
  }

  &.n512 {
    background-color: #9c0;
  }

  &.n1024 {
    background-color: #33b5e5;
    color: #fff;
  }

  &.n2048 {
    background-color: #09c;
    color: #fff;
  }
`;

export const CellMain = memo(({ children, from, x, y, ...rest }) => {
  const [styles, api] = useSpring(() => ({
    config: { duration: 300 },
    translateX: `${from[0] * CELL_SIZE + from[0] * 5}px`,
    translateY: `${from[1] * CELL_SIZE + from[1] * 5}px`,
  }));

  useEffect(() => {
    api.start({
      reset: true,
      config: { duration: 300 },
      from: {
        translateX: `${from[0] * CELL_SIZE + from[0] * 5}px`,
        translateY: `${from[1] * CELL_SIZE + from[1] * 5}px`,
      },
      to: {
        translateX: `${x * CELL_SIZE + x * 5}px`,
        translateY: `${y * CELL_SIZE + y * 5}px`,
      },
    });
  }, [from, x, y, api]);

  useEffect(() => {
    if (children) {
      api.start({
        config: { duration: 300 },
        reverse: true,
        from: {
          scale: 1,
        },
        to: {
          scale: 1.3,
        },
      });
    }
  }, [children, api]);

  return (
    <Cell {...rest} style={styles} x={x} y={y}>
      {children}
    </Cell>
  );
});
