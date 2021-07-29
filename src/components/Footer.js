import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const Footer = ({copyright}) => (
  <div className="Footer">
    <hr/>
    <p>&copy; {copyright}</p>
  </div>
);

export default Footer;
