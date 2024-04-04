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
        Senior Frontend Developer / Team lead (Сентябрь 2021 - по настоящее
        время, <Tag>{expiriencePlural(LAST_COMPANY_TIME)}</Tag>)
      </>
    ),
  },
  {
    link: "/olimp",
    company: "ООО БК «Олимп»",
    position: (
      <>
        Senior Frontend Developer (Июнь 2020 - Сентябрь 2021,{" "}
        <Tag>1 год 2 месяца</Tag>)
      </>
    ),
  },
  {
    link: "/dialog",
    company: "ООО «Диалог»",
    position: (
      <>
        Senior Frontend Developer (Май 2019 - Август 2020,{" "}
        <Tag>1 год 4 месяца</Tag>)
      </>
    ),
  },
  {
    link: "/unitemp",
    company: "Unitemp",
    position: (
      <>
        Старший разработчик (Февраль 2018 - Май 2019, <Tag>1 год 3 месяца</Tag>)
      </>
    ),
  },
  {
    link: "/idea",
    company: `ООО "Мир Идей"`,
    position: (
      <>
        Web developer (Июль 2017 - Февраль 2018, <Tag>8 месяцев</Tag>)
      </>
    ),
  },
];
