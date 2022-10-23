import { WORLD_SIZE, SEASONS, POPULATIONS, AGES } from "./settings";
import { Hero } from "./hero";
import {
  getPositionByIndex,
  isOutOfBounds,
  addCoords,
  getRandomCoords,
} from "./coords";

export const getAge = () =>
  Math.floor(Math.random() * (AGES.max - AGES.min)) + AGES.min;

export function generateWorld() {
  const world = Array.from({ length: WORLD_SIZE }).map(() =>
    Array.from({ length: WORLD_SIZE }).map(() => [])
  );
  const positions = Array.from({ length: WORLD_SIZE * WORLD_SIZE })
    .map((_, index) => getPositionByIndex(index))
    .sort(() => (Math.random() > 0.5 ? 1 : -1));

  for (const [index, [x, y]] of positions
    .slice(0, POPULATIONS * SEASONS)
    .entries()) {
    world[x][y] = new Hero(
      getAge(),
      index % SEASONS,
      Math.ceil(Math.random() * 100)
    );
  }

  return world;
}

export function step(world, season) {
  for (let x = 0; x < WORLD_SIZE; x++) {
    for (let y = 0; y < WORLD_SIZE; y++) {
      const current = world[x][y];

      if (Array.isArray(current)) {
        // eslint-disable-next-line no-continue
        continue;
      }

      const targetCoords = addCoords([x, y], getRandomCoords());

      if (isOutOfBounds(targetCoords)) {
        // eslint-disable-next-line no-continue
        continue;
      }

      const targetHero = world[targetCoords[0]][targetCoords[1]];

      // ичего нету - переставляем в новую позицию
      if (Array.isArray(targetHero)) {
        world[targetCoords[0]][targetCoords[1]] = current;
        world[x][y] = [];
        // Если расса совпала
      } else if (targetHero.nation === current.nation) {
        current.strength += 1;
        targetHero.strength += 1;
        // Если текущий герой сильнее
      } else if (
        current.getTotalStrength(season) > targetHero.getTotalStrength(season)
      ) {
        targetHero.nation = current.nation;
      } else {
        current.nation = targetHero.nation;
      }
    }
  }
}
