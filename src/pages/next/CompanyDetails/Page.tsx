import { useLayoutEffect } from "react";
import { Hero } from "../../../ui/atoms";
import { Link, useParams } from "react-router-dom";
import { experience } from "./experience";

const listClassName =
  "flex flex-col m-0 p-0 mt-2 gap-3 pl-2 mb-3 [&_li]:list-none [&_li_p]:mb-0 [&_h2]:underline";

export function CompanyDetails() {
  const { company } = useParams();

  const exp = experience[company!];

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (!exp) {
    return (
      <>
        <Hero>
          <span data-content="404">404</span>
        </Hero>

        <Link to="/">На главную</Link>
      </>
    );
  }

  return (
    <>
      <Link to="/">
        <img
          src="/back-arrow.svg"
          alt="back"
          width={24}
          height={24}
          className="rotate-180 w-6 h-6 icon-adaptive"
        />
      </Link>
      <Hero>
        <span data-content={exp.company}>{exp.company}</span>
      </Hero>

      <div className="flex flex-col gap-4 whitespace-pre-wrap [&_p]:m-0 [&_p]:mb-2">
        <p>— {exp.position}</p>

        {exp.projects.length > 0 && (
          <>
            <h2>Проекты:</h2>

            <ul className={listClassName}>
              {exp.projects.map((it, idx) => (
                <li key={idx}>
                  <a href={it.link} target="_blank" rel="noreferrer">
                    {it.title}
                  </a>
                </li>
              ))}
            </ul>
          </>
        )}

        {exp.intro && <div>{exp.intro.join("\n\n")}</div>}

        <h2>Обязанности:</h2>

        <div>
          {exp.responsibility.map((it, idx) => {
            if (it.type === "paragraph") {
              return <p key={idx}>{it.payload}</p>;
            }

            if (it.type === "mark") {
              return (
                <h4 key={idx} className="my-4 underline">
                  {it.payload}
                </h4>
              );
            }

            return (
              <ul key={idx} className={listClassName}>
                {it.payload.map((item, itemIdx) => (
                  <li key={`${itemIdx}/list`}>
                    <p>— {item}</p>
                  </li>
                ))}
              </ul>
            );
          })}
        </div>

        {exp.achievements.length > 0 && (
          <>
            <h2>Достижения:</h2>

            <ul className={listClassName}>
              {exp.achievements.map((it, idx) => (
                <li key={idx}>
                  <p>— {it}</p>
                </li>
              ))}
            </ul>
          </>
        )}

        <h2>Используемые технологии:</h2>
        <ul className={listClassName}>
          {exp.technologies.map((it, idx) => (
            <li key={idx}>
              <p>{it}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
