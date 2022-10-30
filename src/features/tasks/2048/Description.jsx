import { Alert } from "antd";
import { useMediaQuery } from "react-responsive";

const desktopDescription = "Управление доской через стрелки →, ←, ↑, ↓ ";
const mobileDescription = "Управление через свайпы по доске";

export function GameDescription() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1024px)",
  });

  return (
    <Alert
      showIcon
      message="Классическая игра 2048"
      description={isDesktopOrLaptop ? desktopDescription : mobileDescription}
    />
  );
}
