import { WORLD_SIZE } from "./settings";

export const getPositionByIndex = (index) => {
  const y = Math.floor(index / WORLD_SIZE);
  const x = index - y * WORLD_SIZE;

  return [x, y];
};

export const getIndexByPosition = ([x, y]) => y * WORLD_SIZE + x;

export const getRandomCoords = () =>
  [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ][Math.floor(Math.random() * 4)];

export const addCoords = ([x, y], [x1, y1]) => [x + x1, y + y1];

export const isOutOfBounds = ([x, y]) =>
  x < 0 || y < 0 || x >= WORLD_SIZE || y >= WORLD_SIZE;
