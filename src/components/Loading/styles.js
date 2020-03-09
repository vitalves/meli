import styled from 'styled-components';

export const Container = styled.div`
  margin: 40px auto;
  text-align: center;

  span {
    animation: dots .6s cubic-bezier(0.6,0.1,1,0.4);
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }
  span:nth-child(0) {
    animation-delay: .1s;
  }
  span:nth-child(2) {
    animation-delay: .2s;
  }
  span:nth-child(3) {
    animation-delay: .3s;
  }
  span:nth-child(4) {
    animation-delay: .4s;
  }
  @keyframes dots {
    from { transform: translate3D(0,0,0); }
    to { transform: translate3D(0,30px,0);}
  }
  span {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #FFE600;
    margin: 4px;
  }
`;
