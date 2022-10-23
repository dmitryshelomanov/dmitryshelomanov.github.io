import styled, { css } from "styled-components";

const CartWrapper = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  display: inline-block;
  width: 3.3em;
  height: 4.6em;
  border: 1px solid #666;
  border-radius: 0.3em;
  padding: 0.25em;
  margin: 0 0.5em 0.5em 0;
  text-align: center;
  font-size: 1.2em;
  font-weight: normal;
  font-family: Arial, sans-serif;
  position: relative;
  background-color: #fff;
  box-shadow: 0.2em 0.2em 0.5em #333;

  ${(p) =>
    p.suit === "diams" &&
    css`
      color: #f00;
    `}

  ${(p) =>
    p.suit === "hearts" &&
    css`
      color: #f00;
    `}

    ${(p) =>
    p.suit === "spides" &&
    css`
      color: #000;
    `}

    ${(p) =>
    p.suit === "clubs" &&
    css`
      color: #000;
    `}
`;

export const Card = ({ card, suit }) => (
  <CartWrapper suit={suit}>
    <span className="card">{card.rank}</span>
    <span className="suit" dangerouslySetInnerHTML={{ __html: `&${suit};` }} />
  </CartWrapper>
);
