import {
  type CSSProperties,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Card } from "@/components/ui/card";

type ObstacleType = "box" | "folder" | "laptop";

type Obstacle = {
  id: number;
  type: ObstacleType;
  x: number;
  width: number;
  height: number;
  hitboxHeight: number;
  passed: boolean;
};

type GameState = {
  runnerY: number;
  obstacles: Obstacle[];
  speed: number;
  score: number;
  isRunning: boolean;
  isGameOver: boolean;
  bestScore: number;
  runnerFrame: 0 | 1;
};

type SpritePalette = Record<string, string>;

type ObstacleTemplate = {
  rows: readonly string[];
  palette: SpritePalette;
  width: number;
  height: number;
  hitboxHeight: number;
};

const RUNNER_X = 48;
const RUNNER_PIXEL = 4;
const OBSTACLE_PIXEL = 4;
const GRAVITY = 1650;
const JUMP_VELOCITY = 640;
const BASE_SPEED = 220;
const MAX_SPEED = 560;
const SPEED_GROWTH = 16;
const BEST_SCORE_KEY = "runner-mini-game-best";

const runnerFrames = [
  [
    "........",
    "..oo....",
    ".ohho...",
    ".ohho...",
    "..ss....",
    ".ssss...",
    "..ss....",
    "..ss....",
    ".p..p...",
    ".p..p...",
    "p....p..",
    "........",
  ],
  [
    "........",
    "..oo....",
    ".ohho...",
    ".ohho...",
    "..ss....",
    ".ssss...",
    "..ss....",
    "..ss....",
    "..pp....",
    "..pp....",
    ".p..p...",
    "........",
  ],
] as const;

const runnerPalette: SpritePalette = {
  o: "#1e293b",
  h: "#f2c9a0",
  s: "#2563eb",
  p: "#0f172a",
};

const obstacleOrder: ObstacleType[] = ["box", "folder", "laptop"];

function getSpriteSize(rows: readonly string[], pixelSize: number) {
  const width = Math.max(...rows.map((row) => row.length)) * pixelSize;
  const height = rows.length * pixelSize;
  return { width, height };
}

function createObstacleTemplate(
  rows: readonly string[],
  palette: SpritePalette,
  hitboxTrim: number,
): ObstacleTemplate {
  const { width, height } = getSpriteSize(rows, OBSTACLE_PIXEL);
  return {
    rows,
    palette,
    width,
    height,
    hitboxHeight: Math.max(8, height - hitboxTrim),
  };
}

const obstacleTemplates: Record<ObstacleType, ObstacleTemplate> = {
  box: createObstacleTemplate(
    [
      "........",
      ".bbbbbb.",
      ".bttttb.",
      ".bttttb.",
      ".bbbbbb.",
      ".b....b.",
      ".bbbbbb.",
      "........",
    ],
    {
      b: "#92400e",
      t: "#facc15",
    },
    4,
  ),
  folder: createObstacleTemplate(
    [
      "..........",
      "...yyyy...",
      ".yyyyyyy..",
      ".yfffffff.",
      ".yffffffy.",
      ".yyyyyyy..",
      "..........",
    ],
    {
      y: "#ca8a04",
      f: "#fef08a",
    },
    4,
  ),
  laptop: createObstacleTemplate(
    [
      "..........",
      "..gggggg..",
      "..gssssg..",
      "..gssssg..",
      "..gggggg..",
      ".kkkkkkkk.",
      ".k......k.",
      ".kkkkkkkk.",
    ],
    {
      g: "#475569",
      s: "#38bdf8",
      k: "#1f2937",
    },
    10,
  ),
};

