import React, { useCallback, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { getIndexByPosition, loop, NATIONS, step, WORLD_SIZE } from "./game";

const Board = styled.div`
  width: 400px;
  height: 400px;
  display: flex;
  flex-wrap: wrap;
  color: #fff;
  margin: auto;
`;

const Cell = styled.div`
  width: 20px;
  height: 20px;
  transition: all 0.3s;
  background-color: rgb(252, 178, 203);
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #fff;
  box-sizing: border-box;

  ${(p) =>
    p.nation === "winter" &&
    css`
      background-color: red;
    `}

  ${(p) =>
    p.nation === "summer" &&
    css`
      background-color: green;
    `}

  ${(p) =>
    p.nation === "spring" &&
    css`
      background-color: orange;
    `}

  ${(p) =>
    p.nation === "autumn" &&
    css`
      background-color: blue;
    `}
`;

export function useGameOfLive2() {
  const [iter, setIter] = useState(0);
  const [board, setBoard] = useState(() =>
    Array.from({ length: WORLD_SIZE * WORLD_SIZE }).map((_, index) => ({
      element: <Cell key={index} />,
      className: "",
    }))
  );

  const draw = useCallback((world) => {
    for (let x = 0; x < WORLD_SIZE; x++) {
      for (let y = 0; y < WORLD_SIZE; y++) {
        const current = world[x][y];
        const index = getIndexByPosition([x, y]);

        board[index].className = "";

        if (!Array.isArray(current)) {
          board[index].className = NATIONS[current.nation];
        }
      }
    }

    setBoard(board);
  }, []);

  useEffect(() => {
    const clear = loop((world, season) => {
      step(world, season);
      draw(world);
      setIter((prev) => prev + 1);
    });

    return () => {
      clear();
      setIter(0);
    };
  }, []);

  return {
    iter,
    board: (
      <Board>
        {board.map((it) =>
          React.cloneElement(it.element, {
            nation: it.className,
          })
        )}
      </Board>
    ),
  };
}
