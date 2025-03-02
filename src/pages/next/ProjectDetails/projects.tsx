import React from "react";

export const projects: Record<
  string,
  { title: string; link: string; text: JSX.Element; img: string }
> = {
  parser: {
    title: "Parser GUI",
    link: "https://dmitryshelomanov.github.io/parser-gui/",
    text: (
      <>
        Попытка сделать интерактивный парсинг сайтов. Планировалось в итоге
        отдавать код с помощью кодгена для Puppeter
      </>
    ),
    img: "/parser.jpeg",
  },
  snake: {
    title: "Snake AI",
    link: "https://dmitryshelomanov.github.io/snake/",
    text: (
      <>
        Демо алгоритмов поиска в&nbsp;визуальной игре змейка. Использованы
        алгоритмы такие как: A*, BFS, DFS
      </>
    ),
    img: "/snake.jpeg",
  },
  gameOfLive: {
    title: "Game of Live",
    link: "https://dmitryshelomanov.github.io/reason-game-of-life/",
    text: <>Классическая игра Жизнь на&nbsp;ReasonJS</>,
    img: "/gameOfLive.jpeg",
  },
  towers: {
    title: "Towers of Hanoi",
    link: "https://dmitryshelomanov.github.io/tower_of_hanoi/",
    text: (
      <>Классическая загадка с&nbsp;возможностью просмотра решения (алгоритм)</>
    ),
    img: "/towers.jpeg",
  },
  mobilefight: {
    title: "Мобитва next",
    link: "https://mobilefight.github.io/mobile-fight/",
    text: (
      <>
        Попытка воссоздать старую текстовую онлайн игру мобитва (Квесты, чат,
        бои 1 на 1 и множественные).
      </>
    ),
    img: "/mobilefight.jpeg",
  },
  player: {
    title: "Музыкальный плеер",
    link: "https://dmitryshelomanov.github.io/music-player",
    text: <>Простой музыкальный плеер с&nbsp;визуализацией</>,
    img: "/player.jpeg",
  },
  engine: {
    title: "PHP engine",
    link: "https://github.com/dmitryshelomanov/Engine",
    text: (
      <>
        В колледже пока обучался написал проект напоминающий Laravel, который
        помогает быстро сделать какой то прототип с бекендом на php
      </>
    ),
    img: "/engine.jpeg",
  },
};