const RUNNER_WIDTH = runnerFrames[0][0].length * RUNNER_PIXEL;
function getRandomBetween(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

function pickObstacleType() {
  const index = Math.floor(Math.random() * obstacleOrder.length);
  return obstacleOrder[index];
}

function createObstacle(id: number, trackWidth: number): Obstacle {
  const type = pickObstacleType();
  const template = obstacleTemplates[type];
  return {
    id,
    type,
    x: trackWidth + 28,
    width: template.width,
    height: template.height,
    hitboxHeight: template.hitboxHeight,
    passed: false,
  };
}

function PixelSprite({
  rows,
  palette,
  pixelSize,
  className,
  style,
}: {
  rows: readonly string[];
  palette: SpritePalette;
  pixelSize: number;
  className?: string;
  style?: CSSProperties;
}) {
  const { width, height } = getSpriteSize(rows, pixelSize);

  return (
    <div className={className} style={{ width, height, ...style }}>
      {rows.map((row, rowIndex) =>
        row.split("").map((cell, columnIndex) => {
          if (cell === ".") {
            return null;
          }

          return (
            <div
              key={`${rowIndex}-${columnIndex}-${cell}`}
              className="absolute"
              style={{
                left: columnIndex * pixelSize,
                top: rowIndex * pixelSize,
                width: pixelSize,
                height: pixelSize,
                backgroundColor: palette[cell] ?? "transparent",
              }}
            />
          );
        }),
      )}
    </div>
  );
}

function loadBestScore() {
  try {
    const parsed = Number(window.localStorage.getItem(BEST_SCORE_KEY));
    return Number.isFinite(parsed) ? parsed : 0;
  } catch {
    return 0;
  }
}

export function RunnerMiniGame() {
  const [trackWidth, setTrackWidth] = useState(720);
  const [game, setGame] = useState<GameState>({
    runnerY: 0,
    obstacles: [],
    speed: BASE_SPEED,
    score: 0,
    isRunning: true,
    isGameOver: false,
    bestScore: 0,
    runnerFrame: 0,
  });

  const trackRef = useRef<HTMLDivElement | null>(null);
  const gameRef = useRef(game);
  const velocityRef = useRef(0);
  const obstacleIdRef = useRef(0);
  const spawnTimerRef = useRef(0);
  const nextSpawnRef = useRef(1.2);
  const frameTimerRef = useRef(0);
  const scoreRef = useRef(0);
  const lastFrameRef = useRef<number | null>(null);
  const animationRef = useRef<number | null>(null);
  const hasLoadedBestRef = useRef(false);

  useEffect(() => {
    gameRef.current = game;
  }, [game]);

  const jump = useCallback(() => {
    const current = gameRef.current;
    if (!current.isRunning || current.runnerY > 1) {
      return;
    }
    velocityRef.current = JUMP_VELOCITY;
  }, []);

  const restart = useCallback(() => {
    velocityRef.current = 0;
    spawnTimerRef.current = 0;
    nextSpawnRef.current = 1.2;
    obstacleIdRef.current = 0;
    frameTimerRef.current = 0;
    scoreRef.current = 0;
    lastFrameRef.current = null;
    setGame((prev) => ({
      runnerY: 0,
      obstacles: [],
      speed: BASE_SPEED,
      score: 0,
      isRunning: true,
      isGameOver: false,
      bestScore: prev.bestScore,
      runnerFrame: 0,
    }));
  }, []);

  const handleTrackPress = useCallback(() => {
    if (gameRef.current.isGameOver) {
      restart();
      return;
    }
    jump();
  }, [jump, restart]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.code === "Space" || event.code === "ArrowUp") {
        event.preventDefault();
        if (gameRef.current.isGameOver) {
          restart();
        } else {
          jump();
        }
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [jump, restart]);

  useEffect(() => {
    if (!trackRef.current) {
      return;
    }

    const measure = () => {
      if (trackRef.current) {
        setTrackWidth(trackRef.current.clientWidth);
      }
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(trackRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (hasLoadedBestRef.current) {
      return;
    }
    hasLoadedBestRef.current = true;
    setGame((prev) => ({ ...prev, bestScore: loadBestScore() }));
  }, []);

  useEffect(() => {
    const tick = (timestamp: number) => {
      const previous = lastFrameRef.current ?? timestamp;
      const rawDelta = (timestamp - previous) / 1000;
      const delta = Math.min(rawDelta, 0.05);
      lastFrameRef.current = timestamp;

      const current = gameRef.current;
      if (current.isRunning) {
        let nextRunnerY = current.runnerY;
        let nextVelocity = velocityRef.current;
        let nextRunnerFrame = current.runnerFrame;
        nextVelocity -= GRAVITY * delta;
        nextRunnerY = Math.max(0, nextRunnerY + nextVelocity * delta);
        if (nextRunnerY === 0 && nextVelocity < 0) {
          nextVelocity = 0;
        }
        velocityRef.current = nextVelocity;
        frameTimerRef.current += delta;
        if (frameTimerRef.current >= 0.12) {
          frameTimerRef.current = 0;
          nextRunnerFrame = current.runnerFrame === 0 ? 1 : 0;
        }

        const nextSpeed = Math.min(
          MAX_SPEED,
          current.speed + SPEED_GROWTH * delta,
        );
        scoreRef.current += delta * (9 + nextSpeed * 0.04);

        spawnTimerRef.current += delta;
        const shouldSpawn = spawnTimerRef.current >= nextSpawnRef.current;
        if (shouldSpawn) {
          spawnTimerRef.current = 0;
          nextSpawnRef.current = getRandomBetween(0.85, 1.5);
        }

        const obstaclesWithSpawn = shouldSpawn
          ? [
              ...current.obstacles,
              createObstacle(obstacleIdRef.current++, trackWidth),
            ]
          : current.obstacles;

        const movedObstacles = obstaclesWithSpawn
          .map((it) => ({
            ...it,
            x: it.x - nextSpeed * delta,
          }))
          .filter((it) => it.x + it.width >= -6);

        const hasCollision = movedObstacles.some((it) => {
          const intersectsX =
            it.x < RUNNER_X + RUNNER_WIDTH && it.x + it.width > RUNNER_X;
          const intersectsY = nextRunnerY < it.hitboxHeight;
          return intersectsX && intersectsY;
        });

        const passedObstacles = movedObstacles.map((it) => {
          if (!it.passed && it.x + it.width < RUNNER_X) {
            return { ...it, passed: true };
          }
          return it;
        });

        const roundedScore = Math.floor(scoreRef.current);
        const nextBest = Math.max(current.bestScore, roundedScore);

        if (hasCollision) {
          if (nextBest > current.bestScore) {
            try {
              window.localStorage.setItem(BEST_SCORE_KEY, String(nextBest));
            } catch {
              // Ignore storage errors in private mode.
            }
          }

          setGame({
            runnerY: nextRunnerY,
            obstacles: passedObstacles,
            speed: nextSpeed,
            score: roundedScore,
            isRunning: false,
            isGameOver: true,
            bestScore: nextBest,
            runnerFrame: nextRunnerFrame,
          });
        } else {
          setGame({
            runnerY: nextRunnerY,
            obstacles: passedObstacles,
            speed: nextSpeed,
            score: roundedScore,
            isRunning: true,
            isGameOver: false,
            bestScore: nextBest,
            runnerFrame: nextRunnerFrame,
          });
        }
      }

      animationRef.current = window.requestAnimationFrame(tick);
    };

    animationRef.current = window.requestAnimationFrame(tick);
    return () => {
      if (animationRef.current !== null) {
        window.cancelAnimationFrame(animationRef.current);
      }
    };
  }, [trackWidth]);

  const speedDisplay = useMemo(
    () => `${(game.speed / BASE_SPEED).toFixed(2)}x`,
    [game.speed],
  );

  return (
    <section className="relative left-1/2 mt-10 w-screen -translate-x-1/2 px-0">
      <div className="mx-auto w-full max-w-[1200px]">
      <Card className="w-full rounded-none border-x-0 border-y-2 bg-gradient-to-b from-list-bg-strong/50 to-card p-0">
        <div className="px-5 pt-5 sm:px-6 sm:pt-6 lg:px-10">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="flex flex-col gap-1">
              <p className="text-sm uppercase tracking-[0.2em] text-list-font/80">
                Pixel Office Run
              </p>
              <h3 className="font-heading text-3xl font-medium leading-none sm:text-4xl">
                Мини-игра
              </h3>
            </div>
            <div className="flex flex-wrap gap-2 text-sm">
              <span className="rounded-full border-2 border-list-border bg-body-bg px-3 py-1.5 text-list-font">
                Счет: <strong>{game.score}</strong>
              </span>
              <span className="rounded-full border-2 border-list-border bg-body-bg px-3 py-1.5 text-list-font">
                Скорость: <strong>{speedDisplay}</strong>
              </span>
              <span className="rounded-full border-2 border-list-border bg-body-bg px-3 py-1.5 text-list-font">
                Рекорд: <strong>{game.bestScore}</strong>
              </span>
            </div>
          </div>

          <p className="mt-3 text-list-font">
            Нажмите <strong>Space</strong> / <strong>ArrowUp</strong> или
            кликните по полю, чтобы прыгнуть.
          </p>
        </div>

        <div
          ref={trackRef}
          className="relative mt-5 h-56 w-full overflow-hidden bg-[linear-gradient(180deg,rgba(56,189,248,0.12)_0%,rgba(56,189,248,0.04)_38%,rgba(2,6,23,0.10)_100%)]"
          onPointerDown={handleTrackPress}
          role="button"
          tabIndex={0}
          aria-label="Игровое поле для прыжка"
          onKeyDown={(event) => {
            if (event.code === "Enter" || event.code === "Space") {
              event.preventDefault();
              handleTrackPress();
            }
          }}
        >
          <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-[repeating-linear-gradient(90deg,transparent_0,transparent_48px,rgba(148,163,184,0.15)_48px,rgba(148,163,184,0.15)_52px)] opacity-40" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[4px] bg-list-border/80" />
          <div className="pointer-events-none absolute inset-x-0 bottom-[4px] h-7 bg-[repeating-linear-gradient(90deg,rgba(148,163,184,0.14)_0,rgba(148,163,184,0.14)_24px,transparent_24px,transparent_36px)]" />

          <PixelSprite
            rows={runnerFrames[game.runnerFrame]}
            palette={runnerPalette}
            pixelSize={RUNNER_PIXEL}
            className="absolute drop-shadow-[0_0_8px_rgba(37,99,235,0.45)]"
            style={{
              left: RUNNER_X,
              bottom: game.runnerY,
            }}
          />

          {game.obstacles.map((it) => (
            <PixelSprite
              key={it.id}
              rows={obstacleTemplates[it.type].rows}
              palette={obstacleTemplates[it.type].palette}
              pixelSize={OBSTACLE_PIXEL}
              className="absolute drop-shadow-[0_0_6px_rgba(15,23,42,0.35)]"
              style={{
                left: it.x,
                bottom: 0,
              }}
            />
          ))}

          {game.isGameOver && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-body-bg/90 p-4 text-center backdrop-blur-[1px]">
              <p className="font-heading text-4xl leading-none">Game Over</p>
              <p className="text-list-font">Финальный счет: {game.score}</p>
              <p className="text-list-font">
                Клик по полю или Space для рестарта
              </p>
            </div>
          )}
        </div>
      </Card>
      </div>
    </section>
  );
}
