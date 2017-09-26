import React from 'react';
import SkillsListItem from './SkillsListItem';

const skillSet = [
  {
    id: 1,
    skill: 'HTML5',
    imageUrl: 'images/HTML-logo.png'
  },
  {
    id: 2,
    skill: 'CSS3',
    imageUrl: 'images/CSS3-logo.png'
  },
  {
    id: 3,
    skill: 'SASS',
    imageUrl: 'images/sass-logo.svg'
  },
  {
    id: 4,
    skill: 'JavaScript',
    imageUrl: 'images/JavaScript-logo.png'
  },
  {
    id: 5,
    skill: 'React',
    imageUrl: 'images/react-logo.svg'
  },
  {
    id: 6,
    skill: 'Redux',
    imageUrl: 'images/logo-redux.png'
  },
  {
    id: 7,
    skill: 'Webpack',
    imageUrl: 'images/webpack-logo.png'
  },
  {
    id: 8,
    skill: 'NodeJS',
    imageUrl: 'images/node-js.png'
  },
  {
    id: 9,
    skill: 'Express JS',
    imageUrl: 'images/express-logo.png'
  },
  {
    id: 10,
    skill: 'SQL',
    imageUrl: 'images/sql-logo.png'
  },
  {
    id: 11,
    skill: 'Mongo DB',
    imageUrl: 'images/mongo-db-logo.jpg'
  },
  {
    id: 12,
    skill: 'Golang',
    imageUrl: 'images/golang.png'
  },
  {
    id: 13,
    skill: 'Responsive Web Design',
    imageUrl: 'images/responsive-logo.png'
  }
];

const SkillsList = () => (
  <div className="skills-list">
    {skillSet.map(skill => <SkillsListItem key={skill.id} {...skill} />)}
  </div>
);

export default SkillsList;
