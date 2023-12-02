import React from "react";
import ReactDOM from "react-dom/client";
import styled from "styled-components";
import "./ui/customize.less";

const Page = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 8px;
`;

const Stub = styled.div`
  z-index: 2;
  background-color: #fff;
  padding: 24px;
  border-radius: 6px;
  width: 100%;
  max-width: 320px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  a {
    text-decoration: underline;
  }

  a,
  p {
    color: #607d8b;
    margin: 0;
  }
`;

const projects = [
  {
    title: "Game of Live 🎲",
    link: "https://dmitryshelomanov.github.io/reason-game-of-life/",
  },
  {
    title: "Towers of Hanoi 👜",
    link: "https://dmitryshelomanov.github.io/tower_of_hanoi/",
  },
  { title: "Snake AI 🐍", link: "https://dmitryshelomanov.github.io/snake//" },
  {
    title: "Мобитва next 🎮",
    link: "https://mobilefight.github.io/mobile-fight/",
  },
  {
    title: "Музыкальный плеер 🎹",
    link: "https://dmitryshelomanov.github.io/music-player/#/",
  },
];

ReactDOM.createRoot(document.getElementById("root")).render(
  <Page>
    <Stub>
      <p>
        Привет! Меня зовут <strong>Шеломанов Дмитрий</strong>
      </p>
      <p>Frontend engineer</p>
      <a href="https://dmitryshelomanov.github.io/cv/" target="_blank">
        <strong>Ссылка на резюме</strong>
      </a>
    </Stub>
    <Stub>
      <p>
        <strong>Где меня найти:</strong>
      </p>
    </Stub>
    <Stub>
      <a href="https://vk.com/dmitryshelomanov" target="_blank">
        vk
      </a>
    </Stub>
    <Stub>
      <a href="malito:dmitryshelomanov@mail.ru" target="_blank">
        email
      </a>
    </Stub>
    <Stub>
      <a href="https://github.com/dmitryshelomanov" target="_blank">
        github
      </a>
    </Stub>
    <Stub>
      <a href="https://t.me/dmitryshelomanov" target="_blank">
        telegram
      </a>
    </Stub>
    <Stub>
      <p>
        <strong>Проекты:</strong>
      </p>
    </Stub>

    {projects.map((project) => (
      <Stub key={project.link}>
        <a href={project.link} target="_blank">
          {project.title}
        </a>
      </Stub>
    ))}
  </Page>
);
