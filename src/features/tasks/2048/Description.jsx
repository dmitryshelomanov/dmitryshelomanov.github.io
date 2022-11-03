import { Alert } from "antd";
import { defineMessage, t } from "@lingui/macro";
import { useLingui } from "@lingui/react";
import { useMediaQuery } from "react-responsive";

const desktopDescription = defineMessage({
  message: "Управление доской через стрелки →, ←, ↑, ↓ ",
});
const mobileDescription = defineMessage({
  message: "Управление через свайпы по доске",
});

export function GameDescription() {
  const { i18n } = useLingui();
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1024px)",
  });

  return (
    <Alert
      showIcon
      message={t`Классическая игра 2048`}
      description={
        isDesktopOrLaptop
          ? i18n._(desktopDescription)
          : i18n._(mobileDescription)
      }
    />
  );
}
