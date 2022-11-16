import { useCallback, useState } from "react";

const initialState = Array.from({ length: 5 }).map(() => []);
const initialWords = Array.from({ length: 5 }).map(() => "");

export function useBoard({ currentWord }) {
  const [currentRow, setCurrentRow] = useState(0);
  const [board, setWords] = useState(initialWords);
  const [wordState, setWordState] = useState(initialState);

  const change = (btn) => {
    const visitedIdx = {};

    switch (btn) {
      case "{ent}": {
        if (board[currentRow].length === 5) {
          setWordState(
            wordState.map((it, idx) => {
              if (idx === currentRow) {
                const rs = [];

                for (let i = 0; i < board[currentRow].length; i++) {
                  let idx = 0;
                  let state = "none";
                  const inputletter = board[currentRow][i];

                  while (idx < 5) {
                    const acceptedLetter = currentWord[idx];

                    if (inputletter === acceptedLetter && idx === i) {
                      state = "onPlace";
                      break;
                    } else if (
                      inputletter === acceptedLetter &&
                      idx !== i &&
                      !visitedIdx[idx]
                    ) {
                      state = "hasWord";
                      visitedIdx[idx] = true;
                    }

                    idx += 1;
                  }

                  rs.push(state);
                }

                return rs;
              }

              return it;
            })
          );

          setCurrentRow(currentRow + 1);
        }

        break;
      }

      case "{backspace}": {
        setWords(
          board.map((it, idx) => {
            if (idx === currentRow) {
              return it.slice(0, -1);
            }

            return it;
          })
        );
        break;
      }

      default: {
        if (board[currentRow].length < 5) {
          setWords(
            board.map((it, idx) => {
              if (idx === currentRow) {
                return it + btn;
              }

              return it;
            })
          );
        }
      }
    }
  };

  return {
    board,
    change,
    currentRow: board[currentRow],
    wordState,
    win: wordState.some(
      (it) => it.length > 0 && it.every((state) => state === "onPlace")
    ),
    reset: useCallback(() => {
      setWords(initialWords);
      setWordState(initialState);
      setCurrentRow(0);
    }, []),
  };
}
