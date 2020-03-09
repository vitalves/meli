import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  height: 55px;

  display: flex;

  .logo {
    margin: 10px;

    &:hover {
      opacity: 0.8;
    }
  }

  .search {
    margin: 10px 16px;
    width: 100%;
  }

  .search form {
    display: flex;
    flex: 1;
  }

  .search input[type="search"] {
    width: 100%;
    border: none;
    border-radius: 4px;
    font-size: 18px;
    padding: 5px;

    &::placeholder {
      color: rgba(9, 9, 9, 0.6);
    }
  }
  .search button[type="submit"] {
    width: 36px;
    height: 36px;
    padding: 5px;
    border: none;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;

    img {
      margin-top: 3px;
    }

    &:hover {
      background:#eee;
    }
  }

  .searchResult {
    background: #fff;
    position: relative;
    top: 2px;

    a {
      line-height: 28px;
      font-size: 18px;
      color: #999;
      display: block;
      padding: 8px 4px;
      border-bottom: 1px solid #eee;

      &::before {
        content: url('/img/ic_Search.png');
        right: 0;
        top: 0;
        margin: 16px;
        opacity: 0.5;
      }

      &:hover {
        background: #3483FA;
        color: #eff;
      }
    }
  }

`;
