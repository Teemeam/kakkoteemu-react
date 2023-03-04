import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  height: 50vh;
  background-color: rgb(0, 30, 30); /* Fallback */
  position: relative;
  @media (max-width: 600px) {
    height: 30vh;
  }
  form {
    width: 500px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    @media (max-width: 540px) {
      width: 400px;
    }
    @media (max-width: 440px) {
      width: 94%;
    }
    @media (max-width: 360px) {
      width: 100%;
    }
  }
  input {
    width: 350px;
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
    font-weight: 300;
    background-color: transparent;
    border: 1px solid #fc6862;
    border-right: none;
    border-radius: 30px 0 0 30px;
    padding: 10px 20px;
    color: #fc6862;
    @media (max-width: 540px) {
      width: 260px;
    }
    @media (max-width: 440px) {
      width: 60%;
    }
    @media (max-width: 360px) {
      width: 50%;
    }
    :focus {
      outline: none;
    }
  }
  input::placeholder {
    font-size: 20px;
    color: #fc6862;
  }
  button {
    width: 90px;
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
    font-weight: 900;
    background-color: transparent;
    border: 1px solid #fc6862;
    border-radius: 0 30px 30px 0;
    padding: 10px;
    cursor: pointer;
    color: #fc6862;
    :hover {
      background-color: #fc6862;
      color: rgb(0, 30, 30);
    }
  }
  button::-moz-focus-inner {
    border: 0;
  }
  .thank-you {
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
    font-weight: 300;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fc6862;
  }
`;
