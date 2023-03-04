import React, { useState } from 'react';

/* ------ Data ------ */
import { articles } from '../../lib/articles.js';

/* ------ Styles ------ */
import * as s from './index.styled';

const Articles = () => {
  // Button value
  const [buttonValue, setButtonValue] = useState('');

  // Value of input
  const [inputValue, setInputValue] = useState('');

  // If false, only 3 articles visible
  const [numberOfCards, setNumberOfCards] = useState(3);

  // Url before image ids
  const dpr = window.devicePixelRatio || 1;
  const yle_url =
    'https://images.cdn.yle.fi/image/upload/w_400,h_264,f_auto,fl_lossy,q_auto:best,c_fill,dpr_' +
    dpr +
    '/';

  // Filter results based on buttons and input
  function filter_articles(e) {
    return e.title.toLowerCase().includes(inputValue.toLowerCase()) && e.role.includes(buttonValue);
  }

  // Set filtered articles to variable
  const filtered_articles = articles.filter(filter_articles);

  // Prepare data for cards
  const data = filtered_articles

    // Sort filtered articles by date
    .sort(function (a, b) {
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
    .map((item) => (
      <div className='card' key={'container_' + item.title}>
        <div
          className='card__image'
          key={'img_' + item.title}
          href={item.url}
          style={{
            backgroundImage:
              item.type === 'web'
                ? 'url(' + yle_url + item.image_id + '.jpg)'
                : 'url(' + item.image_id + ')',
          }}
        ></div>
        <div className='card__text' key={'title_' + item.title}>
          <a href={item.url} target='_blank'>
            <p>{item.title}</p>
          </a>
          <p>
            {item.published}, {item.publisher}
          </p>
        </div>
      </div>
    ));

  return (
    <s.Container>
      <div className='title-wrapper'>
        <h2>Recent stories</h2>
        <h3>Search by category</h3>
      </div>
      <div className='button-wrapper'>
        <button
          style={{ backgroundColor: buttonValue === '' ? '#fc6862' : '#ddd' }}
          onClick={() => setButtonValue('')}
        >
          All
        </button>
        <button
          style={{ backgroundColor: buttonValue === 'code' ? '#fc6862' : '#ddd' }}
          onClick={() => setButtonValue('code')}
        >
          Code
        </button>
        <button
          style={{ backgroundColor: buttonValue === 'writing' ? '#fc6862' : '#ddd' }}
          onClick={() => setButtonValue('writing')}
        >
          Writing
        </button>
        <a
          href='https://drive.google.com/drive/folders/1iN8jvAqSwJnkTyqAggJ1copS3PbTWcHu'
          target='_blank'
        >
          TV
        </a>
        <a
          href='https://drive.google.com/drive/folders/1rKNfLYwMPW8wwYPjGIDQenUsDETxSX39'
          target='_blank'
        >
          Radio
        </a>
      </div>
      <div className='title-wrapper'>
        <h3>or start typing</h3>
      </div>

      <div className='input-wrapper'>
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder=''
        ></input>
      </div>

      {/* Articles render here */}
      {filtered_articles.length > 0 ? (
        <div className='data-wrapper'>{data}</div>
      ) : (
        <p className='nothing-to-show'>Your search did not match any stories</p>
      )}

      <div className='more-wrapper'>
        {filtered_articles.length > 3 && numberOfCards < filtered_articles.length ? (
          <button onClick={() => setNumberOfCards(numberOfCards + 3)}>Show more</button>
        ) : null}
        {filtered_articles.length > 3 && numberOfCards >= filtered_articles.length ? (
          <button onClick={() => setNumberOfCards(3)}>Show less</button>
        ) : null}
      </div>
    </s.Container>
  );
};

export default Articles;
