import { useEffect, useMemo, useState } from "react";
import { t, Trans } from "@lingui/macro";
import { useLingui } from "@lingui/react";
import styled, { css } from "styled-components";
import { Button, Col, Typography, Space } from "antd";
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
  Scoreboard,
  useScoreboard,
  DescriptionPane,
} from "../../features/tasks/2048";
import { Content, MainTemplate } from "../../ui";

const Score = styled(Typography.Paragraph)`
  padding: 20px 10px;
  background-color: #bbad9e;
  border-radius: 5px;
  color: #fff;
  text-align: center;
  min-width: 100px;
  padding: 3px 10px;
  font-weight: bold;
`;

export function Game2048Page() {
  const { i18n } = useLingui();
  const [curentBoard, setBoard] = useState({ ref: buildBoard() });
  const [score, setScore] = useState(0);
  const [win, setWin] = useState(false);
  const { users, currentId } = useScoreboard({ win, score });

  const cells = createCells(curentBoard.ref);

  const restart = () => setBoard({ ref: buildBoard() });

  const { step } = useMemo(
    () =>
      createStep({
        setBoard,
        board: curentBoard.ref,
        onEnd: (scoreSlice, has2048) => {
          setScore((prev) => prev + scoreSlice);

          if (!has2048) {
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
          } else {
            setWin(true);
          }
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
      setWin(false);
    };
  }, [curentBoard.ref]);

  return (
    <MainTemplate sidebar={<DefaultSidebar />}>
      <Typography.Title>2048</Typography.Title>
      <GameDescription />
      <Content ai="center" jc="center">
        <Space wrap align="start" size="large">
          <Col>
            <Score>
              <Trans>
                Счет <br /> {score}
              </Trans>
            </Score>

            <Board {...handlers}>
              {win && (
                <DescriptionPane>
                  <Typography.Paragraph>
                    {!win ? t`Вы проиграли` : t`Вы победили`}
                  </Typography.Paragraph>
                </DescriptionPane>
              )}

              {cells}
            </Board>
            <Button onClick={restart}>{t`Заново`}</Button>
          </Col>

          <Col>
            <Scoreboard users={users} currentId={currentId} />
          </Col>
        </Space>
      </Content>
    </MainTemplate>
  );
}
