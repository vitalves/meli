import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  color: #666;

  .thumbnail {
    width: 180px;
    height: 180px;
    border-radius: 4px;
    margin: 16px;

    img{
      width: 180px;
      border-radius: 4px;

      &:hover{
        opacity: 0.9;
      }
    }
  }

  .data {
    width: 70%;

    .price {
      font-size: 24px;
      margin-top: 16px;
      font-weight: 400;
    }

    h1 {
      font-size: 18px;
      margin-top: 16px;
    }
  }

  .city_name {
    justify-items: auto;
    margin: 16px;
    width: auto;
    color: #999;
  }

  @media (max-width: 600px) {
    .thumbnail {
      width: 110px;
      height: 110px;
      margin: 10px;
      img {
        width: 110px;
        height: 110px;
      }
    }

    .data {

      .price {
        font-size: 14px;
        margin-top: 10px;
        font-weight: 400;
      }

      h1 {
        font-size: 13px;
        margin-top: 10px;
      }
    }
  }
`;

export const BorderBottom = styled.div`
  width: 90%;
  height: 1px;
  background: #eee;
  margin: 16px auto;
`;
