import { useMemo } from "react";
import { t } from "@lingui/macro";
import { useLingui } from "@lingui/react";
import { Alert, Typography, Spin, Space } from "antd";
import { DefaultSidebar } from "../../features/common/sidebar";
import {
  Board,
  Cell,
  Keyboard,
  buildCell,
  useWords,
  useBoard,
} from "../../features/tasks/n5word";
import { DescriptionPane } from "../../features/tasks/2048";
import { Content, MainTemplate } from "../../ui";

export function N5WordPage() {
  const { i18n } = useLingui();
  const { words, lvls, currentLvl, nextLvl } = useWords();
  const { board, change, wordState, reset, win } = useBoard({
    currentWord: words[currentLvl] ?? "",
  });
  const cell = useMemo(
    () => buildCell({ board, wordState }),
    [board, wordState]
  );

  const next = () => {
    nextLvl();
    reset();
  };

  return (
    <MainTemplate sidebar={<DefaultSidebar />}>
      <Typography.Title>{t`5 букв`}</Typography.Title>

      <Space direction="vertical">
        <Alert
          type="warning"
          description={
            <>
              <p>
                <Cell onPlace short>
                  л
                </Cell>
                буква на своем месте
              </p>
              <p>
                <Cell hasWord short>
                  л
                </Cell>
                буква есть в слове (но не на своем месте)
              </p>
            </>
          }
          message="Классическая ига 5 букв"
        />

        <Alert
          message={
            <p>
              {t`Уровень`} {currentLvl + 1}/{lvls}
            </p>
          }
        />
      </Space>

      <Spin spinning={words.length === 0}>
        <Content ai="center" jc="center">
          <Board>
            {cell}

            {win && (
              <DescriptionPane>
                <Typography.Paragraph onClick={next}>
                  {t`Еще`}
                </Typography.Paragraph>
              </DescriptionPane>
            )}
          </Board>

          <Keyboard onChange={change} />
        </Content>
      </Spin>
    </MainTemplate>
  );
}
