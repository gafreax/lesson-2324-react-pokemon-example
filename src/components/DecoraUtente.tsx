import styled from "@emotion/styled";

import Utente from "./Utente";

const Decorazione = styled.div`
  padding: 8px;
  margin: 8px;
  color: purple;
`;

function DecoraUtente() {
  return (
    <Decorazione>
      <Utente />
    </Decorazione>
  );
}

export default DecoraUtente;
