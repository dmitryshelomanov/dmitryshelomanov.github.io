import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { Hero } from "../../../ui/atoms";
import { projects } from "./projects";
import { experience } from "./experience";
import { articles } from "./artcicles";
import { desktop } from "../../../ui/responsive";
import "../../../ui/customize.less";

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

const PostsList = styled(List)<{
  variant?: "default" | "small";
  grid?: boolean;
}>`
  width: 100%;

  img {
    border-radius: 6px;
    width: 65px;
    height: 65px;
    align-self: center;

    ${desktop(css`
      width: 100px;
      height: 100px;
    `)}
  }

  h3 {
    font-size: 24px;
    font-weight: 500;
  }

  li {
    display: flex;
    gap: 16px;
    align-items: flex-start;
    padding: 16px;
    border: 2px solid var(--list-border-color);
    border-radius: 6px;
    background-color: var(--list-bg);
  }

  p {
    color: var(--list-font-color);
  }

  ${(p) =>
    p.variant === "small" &&
    css`
      img {
        width: 65px;
        height: 65px;
      }

      h3 {
        font-size: 17px;
      }
    `}

  ${(p) =>
    p.grid &&
    css`
      display: grid;
      grid-template-columns: 1fr;

      h1 {
        grid-column: 1/-1;
      }

      ${desktop(css`
        grid-template-columns: repeat(3, 1fr);
      `)}
    `}
`;

const PostRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

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
          <img src="/icons/vk-svgrepo-com.svg" alt="vk" width={800} height={800} />
        </a>
        <a
          href="malito:dmitryshelomanov@mail.ru"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/icons/mail-ru-svgrepo-com.svg" alt="mail" width={800} height={800} />
        </a>
        <a
          href="https://t.me/dmitryshelomanov"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/icons/telegram-svgrepo-com.svg" alt="TG" width={800} height={800} />
        </a>
        <a
          href="https://github.com/dmitryshelomanov"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/icons/github-svgrepo-com.svg" alt="guthub" width={800} height={800} />
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
        <img alt="skills" src="/icons/skills.svg" className="skills" width={385.5} height={48} />
      </List>

      <PostsList>
        <Hero>
          <span data-content="Карьера">Карьера</span>
        </Hero>

        {experience.map((it) => (
          <li key={it.link}>
            <img src={`/logo/${it.logo}`} alt={it.company} width={it.width} height={it.height} />
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
              width={it.width}
              height={it.height}
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

      <PostsList variant="small" grid>
        <Hero>
          <span data-content="Проекты">Проекты</span>
        </Hero>

        {projects.map((it) => (
          <li key={it.link}>
            <img src={it.logo} alt="" width={it.width} height={it.height} />
            <h3>
              <Link to={it.link}>{it.title}</Link>
            </h3>
          </li>
        ))}
      </PostsList>
    </>
  );
}
