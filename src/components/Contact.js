import React from 'react';

const Contact = () => (
  <section>
    <h1 className="blurb__title">Contact Me</h1>
    <div className="contact-details">
      <p className="blurb__content">Email: lizmendes@gmail.com</p>
      <p className="blurb__content">
        LinkedIn:{' '}
        <a
          className="blurb__link"
          href="https://www.linkedin.com/in/liz-mendes-3a2178119/"
          target="_blank"
        >
          Liz Mendes Linked In Page
        </a>
      </p>
      <p className="blurb__content">
        Twitter: {' '}
        <a
          className="blurb__link"
          href="https://twitter.com/LizLizmendes"
          target="_blank"
        >
          Liz Mendes Twitter
        </a>
      </p>
    </div>
  </section>
);

export default Contact;
