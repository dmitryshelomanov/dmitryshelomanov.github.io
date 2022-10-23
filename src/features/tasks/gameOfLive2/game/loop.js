import { generateWorld } from "./world";
import { ITERATIONS, SEASONS } from "./settings";

export function loop(cb) {
  let index = 0;
  const world = generateWorld();

  const id = setInterval(() => {
    cb(world, index % SEASONS);
    index += 1;

    if (index >= ITERATIONS) {
      clearInterval(id);
    }
  }, 1000 / 60);

  return () => clearInterval(id);
}
