import { useEffect, useMemo, useState } from "react";
import { Button, Typography } from "antd";
import { useSwipeable } from "react-swipeable";
import { DefaultSidebar } from "../../features/common/sidebar";
import {
  Board,
  createCells,
  buildBoard,
  createStep,
  swipeableToArrowMap,
  cellToRandom,
  GameDescription,
} from "../../features/tasks/2048";
import { Content, MainTemplate } from "../../ui";

export function Game2048Page() {
  const [curentBoard, setBoard] = useState({ ref: buildBoard() });
  const [score, setScore] = useState(0);

  const cells = createCells(curentBoard.ref);

  const restart = () => setBoard({ ref: buildBoard() });

  const { step } = useMemo(
    () =>
      createStep({
        setBoard,
        board: curentBoard.ref,
        onEnd: (scoreSlice) => {
          setScore((prev) => prev + scoreSlice);
          cellToRandom({
            count: 1,
            board: curentBoard.ref,
            fail: () => {
              console.log("game over");
            },
            exists: (coords) => {
              coords.forEach((it) => {
                curentBoard.ref[it[0]][it[1]].value = 2;
              });
            },
          });
        },
      }),
    [curentBoard.ref]
  );

  const handlers = useSwipeable({
    onSwiped: (eventData) => {
      step({ code: swipeableToArrowMap[eventData.dir] });
    },
  });

  useEffect(() => {
    document.addEventListener("keyup", step);

    return () => {
      document.removeEventListener("keyup", step);
    };
  }, [step]);

  useEffect(() => {
    cellToRandom({
      count: 2,
      board: curentBoard.ref,
      fail: () => {
        console.log("game over");
      },
      exists: (coords) => {
        coords.forEach((it) => {
          curentBoard.ref[it[0]][it[1]].value = 2;
        });
      },
    });

    setBoard({ ref: curentBoard.ref });

    return () => {
      setBoard({ ref: buildBoard() });
      setScore(0);
    };
  }, [curentBoard.ref]);

  return (
    <MainTemplate sidebar={<DefaultSidebar />}>
      <Typography.Title>2048</Typography.Title>
      <GameDescription />
      <Content ai="center" jc="center">
        <Typography.Paragraph strong>Счет: {score}</Typography.Paragraph>
        <Board {...handlers}>{cells}</Board>
        <Button onClick={restart}>Заново</Button>
      </Content>
    </MainTemplate>
  );
}
