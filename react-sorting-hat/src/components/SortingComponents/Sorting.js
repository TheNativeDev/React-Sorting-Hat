import React, { Component } from 'react';
import './Questions.css';

import Questions from './Questions';
import Answers from './Answers';

class Sorting extends Component {

  render() {
    return (
      <div className='questions-container'>
        <Questions />
        <Answers />
      </div>
    );
  }
}

export default Sorting;
