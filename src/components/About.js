import React from 'react';
import SkillsList from './SkillsList';

const About = () => (
  <section className="bio">
    <h1 className="blurb__title">About Liz Mendes</h1>

    <p className="blurb__content">
      An experienced software professional with approximately 16 years
      experience of designing, developing and maintaining Oracle SQL database
      applications, seeking a first professional role as a front-end or full
      stack web developer. I have a passion for web development, so I took a
      career break to teach myself the skills required to enable me to fulfill
      my ambition and pursue a career in this field. I have strong collaborative
      and communication skills, enjoy playing a major contribution to a team, I
      am a fast learner and I am quick at solving problems. I am now looking to
      make a career move where I can continue to learn and further enhance my
      technical skills, and also build on my existing skills of successfully
      communicating and collaborating with customers to ensure that their
      requirements have been met.
    </p>

    <p className="blurb__content">
      I have taken a series of web development courses, with a particular focus
      on front end web development. I have really enjoyed playing around with
      React and Redux and feel I now have the necessary skills to build web
      applications using these tools (this website you are seeing now has been
      built using React). I have also built two fully responsive websites for
      local community groups, and am an active committee member for a local park
      group. I regularly attend meetups to ensure that I'm on the right track
      with my studies and that I keep up to the date with the latest web
      development practices.
    </p>

    <p className="blurb__content">My skill set includes the following:</p>

    <SkillsList />
  </section>
);

export default About;
