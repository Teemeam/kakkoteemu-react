import React, { useState } from 'react';
import styled from '@emotion/styled';

/* ------ Data ------ */
import { articles } from './articles.js';

const StyledArticles = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px 0;
  .card {
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
    font-weight: 400;
    font-size: 17px;
  }
  .card__text > a {
    text-decoration: none;
    color: black;
  }
  .card__text > a > p {
    margin: 0;
  }
`;

const Articles = (props) => { 
  // If false, only 3 articles visible
  const [showMore, setShowMore] = useState(false);
 
  // Set number of cards 3 or all
  const numberOfCards = showMore ? articles.length : 3;

  // Url before image ids
  const yle_url = 'https://images.cdn.yle.fi/image/upload/f_auto,fl_lossy,q_auto%3Aeco,w_386,h_258,c_fill,g_faces,dpr_1.0/';

  // Sort and map articles data
  const data = articles
    .sort((a, b) => a.published > b.published) // Sort by date
    .slice(0, numberOfCards) // Show x cards
    .map((item, key) =>
      <div className='card' key={ 'container_' + item.title }>
        <div className='card__image' key={ 'img_' + item.title } href={ item.url } style={{ backgroundImage: 'url(' + yle_url + item.image_id + '.jpg)' }}></div>
        <div className='card__text' key={ 'title_' + item.title }>
          <a href={ item.url } target='_blank'>
            <p>{ item.title }</p>
          </a>
        </div>
      </div>
  );

  return (
    <StyledArticles>
      <div>{ data }</div>
      { numberOfCards < 4 ?
      <button onClick={ () => setShowMore(true) }>Näytä lisää</button> :
      <button onClick={ () => setShowMore(false) }>Näytä vähemmän</button> }
    </StyledArticles>);
};

export default Articles;