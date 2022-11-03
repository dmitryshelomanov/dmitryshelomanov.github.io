import { t, Trans } from "@lingui/macro";
import { useLingui } from "@lingui/react";
import { Typography, Alert } from "antd";
import { DefaultSidebar } from "../../features/common/sidebar";
import { useGameOfLive2, gameSettings } from "../../features/tasks/gameOfLive2";
import { MainTemplate } from "../../ui";

export function GameOfLive2Page() {
  const { i18n } = useLingui();
  const { board, iter, season } = useGameOfLive2();

  return (
    <MainTemplate sidebar={<DefaultSidebar />}>
      <Typography.Title>{t`Game of live v2`}</Typography.Title>
      {board}
      <Alert
        showIcon
        type="warning"
        message={t`По сути та же игра, но не много другие правила + ограниченные переходы`}
      />
      <Typography.Paragraph>
        <Trans>Итерация: {iter}</Trans>
        <br />
        <Trans>Сезон: {season}</Trans>
        <Typography.Paragraph>
          <Trans>
            Настройки: <br />{" "}
            <pre>
              <code>{JSON.stringify(gameSettings, 2, 2)}</code>
            </pre>
          </Trans>
        </Typography.Paragraph>
      </Typography.Paragraph>
    </MainTemplate>
  );
}
