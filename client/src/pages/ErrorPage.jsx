import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="error-page">
      <div className="error-content">
        <h1>Oops!</h1>
        <h2>We can't find the page you're looking for.</h2>
        <p>
          It looks like nothing was found at this location. Maybe try a search or go back to the
          <Link to="/"> homepage</Link>.
        </p>
        <Link to="/" className="home-button">
          Go to Homepage
        </Link>
      </div>
    </div>
  );
};


export default ErrorPage;