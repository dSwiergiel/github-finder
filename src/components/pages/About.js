import React, { Fragment } from 'react';
var env = process.env.NODE_ENV || 'dev';
const About = () => {
  return (
    <Fragment>
      <h1>About this App</h1>
      <p>App to Search GitHub users</p>
      <p>Version: 1.0.0 {env}</p>
      <p>Client ID: {process.env.REACT_APP_GITHUB_CLIENT_ID}</p>
    </Fragment>
  );
};

export default About;
