import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { RunnerMiniGame } from "@/features/RunnerMiniGame";
import { Hero } from "@/ui/atoms";
import { projects } from "./projects";
import { experience } from "./experience";
import { articles } from "./artcicles";

const listClassName = "flex flex-col m-0 p-0 mt-4 gap-[21px] [&_li]:list-none";

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

      <div className="mt-[30px] flex flex-row gap-4 [&_img]:h-9 [&_img]:w-9 [&_img]:icon-adaptive">
        <Button
          asChild
          variant="outline"
          size="icon"
          className="h-auto w-auto p-3"
        >
          <a
            href="https://vk.com/dmitryshelomanov"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/icons/vk-svgrepo-com.svg"
              alt="vk"
              width={800}
              height={800}
            />
          </a>
        </Button>
        <Button
          asChild
          variant="outline"
          size="icon"
          className="h-auto w-auto p-3"
        >
          <a
            href="mailto:dmitryshelomanov@mail.ru"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/icons/mail-ru-svgrepo-com.svg"
              alt="mail"
              width={800}
              height={800}
            />
          </a>
        </Button>
        <Button
          asChild
          variant="outline"
          size="icon"
          className="h-auto w-auto p-3"
        >
          <a
            href="https://t.me/dmitryshelomanov"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/icons/telegram-svgrepo-com.svg"
              alt="TG"
              width={800}
              height={800}
            />
          </a>
        </Button>
        <Button
          asChild
          variant="outline"
          size="icon"
          className="h-auto w-auto p-3"
        >
          <a
            href="https://github.com/dmitryshelomanov"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/icons/github-svgrepo-com.svg"
              alt="github"
              width={800}
              height={800}
            />
          </a>
        </Button>
      </div>

      <Button asChild variant="default" className="mt-1">
        <a
          href="https://hh.ru/applicant/resumes/view?resume=69d46fb4ff03a1e96e0039ed1f3978684e6571"
          target="_blank"
          rel="noreferrer"
        >
          Ссылка на PDF вариант
        </a>
      </Button>

      <Card className="mt-4 p-4">
        <img
          alt="skills"
          src="/icons/skills.svg"
          className="skills"
          width={385.5}
          height={48}
        />
      </Card>

      <PostsList>
        <Hero>
          <span data-content="Карьера">Карьера</span>
        </Hero>

        {experience.map((it) => (
          <li key={it.link}>
            <Card interactive className="flex gap-4 items-start p-4">
              <img
                src={`/logo/${it.logo}`}
                alt={it.company}
                width={it.width}
                height={it.height}
              />
              <div className="flex flex-col gap-2">
                <h3>
                  <Link to={it.link}>{it.company}</Link>
                </h3>
                <p>{it.position}</p>
              </div>
            </Card>
          </li>
        ))}
      </PostsList>

      <PostsList variant="small">
        <Hero>
          <span data-content="Статьи">Статьи</span>
        </Hero>

        {articles.map((it) => (
          <li key={it.link}>
            <Card interactive className="flex gap-4 items-start p-4">
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
            </Card>
          </li>
        ))}
      </PostsList>

      <PostsList variant="small" grid>
        <Hero>
          <span data-content="Проекты">Проекты</span>
        </Hero>

        {projects.map((it) => (
          <li key={it.link}>
            <Card interactive className="flex gap-4 items-start p-4">
              <img src={it.logo} alt="" width={it.width} height={it.height} />
              <div className="flex flex-col gap-2">
                <h3>
                  <Link to={it.link}>{it.title}</Link>
                </h3>
                <p className="line-clamp-2">{it.description}</p>
              </div>
            </Card>
          </li>
        ))}
      </PostsList>

      <RunnerMiniGame />
    </>
  );
}
