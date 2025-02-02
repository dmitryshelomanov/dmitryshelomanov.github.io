import React from "react";
import dayjs from "dayjs";
import styled from "styled-components";
import { experiencePlural } from "../../../lib/plural";

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
  padding: 1px 8px;
  border-radius: 8px;
  font-style: italic;
  font-size: 12px;
  margin-left: 4px;
  cursor: help;
  display: inline-flex;
  width: max-content;
`;

export const experience = [
  {
    logo: "tsum.svg",
    link: "/c/tsum",
    company: "Цум",
    position: (
      <>
        Senior Frontend Developer / Team lead (Сентябрь&nbsp;2021 — по настоящее
        время, <Tag>{experiencePlural(LAST_COMPANY_TIME)}</Tag>)
      </>
    ),
  },
  {
    logo: "explory.png",
    link: "/c/explory",
    company: `Explory`,
    position: (
      <>
        React Native Developer (Июль&nbsp;2020 — Июль&nbsp;2021,{" "}
        <Tag>1&nbsp;год</Tag>)
      </>
    ),
  },
  {
    logo: "olimp.png",
    link: "/c/olimp",
    company: "БК «Олимп»",
    position: (
      <>
        Senior Frontend Developer (Июнь&nbsp;2020 — Сентябрь&nbsp;2021,{" "}
        <Tag>1 год 2 месяца</Tag>)
      </>
    ),
  },
  {
    logo: "dialog.png",
    link: "/c/dialog",
    company: "Dialog Messenger",
    position: (
      <>
        Senior Frontend Developer (Май&nbsp;2019 — Август&nbsp;2020,{" "}
        <Tag>1 год 4 месяца</Tag>)
      </>
    ),
  },
  {
    logo: "unitemp.png",
    link: "/c/unitemp",
    company: "Unitemp",
    position: (
      <>
        Веб разработчик (Февраль&nbsp;2018 — Май&nbsp;2019,{" "}
        <Tag>1 год 3 месяца</Tag>)
      </>
    ),
  },
  {
    logo: "idea.png",
    link: "/c/idea",
    company: `Мир Идей`,
    position: (
      <>
        Web developer (Июль&nbsp;2017 — Февраль&nbsp;2018,{" "}
        <Tag>8&nbsp;месяцев</Tag>)
      </>
    ),
  },
];
