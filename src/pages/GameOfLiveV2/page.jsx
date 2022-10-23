import { Typography, Alert } from "antd";
import { DefaultSidebar } from "../../features/common/sidebar";
import { useGameOfLive2, gameSettings } from "../../features/tasks/gameOfLive2";
import { MainTemplate } from "../../ui";

export function GameOfLive2Page() {
  const { board, iter, season } = useGameOfLive2();

  return (
    <MainTemplate sidebar={<DefaultSidebar />}>
      <Typography.Title>Game of live v2</Typography.Title>
      {board}
      <Alert
        showIcon
        type="warning"
        message="По сути та же игра, но не много другие правила + ограниченные переходы"
      />
      <Typography.Paragraph>
        Итерация: {iter}
        <br />
        Сезон: {season}
        <Typography.Paragraph>
          Настройки: <br />{" "}
          <pre>
            <code>{JSON.stringify(gameSettings, 2, 2)}</code>
          </pre>
        </Typography.Paragraph>
      </Typography.Paragraph>
    </MainTemplate>
  );
}
