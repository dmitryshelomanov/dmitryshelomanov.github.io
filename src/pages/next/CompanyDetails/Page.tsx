import { useLayoutEffect } from "react";
import styled from "styled-components";
import "../../../ui/customize.less";
import { Hero } from "../../../ui/atoms";
import { Link, useParams } from "react-router-dom";
import { experience } from "./experience";

const List = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0px;
  padding: 0px;
  margin-top: 8px;
  gap: 12px;
  padding-left: 8px;
  margin-bottom: 12px;

  li {
    list-style: none;

    p {
      margin-bottom: 0px;
    }
  }

  h2 {
    text-decoration: underline;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  white-space: pre-wrap;

  p {
    margin: 0;
    margin-bottom: 8px;
  }
`;

const Mark = styled.h4`
  margin: 16px 0px;
  text-decoration: underline;
`;

const BackArrow = styled.img`
  transform: rotate(180deg);
  width: 24px;
  height: 24px;
`;

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
        <BackArrow src="/back-arrow.svg" alt="back" />
      </Link>
      <Hero>
        <span data-content={exp.company}>{exp.company}</span>
      </Hero>

      <Content>
        <p>— {exp.position}</p>

        {exp.projects.length > 0 && (
          <>
            <h2>Проекты:</h2>

            <List>
              {exp.projects.map((it, idx) => (
                <li key={idx}>
                  <a href={it.link} target="_blank" rel="noreferrer">
                    {it.title}
                  </a>
                </li>
              ))}
            </List>
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
              return <Mark key={idx}>{it.payload}</Mark>;
            }

            return (
              <List>
                {it.payload.map((it, idx) => (
                  <li key={`${idx}/list`}>
                    <p>— {it}</p>
                  </li>
                ))}
              </List>
            );
          })}
        </div>

        {exp.achievements.length > 0 && (
          <>
            <h2>Достижения:</h2>

            <List>
              {exp.achievements.map((it, idx) => (
                <li key={idx}>
                  <p>— {it}</p>
                </li>
              ))}
            </List>
          </>
        )}

        <h2>Используемые технологии:</h2>
        <List>
          {exp.technologies.map((it, idx) => (
            <li key={idx}>
              <p>{it}</p>
            </li>
          ))}
        </List>
      </Content>
    </>
  );
}
