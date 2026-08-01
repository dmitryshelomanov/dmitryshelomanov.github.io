export const projects: Record<
  string,
  {
    title: string;
    link: string;
    text: JSX.Element;
    images: string[];
    width: number;
    height: number;
  }
> = {
  iris: {
    title: "Iris",
    link: "https://dmitryshelomanov.github.io/iris/",
    width: 1290,
    height: 2796,
    text: (
      <>
        Pro-камера для iOS и Android: мульти-линзы, ручные ISO/shutter/WB/focus,
        assist-оверлеи и film-looks, которые впекаются в файл нативно. Expo Dev
        Client, Vision Camera и свой native-модуль look-bake — обработка на
        устройстве.
      </>
    ),
    images: [
      "/iris/01-cover.png",
      "/iris/02-camera.png",
      "/iris/03-gallery.png",
      "/iris/04-photo.png",
      "/iris/05-settings.png",
      "/iris/06-looks.png",
    ],
  },
  lenswire: {
    title: "Lenswire",
    link: "https://dmitryshelomanov.github.io/lenswire/",
    width: 1290,
    height: 2796,
    text: (
      <>
        On-device HTTP(S) inspector с локальным MITM: захват трафика через VPN
        (Packet Tunnel / VpnService), расшифровка HTTPS, фильтры, mock и rewrite
        — без десктопного прокси. Expo и свой native proxy-модуль.
      </>
    ),
    images: [
      "/lenswire/01-cover.png",
      "/lenswire/02-traffic.png",
      "/lenswire/03-domain.png",
      "/lenswire/04-request.png",
      "/lenswire/05-response.png",
      "/lenswire/06-overrides.png",
    ],
  },
  pixelkit: {
    title: "PixelKit",
    link: "https://dmitryshelomanov.github.io/pixelkit/",
    width: 988,
    height: 1024,
    text: (
      <>
        Лёгкий фото-тулкит в браузере: удаление фона, конвертация и сжатие
        изображений. Инференс через WebGPU/WASM и Transformers.js — обработка
        локально, файлы не уходят на сервер.
      </>
    ),
    images: ["/pixelkit.png"],
  },
  parser: {
    title: "Parser GUI",
    link: "https://dmitryshelomanov.github.io/parser-gui/",
    width: 4064,
    height: 2316,
    text: (
      <>
        Позволяет быстро выделять элементы страницы, автоматически генерируя
        структурированные данные и код для Puppeteer. Идеально подходит для
        анализа, прототипирования или передачи задач разработчикам — без
        необходимости писать селекторы вручную.
      </>
    ),
    images: ["/parser.jpeg"],
  },
  snake: {
    title: "Snake AI",
    link: "https://dmitryshelomanov.github.io/snake/",
    width: 2116,
    height: 2240,
    text: (
      <>
        Интерактивная демонстрация работы A*, BFS и DFS на игровом поле.
        Идеально для обучения, сравнения эффективности алгоритмов и понимания их
        поведения в реальном времени.
      </>
    ),
    images: ["/snake.jpeg"],
  },
  gameOfLive: {
    title: "Game of Live",
    link: "https://dmitryshelomanov.github.io/reason-game-of-life/",
    width: 1542,
    height: 1538,
    text: (
      <>
        Игра «Жизнь» Конвея, перенесённая в ReasonML/ReasonJS — чистый,
        типизированный и функциональный код. Идеально демонстрирует мощь и
        элегантность Reason при работе с алгоритмами и визуализацией.
      </>
    ),
    images: ["/gameOfLive.jpeg"],
  },
  towers: {
    title: "Towers of Hanoi",
    link: "https://dmitryshelomanov.github.io/tower_of_hanoi/",
    width: 1544,
    height: 1016,
    text: (
      <>
        Интерактивная демонстрация алгоритма Ханойских башен. Меняйте количество
        дисков, запускайте автоматическое решение и наблюдайте за работой
        рекурсивного алгоритма — наглядно, просто и обучающе.
      </>
    ),
    images: ["/towers.jpeg"],
  },
  mobilefight: {
    title: "Мобитва next",
    link: "https://mobilefight.github.io/mobile-fight/",
    width: 776,
    height: 1686,
    text: (
      <>
        Попытка воссоздать дух классической «Мобитвы» — с квестами, чатом, боями
        1 на 1 и PvP-аренами. Современный интерфейс, но ностальгическая
        механика. Для тех, кто помнит, и для тех, кто хочет узнать.
      </>
    ),
    images: ["/mobilefight.jpeg"],
  },
  player: {
    title: "Музыкальный плеер",
    link: "https://dmitryshelomanov.github.io/music-player",
    width: 1278,
    height: 2076,
    text: (
      <>
        Простой, но живой плеер с аудиовизуализацией — отображает звуковые волны
        в реальном времени. Идеально для тех, кто ценит чистый интерфейс и
        визуальное сопровождение музыки.
      </>
    ),
    images: ["/player.jpeg"],
  },
  engine: {
    title: "PHP engine",
    link: "https://github.com/dmitryshelomanov/Engine",
    width: 3082,
    height: 2102,
    text: (
      <>
        Учебный проект, созданный в колледже: простой, но мощный бэкенд на PHP с
        маршрутизацией, контроллерами и шаблонами. Идеально подходит для
        быстрого старта MVP или изучения архитектуры Laravel.
      </>
    ),
    images: ["/engine.jpeg"],
  },
  "tasks-solutions": {
    title: "Tasks Solutions",
    link: "https://dmitryshelomanov.github.io/tasks-solutions/",
    width: 300,
    height: 300,
    text: (
      <>
        Документация по алгоритмам, структурам данных, JavaScript, TypeScript,
        веб-разработке, React и AI. Материалы для подготовки к собеседованиям,
        паттерны решения задач и исходный код с тестами.
      </>
    ),
    images: ["/logo/tasksSolutionsLogo.svg"],
  },
};
