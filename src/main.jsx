import React from "react";
import ReactDOM from "react-dom/client";
import dayjs from "dayjs";
import styled, { css } from "styled-components";
import { desktop } from "./ui/responsive";
import { projects } from "./projects";
import { expirience, Tag } from "./expirience";
import { expiriencePlural } from "./lib/plural";
import "./ui/customize.less";
import { articles } from "./artcicles";

const Page = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 3rem;
`;

const Hero = styled.h1`
  margin-top: 32px;
  font-size: 36px;
  white-space: pre;
  --hero-offset: 0.15em;

  ${desktop(css`
    font-size: 82px;
  `)}

  span {
    position: relative;
    cursor: default;
    display: inline-block;

    @supports (mix-blend-mode: multiply) {
      color: #ff00ff;
    }

    &:hover {
      &::before,
      &::after {
        transform: none;
      }
    }

    &::before,
    &::after {
      content: attr(content);
      transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      mix-blend-mode: multiply;
      pointer-events: none;
    }

    @supports (mix-blend-mode: multiply) {
      &::before {
        transform: translate(
          calc(-1 * var(--hero-offset)),
          calc(-1 * var(--hero-offset))
        );
        color: #ffff00;
      }

      &::after {
        transform: translate(var(--hero-offset), var(--hero-offset));
        color: #00ffff;
      }
    }
  }
`;

const Description = styled.h4`
  font-size: 21px;
  margin-top: 21px;
  font-weight: 600;
`;

const AppPreview = styled.img`
  width: auto;
  max-width: 320px;
  cursor: pointer;
  max-height: 256px;

  ${desktop(css`
    max-width: 780px;
  `)}
`;

const Socials = styled.div`
  flex-direction: row;
  gap: 16px;
  display: flex;
  margin-top: 30px;

  a {
    margin: 0px;
  }

  img {
    width: 36px;
    height: 36px;
  }
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0px;
  padding: 0px;
  margin-top: 8px;
  gap: 21px;

  li {
    list-style: none;
  }

  h2 {
    text-decoration: underline;
  }
`;

const FULL_TIME = Math.ceil(
  dayjs(Date.now()).diff(
    dayjs().set("date", 1).set("month", 6).set("year", 2017),
    "year",
    true
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Page>
    <Hero>
      Привет<i>!</i>
      <br />Я Дмитрий.
    </Hero>

    <Description>Занимаюсь фронтенд разработкой в ТД ЦУМ</Description>

    <Socials>
      <a href="https://vk.com/dmitryshelomanov" target="_blank">
        <img src="/icons/vk-svgrepo-com.svg" />
      </a>
      <a href="malito:dmitryshelomanov@mail.ru" target="_blank">
        <img src="/icons/mail-ru-svgrepo-com.svg" />
      </a>
      <a href="https://t.me/dmitryshelomanov" target="_blank">
        <img src="/icons/telegram-svgrepo-com.svg" />
      </a>
      <a href="https://github.com/dmitryshelomanov" target="_blank">
        <img src="/icons/github-svgrepo-com.svg" />
      </a>
    </Socials>

    <List>
      <Hero>
        <span content="Карьера">
          Карьера <Tag>{expiriencePlural(FULL_TIME)}</Tag>
        </span>
      </Hero>

      {expirience.map((it) => (
        <li key={it.link}>
          <h2>
            <a href="https://dmitryshelomanov.github.io/cv">{it.company}</a>
          </h2>
          <p>{it.position}</p>
        </li>
      ))}
    </List>

    <List>
      <Hero>
        <span content="Статьи">Статьи</span>
      </Hero>

      {articles.map((it) => (
        <li key={it.link}>
          <h2>
            <a href={it.link}>{it.title}</a>
          </h2>
          <p>{it.text}</p>
        </li>
      ))}
    </List>

    <List>
      <Hero>
        <span content="Проекты">Проекты</span>
      </Hero>

      <li key="explory">
        <h2>
          <a href="#">Explory</a>
        </h2>
        <p>
          Приложение по поиску мероприятий IOS/Android. В котором следующие
          возможности: создание ивента и приглошение участников, поиск ивентов
          (так же на карте), уведомления, профиль и фоловеры
        </p>
        <AppPreview
          src="/explory.jpeg"
          alt="Explory App"
          onClick={() => {
            window.open("/explory.jpeg", "_blank");
          }}
        />
      </li>

      {projects.map((it) => (
        <li key={it.link}>
          <h2>
            <a href={it.link}>{it.title}</a>
          </h2>
          <p>{it.text}</p>

          {it.img && (
            <AppPreview
              src={it.img}
              onClick={() => {
                window.open(it.link, "_blank");
              }}
            />
          )}
        </li>
      ))}
    </List>
  </Page>
);
