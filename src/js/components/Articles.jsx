import React, { useState } from 'react';
import styled from '@emotion/styled';

/* ------ Data ------ */
import { articles } from './articles.js';

const StyledArticles = styled.div`
  width: 100%;
  padding: 20px 0;
  background-color: #eee;
  div {
    max-width: 600px;
    margin: 0 auto;
  }
  .button-wrapper {
    text-align: center;
    padding: 20px 0 0 0;
  }
  .button-wrapper > button {
    border: none;
    cursor: pointer;
    font-family: 'Montserrat', sans-serif;
    font-weight: 900;
    color: #fc6862;
    border-bottom: 2px solid #fc6862;
    margin: 0 5px;
    font-size: 16px;
    outline: none;
  }
  button::-moz-focus-inner {
    border: 0;
  }
  .input-wrapper {
    text-align: center;
  }
  .input-wrapper > input {
    border: none;
    border-radius: 20px;
    padding: 10px 20px;
    margin: 20px 0;
    width: 200px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
  }
  div > .card {
    display: flex;
    flex-direction: row;
    padding: 10px 0;
  }
  .card__image {
    background-size: cover;
    background-position: center;
    background-repeat: none;
    width: 450px;
    height: 150px;
    margin: 0 15px 0 0;
  }
  .card__text {
    width: 100%;
    font-family: 'Montserrat', sans-serif;
    font-weight: 900;
    font-size: 16px;
    line-height: 1.3;
  }
  .card__text > p {
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    margin: 0;
    padding: 0 0 10px 0;
    color: #fb544d;
  }
  .card__text > a {
    text-decoration: none;
    color: rgb(0, 30, 30);
  }
  .card__text > a > p {
    margin: 0;
  }
  .more-wrapper {
    text-align: center;
    padding: 20px 0;
  }
  .more-wrapper > button {
    border: none;
    background-color: #fc6862;
    padding: 10px 20px;
    border-radius: 20px;
    cursor: pointer;
  }
`;

const Articles = (props) => { 
  // Button value
  const [buttonValue, setButtonValue] = useState('');

  // Value of input
  const [inputValue, setInputValue] = useState('');

  // If false, only 3 articles visible
  const [numberOfCards, setNumberOfCards] = useState(3);

  /* If false, only 3 articles visible
  const [showMore, setShowMore] = useState(false);
 
  // Set number of cards 3 or all
  const numberOfCards = showMore ? articles.length : 3; */

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
          <p>{ item.published }</p>
          <a href={ item.url } target='_blank'>
            <p>{ item.title }</p>
          </a>
        </div>
      </div>
  );

  return (
    <StyledArticles>
      <div className='button-wrapper'>
        <button style={{ color: buttonValue === '' ? '#fc6862' : 'black' }} onClick={ e => setButtonValue('') }>All</button>
        <button style={{ color: buttonValue === 'code' ? '#fc6862' : 'black' }} onClick={ e => setButtonValue('code') }>Code</button>
        <button style={{ color: buttonValue === 'writing' ? '#fc6862' : 'black' }} onClick={ e => setButtonValue('writing') }>Writing</button>
      </div>

      <div className='input-wrapper'>
        <input value={ inputValue } onChange={ e => setInputValue(e.target.value) } placeholder='Search for a story'></input>
      </div>

      {/* Articles render here */}
      { filtered_articles.length > 0 ?
        <div>{ data }</div> : 
        <p>Ei näytettävää</p> }

      <div className='more-wrapper'>
        { filtered_articles.length > 3 && numberOfCards < filtered_articles.length ?
        <button onClick={ () => setNumberOfCards(numberOfCards + 2) }>Näytä lisää</button> : null }
        { filtered_articles.length > 3 && numberOfCards >= filtered_articles.length ?
        <button onClick={ () => setNumberOfCards(3) }>Näytä vähemmän</button> : null }
      </div>
    </StyledArticles>);
};

export default Articles;