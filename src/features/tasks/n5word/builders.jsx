import { Cell } from "./Cell";

function getPositionByIndex(index) {
  const y = Math.floor(index / 5);
  const x = index - y * 5;

  return [x, y];
}

export function buildCell({ board, wordState }) {
  return Array.from({ length: 25 }, (_, i) => {
    const [x, y] = getPositionByIndex(i);
    const props = {
      [wordState[y][x] ?? "empty"]: true,
    };

    return (
      <Cell key={i} {...props}>
        {board[y][x]}
      </Cell>
    );
  });
}
