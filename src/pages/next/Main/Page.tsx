import React from "react";
import dayjs from "dayjs";
import styled, { css } from "styled-components";
import { expiriencePlural } from "../../../lib/plural";
import { desktop } from "../../../ui/responsive";
import { Hero } from "../../../ui/atoms";
import "../../../ui/customize.less";
import { projects } from "./projects";
import { expirience, Tag } from "./expirience";
import { articles } from "./artcicles";
import { Link } from "react-router-dom";

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

export function MainPage() {
  return (
    <>
      <Hero>
        Приветствую<i>!</i>
        <br />Я Дмитрий.
      </Hero>

      <Description>Занимаюсь фронтенд разработкой в ТД ЦУМ</Description>

      <Socials>
        <a
          href="https://vk.com/dmitryshelomanov"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/icons/vk-svgrepo-com.svg" alt="vk" />
        </a>
        <a
          href="malito:dmitryshelomanov@mail.ru"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/icons/mail-ru-svgrepo-com.svg" alt="mail" />
        </a>
        <a
          href="https://t.me/dmitryshelomanov"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/icons/telegram-svgrepo-com.svg" alt="TG" />
        </a>
        <a
          href="https://github.com/dmitryshelomanov"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/icons/github-svgrepo-com.svg" alt="guthub" />
        </a>
      </Socials>

      <a
        href="https://hh.ru/resume/69d46fb4ff03a1e96e0039ed1f3978684e6571"
        target="_blank"
        rel="noreferrer"
      >
        Ссылка на hh.ru
      </a>

      <List>
        <img
          alt="skills"
          src="https://skillicons.dev/icons?i=js,ts,html,css,react,nodejs,docker"
          className="skills"
        />
      </List>

      <List>
        <Hero>
          <span data-content="Карьера">
            Карьера <Tag>{expiriencePlural(FULL_TIME)}</Tag>
          </span>
        </Hero>

        {expirience.map((it) => (
          <li key={it.link}>
            <h2>
              <Link to={it.link}>{it.company}</Link>
            </h2>
            <p>{it.position}</p>
          </li>
        ))}
      </List>

      <List>
        <Hero>
          <span data-content="Статьи">Статьи</span>
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
          <span data-content="Проекты">Проекты</span>
        </Hero>

        <li key="explory">
          <h2>
            <a href="#">Explory</a>
          </h2>
          <p>
            С друзьями в свободное от работы время сделали стартап по поиску
            мероприятий (в целях развития себя как специалистов). Я принимал
            участие в проекте в роли мобильного разработчика и создавал
            мобильное приложение на React Native (IOS + Andoid)
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

            {/* {it.video && <video src={it.video} playsInline loop autoPlay />} */}

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
    </>
  );
}
