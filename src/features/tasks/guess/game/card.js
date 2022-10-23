export class CardC {
  constructor([weight, rank]) {
    this.weight = weight;
    this.rank = rank;
  }

  lessThen = (card) => {
    if (this.rank === "A" && card.rank === "2") {
      return true;
    }

    return this.weight < card.weight;
  };

  greaterThen = (card) => {
    if (this.rank === "A" && card.rank === "2") {
      return false;
    }

    return this.weight > card.weight;
  };
}

export const cardGameMapper = [
  new CardC([13, "A"]),
  new CardC([1, "2"]),
  new CardC([2, "3"]),
  new CardC([3, "4"]),
  new CardC([4, "5"]),
  new CardC([5, "6"]),
  new CardC([6, "7"]),
  new CardC([7, "8"]),
  new CardC([8, "9"]),
  new CardC([9, "10"]),
  new CardC([10, "J"]),
  new CardC([11, "Q"]),
  new CardC([12, "K"]),
];

export const suitMap = ["clubs", "spades", "diams", "hearts"];
