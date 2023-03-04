import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  padding: 30px 0 0 0;
  @media (max-width: 820px) {
    padding: 20px 0 0 0;
  }
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media (max-width: 820px) {
      flex-direction: column;
    }
  }
  div > div {
    display: block;
    margin: 0 auto;
    flex: 1 1 0px;
  }
  div > div > h3 {
    font-family: 'Montserrat', sans-serif;
    font-size: 28px;
    font-weight: 900;
    text-align: center;
    margin: 0;
    padding: 10px 0;
    color: #fb544d;
    mix-blend-mode: screen;
    @media (max-width: 1400px) {
      font-size: 22px;
    }
    @media (max-width: 820px) {
      padding: 20px 0 10px 0;
    }
  }
  div > div > p,
  a {
    font-family: 'Montserrat', sans-serif;
    font-size: 24px;
    font-weight: 300;
    text-align: center;
    margin: 0;
    color: #fb544d;
    mix-blend-mode: screen;
    @media (max-width: 1400px) {
      font-size: 20px;
    }
  }
  .copyright {
    text-align: center;
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    font-size: 14px;
    padding: 40px 0 20px 0;
    color: #fb544d;
    mix-blend-mode: screen;
    opacity: 0.1;
  }
`;
