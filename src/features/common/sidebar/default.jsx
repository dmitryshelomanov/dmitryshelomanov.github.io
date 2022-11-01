import { Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import { CaretRightOutlined } from "@ant-design/icons";
import { snipetsList } from "../../snipets";
import { N2048Icon } from "./icons/2048";
import { TowersIcon } from "./icons/towers";
import { SnakeIcon } from "./icons/snake";
import { MusicIcon } from "./icons/music";
import { GameOfLiveIcon } from "./icons/gameOfLive";
import { GuessIcon } from "./icons/guess";

export function DefaultSidebar() {
  const { pathname, hash } = useLocation();

  return (
    <Menu mode="inline" selectedKeys={[`${pathname}${hash}`, "g"]}>
      <Menu.ItemGroup title="Демки из гитхаба" />
      <Menu.Item icon={<SnakeIcon />} key="/snake">
        <Link to="/snake">Snake AI</Link>
      </Menu.Item>
      <Menu.Item icon={<TowersIcon />} key="/towers">
        <Link to="/towers">Towers</Link>
      </Menu.Item>
      <Menu.Item icon={<GameOfLiveIcon />} key="/game-of-live">
        <Link to="/game-of-live">Game of live classic</Link>
      </Menu.Item>
      <Menu.Item icon={<MusicIcon />} key="/player">
        <Link to="/player">Музыкальный плеер</Link>
      </Menu.Item>

      <Menu.ItemGroup title="Демки из Hub" />
      <Menu.Item icon={<GameOfLiveIcon />} key="/game-of-live-v2">
        <Link to="/game-of-live-v2">Подобие игры жизнь</Link>
      </Menu.Item>
      <Menu.Item icon={<GuessIcon />} key="/guess">
        <Link to="/guess">Угадай карту</Link>
      </Menu.Item>
      <Menu.Item icon={<N2048Icon />} key="/2048">
        <Link to="/2048">2048</Link>
      </Menu.Item>

      <Menu.SubMenu title="Снипеты">
        {/* TODO: fix import */}
        {snipetsList.map((it) => (
          <Menu.Item icon={<CaretRightOutlined />} key={`/snipets/${it.id}`}>
            <Link to={`/snipets/${it.id}`}>{it.title}</Link>
          </Menu.Item>
        ))}
      </Menu.SubMenu>
    </Menu>
  );
}
