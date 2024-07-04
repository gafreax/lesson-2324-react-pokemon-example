import { createContext, useEffect, useState } from "react";
import PokemonCardList from "../components/PokemonCardList";
import DecoraUtente from "../components/DecoraUtente";

type User = {
  name: string;
  timeClicked: number;
};

export const UserContext = createContext<User | undefined>(undefined);

function Home() {
  const [user, setUser] = useState<User | undefined>(undefined);
  const [click, setClick] = useState<number>(0);

  useEffect(() => {
    setUser({ name: "Mario", timeClicked: click });
  }, [click]);

  function handleClickUtente() {
    setClick((prev) => prev + 1);
  }

  return (
    <div>
      <h1>Pokemon</h1>
      <button onClick={handleClickUtente}>Aggiungi click utente</button>
      <UserContext.Provider value={user}>
        <DecoraUtente />
      </UserContext.Provider>
      <PokemonCardList />
    </div>
  );
}

export default Home;
