import { useCallback, useEffect, useState } from "react";
import chunk from "lodash.chunk";
import { useSubscribeToDb } from "../../../lib/firebase";

const KEY = "n5word/worlds";

export function useWords() {
  const words = useSubscribeToDb({ key: KEY, initialState: [] });
  const [randomWords, setRandomWords] = useState([]);
  const [currentLvl, setLvl] = useState(0);

  useEffect(() => {
    setRandomWords(
      words
        .slice()
        .sort(() => (Math.random() > 0.5 ? 1 : -1))
        .map((it) => it.id)
    );
  }, [words]);

  return {
    words: randomWords,
    lvls: randomWords.length,
    currentLvl,
    nextLvl: useCallback(() => setLvl((prev) => prev + 1), []),
  };
}
