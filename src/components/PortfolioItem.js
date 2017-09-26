import React from 'react';

const PortfolioItem = ({
  title,
  webAddress,
  imageUrl,
  altText,
  description
}) => (
  <a className="portfolio-item__link" href={webAddress} target="_blank">
    <h1 className="blurb__subtitle">{title}</h1>
    <div className="portfolio-item">
      <img className="portfolio-item__image" src={imageUrl} alt={altText} />
      <p className="blurb__content">{description}</p>
    </div>
  </a>
);

export default PortfolioItem;
