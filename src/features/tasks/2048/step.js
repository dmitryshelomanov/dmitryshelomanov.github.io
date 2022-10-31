import { nextCoords } from "./next-pahts";

export const swipeableToArrowMap = {
  Right: "ArrowRight",
  Left: "ArrowLeft",
  Down: "ArrowDown",
  Up: "ArrowUp",
};

export const createStep = ({ setBoard, board, onEnd }) => {
  let merged = [];
  let hasNext = false;
  let score = 0;

  function update({ x, y, getNext, dir, nextWasMerged }) {
    const current = board[x][y];

    if (current.value) {
      const next = nextCoords[dir]({
        x,
        y,
        board,
        current,
        nextWasMerged,
      });

      if (next !== -1) {
        hasNext = true;

        if (getNext(next).value === 0) {
          getNext(next).value = current.value;
          board[x][y].value = 0;
          getNext(next).from = [x, y];
        } else if (getNext(next).value === current.value) {
          getNext(next).value = current.value * 2;
          score += getNext(next).value;
          board[x][y].value = 0;
          merged.push(getNext(next).id);
        }
      }
    }
  }

  const step = (e) => {
    switch (e.code) {
      case "ArrowDown": {
        for (let y = board.length - 1; y >= 0; y--) {
          for (let x = board.length - 1; x >= 0; x--) {
            update({
              x,
              y,
              dir: "bottom",
              nextWasMerged: (dy) => merged.includes(board[x][dy].id),
              getNext: (nextY) => board[x][nextY],
            });
          }
        }

        setBoard({ ref: board });
        break;
      }
      case "ArrowUp": {
        for (let y = 0; y < board.length; y++) {
          for (let x = 0; x < board.length; x++) {
            update({
              x,
              y,
              dir: "top",
              nextWasMerged: (dy) => merged.includes(board[x][dy].id),
              getNext: (nextY) => board[x][nextY],
            });
          }
        }

        setBoard({ ref: board });
        break;
      }
      case "ArrowLeft": {
        for (let y = 0; y < board.length; y++) {
          for (let x = 0; x < board.length; x++) {
            update({
              x,
              y,
              dir: "left",
              nextWasMerged: (dx) => merged.includes(board[dx][y].id),
              getNext: (nextX) => board[nextX][y],
            });
          }
        }
        setBoard({ ref: board });
        break;
      }
      case "ArrowRight": {
        for (let y = board.length - 1; y >= 0; y--) {
          for (let x = board.length - 1; x >= 0; x--) {
            const current = board[x][y];

            update({
              x,
              y,
              dir: "right",
              nextWasMerged: (dx) => merged.includes(board[dx][y].id),
              getNext: (nextX) => board[nextX][y],
            });
          }
        }

        setBoard({ ref: board });
        break;
      }

      default:
        break;
    }

    if (hasNext) {
      onEnd(score);
    }

    score = 0;
    merged = [];
    hasNext = false;
  };

  return {
    step,
    merged,
  };
};
