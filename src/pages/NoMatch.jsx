import React from 'react';
import { Link } from 'react-router';

export default function NoMatch() {
  return <div className="container"><h1>404 Page Not Found!</h1>
  <p><Link to="/" >Go To Home Page</Link> </p></div>;
}

