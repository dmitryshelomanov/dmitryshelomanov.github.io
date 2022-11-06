import { useEffect, useState } from "react";
import {
  useSubscribeToDb,
  pushToDb,
  updateToDb,
  readFromDb,
} from "../../../lib/firebase";

const KEY = "n:2048";
const LS_KEY = "n:2048:id";

const pushScore = (user) => {
  const id = pushToDb({ key: KEY, value: user });

  localStorage.setItem(LS_KEY, id);
};

const updateScore = (user, score) => {
  const id = localStorage.getItem(LS_KEY);

  if (id) {
    updateToDb({ key: KEY, id, value: { ...user, score } });
  }
};

export function useScoreboard({ win, score }) {
  const users = useSubscribeToDb({ key: KEY, initialState: [] });
  const [currentId, setId] = useState(
    () => localStorage.getItem(LS_KEY) ?? null
  );

  useEffect(() => {
    const id = localStorage.getItem(LS_KEY);

    if (id) {
      setId(id);
    }

    if (win) {
      readFromDb({ key: `${KEY}/${id}` }).then((user) => {
        if (user && score > user.score) {
          updateScore(user, score);
        } else if (!user) {
          pushScore({ name: "---", score });
        }
      });
    }
  }, [win, score]);

  return {
    updateScore,
    pushScore,
    users,
    currentId,
  };
}
