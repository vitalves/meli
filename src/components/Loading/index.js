import React from 'react';

import { Container } from './styles';

export default function Loading() {
  return (
    <Container>
      <div className="loading">
        <span>E</span>
        <span>D</span>
        <span>S</span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </Container>
  );
}
