import { BOARD_SIZE } from "./settings";

export const nextCoords = {
  left: ({ x, y, board, current, nextWasMerged }) => {
    let next = -1;

    for (let dx = x - 1; dx >= 0; dx--) {
      if (
        !board[dx][y].value ||
        (board[dx][y].value === current.value && !nextWasMerged(dx))
      ) {
        next = dx;
      } else {
        break;
      }
    }

    return next;
  },

  right: ({ x, y, board, current, nextWasMerged }) => {
    let next = -1;

    for (let dx = x + 1; dx < BOARD_SIZE; dx++) {
      if (
        !board[dx][y].value ||
        (board[dx][y].value === current.value && !nextWasMerged(dx))
      ) {
        next = dx;
      } else {
        break;
      }
    }

    return next;
  },

  top: ({ x, y, board, current, nextWasMerged }) => {
    let next = -1;

    for (let dy = y - 1; dy >= 0; dy--) {
      if (
        !board[x][dy].value ||
        (board[x][dy].value === current.value && !nextWasMerged(dy))
      ) {
        next = dy;
      } else {
        break;
      }
    }

    return next;
  },

  bottom: ({ x, y, board, current, nextWasMerged }) => {
    let next = -1;

    for (let dy = y + 1; dy < BOARD_SIZE; dy++) {
      if (
        !board[x][dy].value ||
        (board[x][dy].value === current.value && !nextWasMerged(dy))
      ) {
        next = dy;
      } else {
        break;
      }
    }

    return next;
  },
};
