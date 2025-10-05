export const projects: Record<
  string,
  { title: string; link: string; text: JSX.Element; img: string }
> = {
  parser: {
    title: "Parser GUI",
    link: "https://dmitryshelomanov.github.io/parser-gui/",
    text: (
      <>
        Позволяет быстро выделять элементы страницы, автоматически генерируя
        структурированные данные и код для Puppeteer. Идеально подходит для
        анализа, прототипирования или передачи задач разработчикам — без
        необходимости писать селекторы вручную.
      </>
    ),
    img: "/parser.jpeg",
  },
  snake: {
    title: "Snake AI",
    link: "https://dmitryshelomanov.github.io/snake/",
    text: (
      <>
        Интерактивная демонстрация работы A*, BFS и DFS на игровом поле.
        Идеально для обучения, сравнения эффективности алгоритмов и понимания их
        поведения в реальном времени.
      </>
    ),
    img: "/snake.jpeg",
  },
  gameOfLive: {
    title: "Game of Live",
    link: "https://dmitryshelomanov.github.io/reason-game-of-life/",
    text: (
      <>
        Игра «Жизнь» Конвея, перенесённая в ReasonML/ReasonJS — чистый,
        типизированный и функциональный код. Идеально демонстрирует мощь и
        элегантность Reason при работе с алгоритмами и визуализацией.
      </>
    ),
    img: "/gameOfLive.jpeg",
  },
  towers: {
    title: "Towers of Hanoi",
    link: "https://dmitryshelomanov.github.io/tower_of_hanoi/",
    text: (
      <>
        Интерактивная демонстрация алгоритма Ханойских башен. Меняйте количество
        дисков, запускайте автоматическое решение и наблюдайте за работой
        рекурсивного алгоритма — наглядно, просто и обучающе.
      </>
    ),
    img: "/towers.jpeg",
  },
  mobilefight: {
    title: "Мобитва next",
    link: "https://mobilefight.github.io/mobile-fight/",
    text: (
      <>
        Попытка воссоздать дух классической «Мобитвы» — с квестами, чатом, боями
        1 на 1 и PvP-аренами. Современный интерфейс, но ностальгическая
        механика. Для тех, кто помнит, и для тех, кто хочет узнать.
      </>
    ),
    img: "/mobilefight.jpeg",
  },
  player: {
    title: "Музыкальный плеер",
    link: "https://dmitryshelomanov.github.io/music-player",
    text: (
      <>
        Простой, но живой плеер с аудиовизуализацией — отображает звуковые волны
        в реальном времени. Идеально для тех, кто ценит чистый интерфейс и
        визуальное сопровождение музыки.
      </>
    ),
    img: "/player.jpeg",
  },
  engine: {
    title: "PHP engine",
    link: "https://github.com/dmitryshelomanov/Engine",
    text: (
      <>
        Учебный проект, созданный в колледже: простой, но мощный бэкенд на PHP с
        маршрутизацией, контроллерами и шаблонами. Идеально подходит для
        быстрого старта MVP или изучения архитектуры Laravel.
      </>
    ),
    img: "/engine.jpeg",
  },
};
