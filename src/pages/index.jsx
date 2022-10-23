import { Route, Routes } from "react-router-dom";
import { GameOfLive2Page } from "./GameOfLiveV2";
import { FromGithubPage } from "./FromGithub";
import { SnippetsPage } from "./Snippets";
import { GuessPage } from "./Guess";
import { snipetsList } from "../features/snipets";

const fromGithub = [
  {
    path: "/",
    page: <FromGithubPage url="https://dmitryshelomanov.github.io/cv" />,
  },
  {
    path: "/snake",
    page: <FromGithubPage url="https://dmitryshelomanov.github.io/snake" />,
  },
  {
    path: "/towers",
    page: (
      <FromGithubPage url="https://dmitryshelomanov.github.io/tower_of_hanoi/" />
    ),
  },
  {
    path: "/game-of-live",
    page: (
      <FromGithubPage url="https://dmitryshelomanov.github.io/reason-game-of-life/" />
    ),
  },
  {
    path: "/player",
    page: (
      <FromGithubPage url="https://dmitryshelomanov.github.io/music-player/" />
    ),
  },
];

export const routes = (
  <Routes>
    {fromGithub.map((it) => (
      <Route path={it.path} element={it.page} />
    ))}

    <Route path="/guess" element={<GuessPage />} />
    <Route path="/game-of-live-v2" element={<GameOfLive2Page />} />

    {snipetsList.map((it) => (
      <Route
        path={`/snipets/${it.id}`}
        element={<SnippetsPage snipet={it} />}
      />
    ))}
  </Routes>
);
