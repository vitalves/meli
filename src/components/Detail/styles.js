import styled from 'styled-components';

export const Container = styled.div`
  margin: 16px;
  display: flex;
  justify-content: space-between;
  flex: 1;
  color: #666;

  .details-item {
    width: 680px;
  }

  .details-item img {
    display: flex;
    flex-direction: column;
    margin: 32px auto;
  }

  .details-item strong {
    display: block;
    font-size: 28px;
    margin-left: 32px;
  }
  .details-item p {
    font-size: 16px;
    margin: 32px;
  }

  .details-price {
    width: 35%;
    display: flex;
    flex-direction: column;
    margin-bottom: 32px;
  }

  .details-price p {
    margin-top: 32px;
    font-size: 14px;
  }

  .details-price h1 {
    font-size: 24px;
  }

  .details-price span {
    font-size: 46px;
  }

  .details-price button {
    width: calc(100% - 32px);
    border: none;
    padding: 8px;
    color: #fff;
    background: #3483fa;
    border-radius: 4px;
  }

  @media (max-width: 790px) {
    flex-direction: column;

    .details-item {
      width: 100%;
    }
    .details-item img {
      width: 100%;
    }
    .details-price {
      width: 90%;
      margin: 0 32px;
    }
  }
`;
