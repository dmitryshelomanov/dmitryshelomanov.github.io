import React from "react";
import dayjs from "dayjs";
import styled from "styled-components";
import { expiriencePlural } from "../../../lib/plural";

const LAST_COMPANY_TIME = Math.floor(
  dayjs(Date.now()).diff(
    dayjs().set("date", 1).set("month", 8).set("year", 2021),
    "year",
    true
  )
);

export const Tag = styled.div`
  background: #0000ff;
  color: #fff;
  padding: 0.0625rem 0.25rem 0.125rem;
  border-radius: 0.25rem;
  font-style: italic;
  letter-spacing: 0.0125em;
  font-size: 1rem;
  margin-left: 0.25rem;
  cursor: help;
  display: inline-flex;
  width: max-content;
`;

export const expirience = [
  {
    link: "/tsum",
    company: "Цум",
    position: (
      <>
        Senior Frontend Developer / Team lead (Сентябрь&nbsp;2021 — по настоящее
        время, <Tag>{expiriencePlural(LAST_COMPANY_TIME)}</Tag>)
      </>
    ),
  },
  {
    link: "/olimp",
    company: "БК «Олимп»",
    position: (
      <>
        Senior Frontend Developer (Июнь&nbsp;2020 — Сентябрь&nbsp;2021,{" "}
        <Tag>1 год 2 месяца</Tag>)
      </>
    ),
  },
  {
    link: "/dialog",
    company: "Dialog Messenger",
    position: (
      <>
        Senior Frontend Developer (Май&nbsp;2019 — Август&nbsp;2020,{" "}
        <Tag>1 год 4 месяца</Tag>)
      </>
    ),
  },
  {
    link: "/unitemp",
    company: "Unitemp",
    position: (
      <>
        Веб разработчик (Февраль&nbsp;2018 — Май&nbsp;2019,{" "}
        <Tag>1 год 3 месяца</Tag>)
      </>
    ),
  },
  {
    link: "/idea",
    company: `Мир Идей`,
    position: (
      <>
        Web developer (Июль&nbsp;2017 — Февраль&nbsp;2018,{" "}
        <Tag>8&nbsp;месяцев</Tag>)
      </>
    ),
  },
];
