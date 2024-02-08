import {
  Container,
  Section
} from "./style";

import { useState } from "react";


export default function About () {
  return (
    <Container>
      <Section>
        <div className="item1">
          <h2>Sobre mim</h2>
          <p>Me chamo Juan Fila, tenho 22 anos sou formado em Engenheiro Agrônomo e atualmente cursando Engenharia De Software... 
            Apaixonado por tecnologia, comecei os estudos em desenvolvimento em 2021 ao me questionar como as páginas webs e jogos funcionavam.
         </p>
        </div>
      </Section>
    </Container>
  );
}
