import React from 'react';

const SkillsListItem = ({ skill, imageUrl }) => (
  <div className="skill__box">
    <img className="skill__image" src={imageUrl} alt={`${skill} logo`} />
    <p>{skill}</p>
  </div>
);

export default SkillsListItem;
