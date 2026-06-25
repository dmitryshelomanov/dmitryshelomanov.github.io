import { useLayoutEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Hero } from "../../../ui/atoms";
import { projects } from "./projects";

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
        <img
          src="/back-arrow.svg"
          alt="back"
          width={24}
          height={24}
          className="rotate-180 w-6 h-6 icon-adaptive"
        />
      </Link>
      <Hero>
        <span data-content={selectedProject.title}>
          {selectedProject.title}
        </span>
      </Hero>

      <div className="flex flex-col gap-8 [&_p]:m-0 [&_p]:mb-2">
        <a href={selectedProject.link} target="_blank" rel="noreferrer">
          Посмотреть демо
        </a>

        <img
          src={selectedProject.img}
          width={selectedProject.width}
          height={selectedProject.height}
          alt=""
          className="w-auto max-w-[320px] lg:max-w-[780px] cursor-pointer max-h-64 object-contain self-start"
        />

        {selectedProject.text}
      </div>
    </>
  );
}
