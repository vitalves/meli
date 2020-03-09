import React from 'react';

import { Container } from './styles';
import Link from 'next/link';

export default function Error({statusCode}) {
  return (
    <Container>
      <h1> Ops! =/ </h1>
      <h2> Erro {statusCode} </h2>
      <h3> Parece que esta página não existe </h3>
      <h4>
        <Link href='/'>
          <a title="Página inicial"> Ir para a Página principal </a>
        </Link>
      </h4>
    </Container>
  );
}
