const BASE_URL =
  "https://via.assets.so/img.jpg?w=150&h=150&tc=white&t={t}&bg=rgb(102, 102, 102)";

export const projects = [
  {
    logo: BASE_URL.replace("{t}", "P"),
    title: "Parser GUI",
    link: "/p/parser",
  },
  {
    logo: "logo/snakeAILogo.png",
    title: "Snake AI",
    link: "/p/snake/",
  },
  {
    logo: "logo/gameOfLiveLogo.png",
    title: "Game of Live",
    link: "/p/gameOfLive",
  },
  {
    logo: "logo/hanoiLogo.png",
    title: "Towers of Hanoi",
    link: "/p/towers",
  },
  {
    logo: "logo/mobitvaLogo.png",
    title: "Мобитва next",
    link: "/p/mobilefight",
  },
  {
    logo: "logo/playerLogo.png",
    title: "Музыкальный плеер",
    link: "/p/player",
  },
  {
    logo: BASE_URL.replace("{t}", "E"),
    title: "PHP engine",
    link: "/p/engine",
  },
];
