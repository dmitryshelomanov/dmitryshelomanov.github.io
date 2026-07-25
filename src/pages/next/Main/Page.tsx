import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Hero } from "../../../ui/atoms";
import { projects } from "./projects";
import { experience } from "./experience";
import { articles } from "./artcicles";

const listClassName =
  "flex flex-col m-0 p-0 mt-4 gap-[21px] [&_li]:list-none";

function PostsList({
  variant,
  grid,
  children,
}: {
  variant?: "default" | "small";
  grid?: boolean;
  children: ReactNode;
}) {
  const isSmall = variant === "small";

  return (
    <ul
      className={[
        listClassName,
        "w-full",
        grid
          ? "grid grid-cols-1 lg:grid-cols-3 [&>h1]:col-span-full"
          : "flex flex-col",
        "[&_li]:flex [&_li]:gap-4 [&_li]:items-start [&_li]:p-4 [&_li]:border-2 [&_li]:border-list-border [&_li]:rounded-2xl [&_li]:bg-list-bg [&_li]:transition-all [&_li]:duration-150",
        "[&_li:hover]:bg-list-bg-strong [&_li:hover]:border-accent [&_li:hover]:-translate-x-0.5 [&_li:hover]:-translate-y-0.5 [&_li:hover]:shadow-brutal",
        "[&_img]:rounded-xl [&_img]:self-center",
        isSmall
          ? "[&_img]:w-[65px] [&_img]:h-[65px] [&_h3]:text-[17px]"
          : "[&_img]:w-[65px] [&_img]:h-[65px] lg:[&_img]:w-[100px] lg:[&_img]:h-[100px] [&_h3]:text-2xl [&_h3]:font-medium",
        "[&_p]:text-list-font",
      ].join(" ")}
    >
      {children}
    </ul>
  );
}

export function MainPage() {
  return (
    <>
      <Hero>
        Приветствую<i>!</i>
        <br />Я Дмитрий.
      </Hero>

      <h4 className="text-[21px] mt-[21px] font-semibold">
        Занимаюсь фронтенд разработкой в ТД ЦУМ
      </h4>

      <div className="mt-[30px] flex flex-row gap-4 [&_a]:m-0 [&_a]:chip [&_img]:h-9 [&_img]:w-9 [&_img]:icon-adaptive">
        <a
          href="https://vk.com/dmitryshelomanov"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/icons/vk-svgrepo-com.svg" alt="vk" width={800} height={800} />
        </a>
        <a
          href="mailto:dmitryshelomanov@mail.ru"
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
          <img src="/icons/github-svgrepo-com.svg" alt="github" width={800} height={800} />
        </a>
      </div>

      <a
        href="https://hh.ru/applicant/resumes/view?resume=69d46fb4ff03a1e96e0039ed1f3978684e6571"
        target="_blank"
        rel="noreferrer"
        className="link-btn mt-1"
      >
        Ссылка на PDF вариант
      </a>

      <ul className={`${listClassName} card p-4`}>
        <img
          alt="skills"
          src="/icons/skills.svg"
          className="skills"
          width={385.5}
          height={48}
        />
      </ul>

      <PostsList>
        <Hero>
          <span data-content="Карьера">Карьера</span>
        </Hero>

        {experience.map((it) => (
          <li key={it.link}>
            <img src={`/logo/${it.logo}`} alt={it.company} width={it.width} height={it.height} />
            <div className="flex flex-col gap-2">
              <h3>
                <Link to={it.link}>{it.company}</Link>
              </h3>
              <p>{it.position}</p>
            </div>
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
            <div className="flex flex-col gap-2">
              <h3>
                <a href={it.link}>{it.title}</a>
              </h3>
              <p>{it.text}</p>
            </div>
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
