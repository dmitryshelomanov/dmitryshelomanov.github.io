import { useLingui } from "@lingui/react";
import { t } from "@lingui/macro";
import { Typography } from "antd";
import styled from "styled-components";

const Board = styled.div`
  margin: 0;
  margin-top: 0;
`;

const Wrapper = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;

  li {
    padding: 5px 10px;
    background-color: #bbad9e;
    margin: 10px 0;
    border-radius: 5px;
    color: #fff;
    max-width: 300px;
    font-weight: bold;

    &.current {
      background-color: #f65e3b;
    }
  }
`;

export function Scoreboard({ users = [], currentId }) {
  const { i18n } = useLingui();

  if (users.length === 0) {
    return null;
  }

  return (
    <Board>
      <Typography.Title level={5}>{t`Leaderboard`}</Typography.Title>

      <Wrapper>
        {users.map((it) => (
          <li className={currentId === it.id ? "current" : ""}>
            {it.name.slice(0, 20)}: {it.score}
          </li>
        ))}
      </Wrapper>
    </Board>
  );
}
