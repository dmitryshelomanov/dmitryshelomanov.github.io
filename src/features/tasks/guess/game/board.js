import { useMemo, useState } from "react";
import { CardC, cardGameMapper, suitMap } from "./card";

export function buildCards() {
  const cards = [];

  for (let card = 0; card < cardGameMapper.length; card++) {
    for (let suit = 0; suit < suitMap.length; suit++) {
      cards.push({
        card: cardGameMapper[card],
        suit: suitMap[suit],
      });
    }
  }

  return cards.sort(() => (Math.random() > 0.5 ? 1 : -1));
}

export function useGuess() {
  const [index, setIndex] = useState(0);
  const [failed, setFailed] = useState(false);
  const [cards, setCards] = useState(() => buildCards());

  return {
    rest: cards.length - 1 - index,
    failed,
    winner: index === cards.length - 1,
    currentCard: useMemo(
      () => ({
        card: new CardC([cards[index].card.weight, cards[index].card.rank]),
        suit: cards[index].suit,
      }),
      [index, cards]
    ),
    greater: () => {
      if (!cards[index].card.lessThen(cards[index + 1].card)) {
        setFailed(true);
      }

      setIndex(index + 1);
    },
    less: () => {
      if (!cards[index].card.greaterThen(cards[index + 1].card)) {
        setFailed(true);
      }

      setIndex(index + 1);
    },
    restart: () => {
      setIndex(0);
      setCards(buildCards());
      setFailed(false);
    },
  };
}
