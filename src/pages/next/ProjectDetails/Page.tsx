import { useLayoutEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Hero } from "@/ui/atoms";
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
        <span data-content={selectedProject.title}>
          {selectedProject.title}
        </span>
      </Hero>

      <div className="flex w-full min-w-0 max-w-full flex-col gap-8 [&_p]:m-0 [&_p]:mb-2">
        <Button asChild variant="default" className="w-full justify-between px-6 text-base sm:w-fit">
          <a href={selectedProject.link} target="_blank" rel="noreferrer">
            Посмотреть демо
          </a>
        </Button>

        <div className="flex w-full min-w-0 max-w-full gap-4 overflow-x-auto overscroll-x-contain touch-pan-x pb-1">
          {selectedProject.images.map((src) => {
            const isGallery = selectedProject.images.length > 1;

            return (
              <Card
                key={src}
                className={
                  isGallery
                    ? "h-auto w-[170px] shrink-0 bg-list-bg p-2.5 lg:w-[210px]"
                    : "w-auto max-w-[360px] shrink-0 self-start bg-list-bg p-2.5 lg:max-w-[780px]"
                }
              >
                <img
                  src={src}
                  width={selectedProject.width}
                  height={selectedProject.height}
                  alt=""
                  draggable={false}
                  className={
                    isGallery
                      ? "pointer-events-none h-auto w-full rounded-xl object-contain"
                      : "max-h-60 w-auto rounded-xl object-contain"
                  }
                />
              </Card>
            );
          })}
        </div>

        <Card className="w-full bg-accent-warm/45 p-5 sm:p-6">
          {selectedProject.text}
        </Card>
      </div>
    </>
  );
}
