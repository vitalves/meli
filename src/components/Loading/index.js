import React from 'react';

import { Container } from './styles';

export default function Loading() {
  return (
    <Container>
      <div className="loading">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </Container>
  );
}
