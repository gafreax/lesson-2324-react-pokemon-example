import { useContext } from "react";
import { UserContext } from "../pages/Home";

function Utente() {
  // const user = { name: 'Mario' } // da recuperare da un context
  const user = useContext(UserContext);
  return (
    <h3>
      Ciao {user?.name} hai cliccato {user?.timeClicked}{" "}
    </h3>
  );
}

export default Utente;
