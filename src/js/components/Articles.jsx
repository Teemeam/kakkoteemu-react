import React, { useState } from 'react';
import styled from '@emotion/styled';

/* ------ Data ------ */
import { articles } from './articles.js';

const StyledArticles = styled.div`
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
    @media(max-width: 300px) {
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
    @media(max-width: 740px) {
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

const Articles = (props) => { 
  // Button value
  const [buttonValue, setButtonValue] = useState('');

  // Value of input
  const [inputValue, setInputValue] = useState('');

  // If false, only 3 articles visible
  const [numberOfCards, setNumberOfCards] = useState(3);

  // Url before image ids
  const yle_url = 'https://images.cdn.yle.fi/image/upload/f_auto,fl_lossy,q_auto%3Aeco,w_386,h_258,c_fill,g_faces,dpr_1.0/';

  // Filter results based on buttons and input
  function filter_articles(e) {
    return e.title.toLowerCase().includes(inputValue.toLowerCase()) && e.role.includes(buttonValue);
  }

  // Set filtered articles to variable
  const filtered_articles = articles.filter(filter_articles);

  // Prepare data for cards
  const data = filtered_articles

    // Sort filtered articles by date
    .sort( function(a, b) {
      // Separate days, months and years
      let [a_day, a_month, a_year] = (a.published + '').split('.');
      let [b_day, b_month, b_year] = (b.published + '').split('.');

      // Convert "4" to "04"
      if (a_day.length < 2) {
        a_day = '0' + a_day;
      }
      if (a_month.length < 2) {
        a_month = '0' + a_month;
      }
      if (b_day.length < 2) {
        b_day = '0' + b_day;
      }
      if (b_month.length < 2) {
        b_month = '0' + b_month;
      }

      // Put them back together (e.g. "20190424")
      a = a_year + a_month + a_day;
      b = b_year + b_month + b_day;

      // Compare
      return a < b ? 1 : a > b ? -1 : 0;
    })

    // Show x cards
    .slice(0, numberOfCards)

    // Create cards
    .map((item, key) =>
      <div className='card' key={ 'container_' + item.title }>
        <div className='card__image' key={ 'img_' + item.title } href={ item.url } style={{ backgroundImage: 'url(' + yle_url + item.image_id + '.jpg)' }}></div>
        <div className='card__text' key={ 'title_' + item.title }>
          <a href={ item.url } target='_blank'>
            <p>{ item.title }</p>
          </a>
          <p>{ item.published }, { item.publisher }</p>
        </div>
      </div>
  );

  return (
    <StyledArticles>
      <div className='title-wrapper'>
        <h2>Recent stories</h2>
        <h3>Search by category</h3>
      </div>
      <div className='button-wrapper'>
        <button style={{ backgroundColor: buttonValue === '' ? '#fc6862' : '#ddd' }} onClick={ e => setButtonValue('') }>All</button>
        <button style={{ backgroundColor: buttonValue === 'code' ? '#fc6862' : '#ddd' }} onClick={ e => setButtonValue('code') }>Code</button>
        <button style={{ backgroundColor: buttonValue === 'writing' ? '#fc6862' : '#ddd' }} onClick={ e => setButtonValue('writing') }>Writing</button>
        <a href='https://drive.google.com/drive/folders/1iN8jvAqSwJnkTyqAggJ1copS3PbTWcHu?usp=sharing' target='_blank'>TV</a>
        <a href='https://drive.google.com/drive/folders/1rKNfLYwMPW8wwYPjGIDQenUsDETxSX39?usp=sharing' target='_blank'>Radio</a>
      </div>
      <div className='title-wrapper'>
        <h3>or start typing</h3>
      </div>

      <div className='input-wrapper'>
        <input value={ inputValue } onChange={ e => setInputValue(e.target.value) } placeholder=''></input>
      </div>

      {/* Articles render here */}
      { filtered_articles.length > 0 ?
        <div className='data-wrapper'>{ data }</div> : 
        <p className='nothing-to-show'>Your search did not match any stories</p> }

      <div className='more-wrapper'>
        { filtered_articles.length > 3 && numberOfCards < filtered_articles.length ?
        <button onClick={ () => setNumberOfCards(numberOfCards + 2) }>Show more</button> : null }
        { filtered_articles.length > 3 && numberOfCards >= filtered_articles.length ?
        <button onClick={ () => setNumberOfCards(3) }>Show less</button> : null }
      </div>
    </StyledArticles>);
};

export default Articles;