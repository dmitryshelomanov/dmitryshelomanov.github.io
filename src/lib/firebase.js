import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, set, push, get } from "firebase/database";
import { useEffect, useState } from "react";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: "resume-36388",
  storageBucket: import.meta.env.VITE_BUCKET,
  messagingSenderId: import.meta.env.VITE_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export function pushToDb({ key, value }) {
  const rs = push(ref(db, key), value);

  return rs.key;
}

export function updateToDb({ key, value, id }) {
  if (id) {
    set(ref(db, `${key}/${id}`), value);
  }
}

export function readFromDb({ key }) {
  return get(ref(db, key)).then((rs) => rs.val());
}

export function useSubscribeToDb({ key, initialState }) {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    const unsubscribe = onValue(
      ref(db, key),
      (snapshot) => {
        const rs = [];

        if (snapshot.exists()) {
          snapshot.forEach((it) => {
            rs.push({ ...it.val(), id: it.key });
          });

          setState(rs);
        }
      },
      (err) => console.log("useSubscribeToDb", { err })
    );

    return () => {
      unsubscribe();
    };
  }, []);

  return state;
}
