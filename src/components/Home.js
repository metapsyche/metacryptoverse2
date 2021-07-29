import React, { Component, UseState } from 'react';
import ReactDOM from 'react-dom';
import { node } from 'prop-types';

import { Metaverses } from './Metaverses';


function Home() {
  return (
    <div className="Home">
      <h1>HOME</h1>
      <Metaverses />
    </div>
  );
}

export default Home;
