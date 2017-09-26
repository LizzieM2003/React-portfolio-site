import React from 'react';
import PortfolioItem from './PortfolioItem';

const portfolioItems = [
  {
    id: 1,
    imageUrl: 'images/FriendsofPVG-site.png',
    altText: 'Friends of Pinner Village Gardens website landing page',
    title: 'Friends of Pinner Village Gardens website',
    webAddress: 'https://friendsofpvg.org.uk',
    description:
      'I developed this website for a local community group who are passionate about ensuring this park is maintained and improved for the local community. This has helped to boost their membership and has given them a platform to showcase what they have achieved so far.'
  },
  {
    id: 2,
    imageUrl: 'images/harrowRec-site.png',
    altText: 'Harrow Rec Users Association website landing page',
    title: 'Harrow Rec Users Association website',
    webAddress: 'https://harrowrec.org.uk',
    description:
      'This is the second website I developed for another local parks group. This website is fully responsive, uses flexbox for layout and SASS for styles.'
  },
  {
    id: 3,
    imageUrl: 'images/redux-weather.png',
    title: 'React and Redux Weather App',
    webAddress: 'http://lizzie-redux-weather.herokuapp.com/',
    description:
      'This small app retrieves a 5 day weather forecast from a weather API for any city you want and displays the average temperature, pressure and humidity over that 5 day period.'
  },
  {
    id: 4,
    imageUrl: 'images/emaily-react.png',
    title: 'Emaily, a React application',
    webAddress: 'https://lizzie-emailey.herokuapp.com',
    description:
      'This is a full stack application that I implemented whilst taking a fantastic course on Udemy. This application allows you to create and send email surveys to a number of recipients. It uses MongoDB as the database, authentication is provided by Google, Stripe is used for credit card processing (note that Stripe is implemented in test mode and does not take real credit cards, use 4242424242424242 for the number if you want to play around) and emails are sent via SendGrid.'
  },
  {
    id: 5,
    imageUrl: 'images/expensify-react.png',
    title: 'Expensify, a React application',
    webAddress: 'https://lizzie-expensify.herokuapp.com',
    description:
      'Another full stack implementation which allows users to record and monitor their expenses. I plan to make further changes to this app to allow the entry of income items and to also allow login with other authentication providers such as facebook and twitter. It uses firebase as the database and firebase authentication so users can login with their Google accounts.'
  }
];

const Portfolio = () => (
  <section className="portfolio">
    <h1 className="blurb__title">My Work</h1>
    <p className="blurb__content">
      I strongly believe in helping out my local community where I can, so part
      of my work includes a couple of websites which I produced for free for two
      local park groups. I have also played about with React and Redux, so I've
      included some links to React applications which I have deployed to heroku.
      Please be patient when clicking on the applications which are hosted by
      heroku - as I use their free tier the apps are put to sleep between
      visits. You can also visit my github repo at{' '}
      <a
        className="blurb__link"
        href="https://github.com/LizzieM2003"
        target="_blank"
      >
        https://github.com/LizzieM2003.
      </a>
    </p>
    <div>
      {portfolioItems.map(item => <PortfolioItem key={item.id} {...item} />)}
    </div>
  </section>
);

export default Portfolio;
