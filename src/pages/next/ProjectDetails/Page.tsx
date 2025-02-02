import React, { useLayoutEffect } from "react";
import { Link, useParams } from "react-router-dom";
import styled, { css } from "styled-components";
import "../../../ui/customize.less";
import { Hero } from "../../../ui/atoms";
import { desktop } from "../../../ui/responsive";
import { projects } from "./projects";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  p {
    margin: 0;
    margin-bottom: 8px;
  }
`;

const BackArrow = styled.img`
  transform: rotate(180deg);
  width: 24px;
  height: 24px;
`;

const AppPreview = styled.img`
  width: auto;
  max-width: 320px;
  cursor: pointer;
  max-height: 256px;
  object-fit: contain;
  align-self: flex-start;

  ${desktop(css`
    max-width: 780px;
  `)}
`;

export function ProjectDetails() {
  const { project } = useParams();

  const selectedProject = projects[project!];

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (!selectedProject) {
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
        <span data-content={selectedProject.title}>
          {selectedProject.title}
        </span>
      </Hero>

      <Content>
        <a href={selectedProject.link} target="_blank">
          Посмотреть демо
        </a>

        <AppPreview src={selectedProject.img} />

        {selectedProject.text}
      </Content>
    </>
  );
}
