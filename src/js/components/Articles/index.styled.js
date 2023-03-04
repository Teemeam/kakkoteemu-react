import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  padding: 40px 0;
  background-color: #eee;
  .data-wrapper {
    max-width: 800px;
    margin: 0 auto;
    @media (max-width: 840px) {
      max-width: 700px;
    }
    @media (max-width: 740px) {
      max-width: 400px;
    }
    @media (max-width: 430px) {
      max-width: none;
      width: 92%;
      margin: 0 4%;
    }
  }
  .title-wrapper {
    text-align: center;
  }
  .title-wrapper > h2 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 900;
    font-size: 35px;
    margin: 0;
    @media (max-width: 360px) {
      font-size: 32px;
    }
  }
  .title-wrapper > h3 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    font-size: 20px;
    margin: 0;
    padding: 20px 0 0 0;
  }
  .button-wrapper {
    width: 92%;
    text-align: center;
    margin: 0 auto;
    padding: 20px 0 0 0;
    @media (max-width: 490px) {
      width: 275px;
    }
  }
  .button-wrapper > button {
    border: none;
    border-radius: 30px;
    cursor: pointer;
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    background-color: #ddd;
    margin: 5px 5px 8px 5px;
    padding: 10px 20px;
    font-size: 16px;
    outline: none;
    transition: transform 0.1s ease-in-out 0s;
    :hover {
      transform: scale(1.05);
    }
  }
  button::-moz-focus-inner {
    border: 0;
  }
  .button-wrapper > a {
    display: inline-block;
    border-radius: 30px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    cursor: pointer;
    color: white;
    background-color: rgb(0, 30, 30);
    margin: 5px 5px 8px 5px;
    padding: 10px 20px;
    font-size: 18px;
    transition: transform 0.1s ease-in-out 0s;
    text-decoration: none;
    outline: none;
    :hover {
      transform: scale(1.05);
    }
  }
  .input-wrapper {
    text-align: center;
  }
  .input-wrapper > input {
    border: none;
    border-bottom: 1px solid black;
    margin: 20px 0 40px 0;
    padding: 0 0 3px 0;
    width: 280px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    font-size: 20px;
    text-align: center;
    background-color: transparent;
    cursor: text;
    :focus {
      outline: none;
    }
    @media (max-width: 300px) {
      width: 92%;
      margin: 20px 4% 40px 4%;
    }
  }
  div > .card {
    display: flex;
    flex-direction: row;
    padding: 10px 0;
    @media (max-width: 740px) {
      flex-direction: column;
      padding: 0 0 30px 0;
    }
  }
  .card__image {
    background-size: cover;
    background-position: center;
    background-repeat: none;
    width: 550px;
    height: 200px;
    margin: 0 16px 0 0;
    @media (max-width: 740px) {
      width: 100%;
      height: 0;
      margin: 0;
      padding: 0 0 66% 0;
    }
  }
  .card__text {
    width: 100%;
    margin: auto;
    font-family: 'Montserrat', sans-serif;
    font-weight: 900;
    font-size: 20px;
    line-height: 1.45;
    @media (max-width: 840px) {
      font-size: 18px;
    }
  }
  .card__text > p {
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    font-size: 18px;
    margin: 0;
    padding: 8px 0 0 0;
    color: #fc6862;
    @media (max-width: 740px) {
      margin: 0 12px;
      padding: 0;
    }
  }
  .card__text > a {
    text-decoration: none;
    color: black;
  }
  .card__text > a > p {
    margin: 0;
    @media (max-width: 740px) {
      padding: 10px 12px;
    }
  }
  .more-wrapper {
    text-align: center;
    padding: 30px 0 10px 0;
    @media (max-width: 740px) {
      padding: 0 0 10px 0;
    }
  }
  .more-wrapper > button {
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    font-size: 18px;
    border: none;
    background-color: #fc6862;
    padding: 10px 20px;
    border-radius: 30px;
    cursor: pointer;
    outline: none;
    transition: transform 0.1s ease-in-out 0s;
    :hover {
      transform: scale(1.05);
    }
  }
  .nothing-to-show {
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
    font-weight: 300;
    line-height: 1.4;
    text-align: center;
    width: 94%;
    margin: 0 3%;
    padding: 10px 0 0 0;
  }
`;
