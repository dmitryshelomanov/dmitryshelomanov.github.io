import styled from "styled-components";

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
    width: 153,
    height: 90,
    link: "/c/tsum",
    company: "Цум",
    position: (
      <>
        Senior Frontend Developer / Team lead&nbsp;
        (Сентябрь&nbsp;2021&nbsp;—&nbsp;по настоящее время)
      </>
    ),
  },
  {
    logo: "explory.png",
    width: 358,
    height: 384,
    link: "/c/explory",
    company: `Explory`,
    position: <>React Native Developer (Июль&nbsp;2020 — Июль&nbsp;2021)</>,
  },
  {
    logo: "olimp.png",
    width: 300,
    height: 300,
    link: "/c/olimp",
    company: "БК «Олимп»",
    position: (
      <>Senior Frontend Developer (Июнь&nbsp;2020 — Сентябрь&nbsp;2021)</>
    ),
  },
  {
    logo: "dialog.png",
    width: 180,
    height: 180,
    link: "/c/dialog",
    company: "Dialog Messenger",
    position: <>Senior Frontend Developer (Май&nbsp;2019 — Август&nbsp;2020)</>,
  },
  {
    logo: "unitemp.png",
    width: 512,
    height: 512,
    link: "/c/unitemp",
    company: "Unitemp",
    position: <>Веб разработчик (Февраль&nbsp;2018 — Май&nbsp;2019)</>,
  },
  {
    logo: "idea.png",
    width: 700,
    height: 700,
    link: "/c/idea",
    company: `Мир Идей`,
    position: <>Web developer (Июль&nbsp;2017 — Февраль&nbsp;2018)</>,
  },
];
