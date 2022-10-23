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

// TODO: tests
(() => {
  const prev = new CardC([9, "A"]);
  const next = new CardC([10, "A"]);

  console.log("Следующя карта больше - да", prev.lessThen(next));

  const prev0 = new CardC([9, "A"]);
  const next0 = new CardC([8, "A"]);

  console.log("Следующя карта больше - нет", prev0.lessThen(next0));

  const prev1 = new CardC([9, "A"]);
  const next1 = new CardC([10, "A"]);

  console.log("Следующя карта меньше - нет", prev1.greaterThen(next1));

  const prev2 = new CardC([9, "A"]);
  const next2 = new CardC([8, "A"]);

  console.log("Следующя карта меньше - да", prev2.greaterThen(next2));
})();
