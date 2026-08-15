import { useLayoutEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Hero } from "@/ui/atoms";
import { experience } from "./experience";

const listClassName =
  "mb-3 mt-3 flex flex-col gap-3 pl-2 [&_li]:list-none [&_li_p]:mb-0";

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

        <Button asChild variant="link">
          <Link to="/">На главную</Link>
        </Button>
      </>
    );
  }

  return (
    <>
      <Button asChild variant="ghost" size="icon">
        <Link to="/" aria-label="На главную">
          <ArrowLeft className="h-5 w-5" />
        </Link>
      </Button>
      <Hero>
        <span data-content={exp.company}>{exp.company}</span>
      </Hero>

      <Card className="w-full bg-list-bg p-5 sm:p-6">
        <div className="flex flex-col gap-4 whitespace-pre-wrap [&_a]:font-semibold [&_a]:text-link [&_a]:underline-offset-2 hover:[&_a]:underline [&_p]:m-0 [&_p]:mb-2">
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
                  <h4 key={idx} className="my-4 underline decoration-2">
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
      </Card>
    </>
  );
}
