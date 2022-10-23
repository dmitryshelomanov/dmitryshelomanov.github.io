import { Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { CaretRightOutlined } from "@ant-design/icons";

export function DefaultSidebar() {
  const { pathname, hash } = useLocation();

  return (
    <Menu mode="inline" selectedKeys={[`${pathname}${hash}`, "g"]}>
      <Menu.ItemGroup title="Демки из гитхаба" />
      <Menu.Item icon={<CaretRightOutlined />} key="/snake">
        <Link to="/snake">Snake AI</Link>
      </Menu.Item>
      <Menu.Item icon={<CaretRightOutlined />} key="/towers">
        <Link to="/towers">Towers</Link>
      </Menu.Item>
      <Menu.Item icon={<CaretRightOutlined />} key="/game-of-live">
        <Link to="/game-of-live">Game of live classic</Link>
      </Menu.Item>

      <Menu.ItemGroup title="Демки из Hub" />
      <Menu.Item icon={<CaretRightOutlined />} key="/game-of-live-v2">
        <Link to="/game-of-live-v2">Подобие игры жизнь</Link>
      </Menu.Item>
      <Menu.Item icon={<CaretRightOutlined />} key="/guess">
        <Link to="/guess">Угадай карту</Link>
      </Menu.Item>

      <Menu.ItemGroup title="Снипеты" />
      <Menu.Item icon={<CaretRightOutlined />} key="/snipets#fib">
        <HashLink to="/snipets#fib">Фиббоначи</HashLink>
      </Menu.Item>
      <Menu.Item icon={<CaretRightOutlined />} key="/snipets#tasks">
        <HashLink to={{ pathname: "/snipets", hash: "tasks" }}>
          Задачки
        </HashLink>
      </Menu.Item>
      <Menu.Item icon={<CaretRightOutlined />} key="/snipets#sort">
        <HashLink to={{ pathname: "/snipets", hash: "sort" }}>
          Сортировки
        </HashLink>
      </Menu.Item>
    </Menu>
  );
}
