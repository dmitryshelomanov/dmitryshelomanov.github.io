import { CellMain } from "./Cell";
import { BOARD_SIZE } from "./settings";

export const createCells = (board) => {
  const rs = [];

  for (let y = 0; y < board.length; y++) {
    for (let x = 0; x < board.length; x++) {
      const current = board[x][y];

      if (current.value) {
        rs.push(
          <CellMain
            key={current.id}
            children={current.value}
            className={`n${current.value}`}
            x={x}
            y={y}
            fromX={current.from[0]}
            fromY={current.from[1]}
            from={current.from}
          />
        );
      } else {
        rs.push(
          <CellMain
            key={current.id}
            x={x}
            y={y}
            fromX={current.from[0]}
            fromY={current.from[1]}
            from={current.from}
          />
        );
      }
    }
  }

  return rs;
};

export const buildBoard = () =>
  Array.from({ length: BOARD_SIZE }).map((_, x) =>
    Array.from({ length: BOARD_SIZE }).map((_, y) => ({
      value: 0,
      id: `cell-${x}/${y}`,
      from: [x, y],
    }))
  );

export const cellToRandom = ({ board, exists, fail, count }) => {
  const rand = [];

  for (let y = 0; y < BOARD_SIZE; y++) {
    for (let x = 0; x < BOARD_SIZE; x++) {
      const current = board[x][y];

      if (!current.value) {
        rand.push([x, y]);
      }
    }
  }

  const sortedRand = rand.sort(() => (Math.random() > 0.5 ? 1 : -1));

  if (sortedRand.length > 0) {
    exists(sortedRand.slice(0, count));
  } else {
    fail();
  }
};
