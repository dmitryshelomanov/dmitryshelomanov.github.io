import dayjs from "dayjs";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { experiencePlural } from "../../../lib/plural";
import { Hero } from "../../../ui/atoms";
import "../../../ui/customize.less";
import { projects } from "./projects";
import { experience, Tag } from "./experience";
import { articles } from "./artcicles";

const Description = styled.h4`
  font-size: 21px;
  margin-top: 21px;
  font-weight: 600;
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

const PostsList = styled(List)<{ variant?: "default" | "small" }>`
  img {
    border-radius: 8px;
    width: 125px;
    height: 125px;
  }

  h3 {
    font-size: 24px;
    font-weight: 500;
  }

  li {
    display: flex;
    gap: 16px;
    align-items: flex-start;
  }

  p {
    color: #666666;
  }

  ${(p) =>
    p.variant === "small" &&
    css`
      img {
        width: 75px;
        height: 75px;
      }

      h3 {
        font-size: 17px;
      }
    `}
`;

const PostRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
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
        href="https://hh.ru/applicant/resumes/view?resume=69d46fb4ff03a1e96e0039ed1f3978684e6571"
        target="_blank"
        rel="noreferrer"
      >
        Ссылка на PDF вариант
      </a>

      <List>
        <img alt="skills" src="/icons/skills.svg" className="skills" />
      </List>

      <PostsList>
        <Hero>
          <span data-content="Карьера">
            Карьера <Tag>{experiencePlural(FULL_TIME)}</Tag>
          </span>
        </Hero>

        {experience.map((it) => (
          <li key={it.link}>
            <img src={`/logo/${it.logo}`} />
            <PostRow>
              <h3>
                <Link to={it.link}>{it.company}</Link>
              </h3>
              <p>{it.position}</p>
            </PostRow>
          </li>
        ))}
      </PostsList>

      <PostsList variant="small">
        <Hero>
          <span data-content="Статьи">Статьи</span>
        </Hero>

        {articles.map((it) => (
          <li key={it.link}>
            <img
              alt=""
              src={
                it.logo.startsWith("http") ? it.logo : `/logo/arts/${it.logo}`
              }
            />
            <PostRow>
              <h3>
                <a href={it.link}>{it.title}</a>
              </h3>
              <p>{it.text}</p>
            </PostRow>
          </li>
        ))}
      </PostsList>

      <PostsList variant="small">
        <Hero>
          <span data-content="Проекты">Проекты</span>
        </Hero>

        {projects.map((it) => (
          <li key={it.link}>
            <img src={it.logo} alt="" />
            <h3>
              <Link to={it.link}>{it.title}</Link>
            </h3>
          </li>
        ))}
      </PostsList>
    </>
  );
}
