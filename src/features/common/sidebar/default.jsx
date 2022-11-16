import { Menu, Row, Select, Space, Typography } from "antd";
import { t } from "@lingui/macro";
import { useLingui } from "@lingui/react";
import { Link, useLocation } from "react-router-dom";
import { CaretRightOutlined } from "@ant-design/icons";
import { snipetsList } from "../../snipets";
import { N2048Icon } from "./icons/2048";
import { TowersIcon } from "./icons/towers";
import { SnakeIcon } from "./icons/snake";
import { MusicIcon } from "./icons/music";
import { GameOfLiveIcon } from "./icons/gameOfLive";
import { GuessIcon } from "./icons/guess";
import { useLocale } from "../../../i18n";

export function DefaultSidebar() {
  const { pathname, hash } = useLocation();
  const { i18n } = useLingui();
  const { locale, setLocale } = useLocale();

  return (
    <Menu mode="inline" selectedKeys={[`${pathname}${hash}`, "g"]}>
      <Menu.ItemGroup title={t`Язык`} />
      <Space size="large" className="langs">
        <Typography.Paragraph
          onClick={() => setLocale("ru")}
          className={locale === "ru" ? "active" : ""}
        >
          ru
        </Typography.Paragraph>
        <Typography.Paragraph
          onClick={() => setLocale("en")}
          className={locale === "en" ? "active" : ""}
        >
          en
        </Typography.Paragraph>
      </Space>

      <Menu.ItemGroup title={t`Демки из гитхаба`} />
      <Menu.Item icon={<SnakeIcon />} key="/snake">
        <Link to="/snake">{t`Snake AI`}</Link>
      </Menu.Item>
      <Menu.Item icon={<TowersIcon />} key="/towers">
        <Link to="/towers">{t`Towers`}</Link>
      </Menu.Item>
      <Menu.Item icon={<GameOfLiveIcon />} key="/game-of-live">
        <Link to="/game-of-live">{t`Game of live classic`}</Link>
      </Menu.Item>
      <Menu.Item icon={<MusicIcon />} key="/player">
        <Link to="/player">{t`Музыкальный плеер`}</Link>
      </Menu.Item>

      <Menu.ItemGroup title={t`Демки из Hub`} />
      <Menu.Item icon={<GameOfLiveIcon />} key="/game-of-live-v2">
        <Link to="/game-of-live-v2">{t`Подобие игры жизнь`}</Link>
      </Menu.Item>
      <Menu.Item icon={<GuessIcon />} key="/guess">
        <Link to="/guess">{t`Угадай карту`}</Link>
      </Menu.Item>
      <Menu.Item icon={<N2048Icon />} key="/2048">
        <Link to="/2048">{t`2048`}</Link>
      </Menu.Item>
      <Menu.Item icon={<N2048Icon />} key="/5word">
        <Link to="/5word">{t`5 букв`}</Link>
      </Menu.Item>

      <Menu.SubMenu title={t`Снипеты`}>
        {/* TODO: fix import */}
        {snipetsList.map((it) => (
          <Menu.Item icon={<CaretRightOutlined />} key={`/snipets/${it.id}`}>
            <Link to={`/snipets/${it.id}`}>{i18n._(it.title)}</Link>
          </Menu.Item>
        ))}
      </Menu.SubMenu>
    </Menu>
  );
}
