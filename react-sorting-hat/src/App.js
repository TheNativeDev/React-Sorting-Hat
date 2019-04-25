import React, { Component } from 'react';
import './App.css';

import Welcome from './components/Welcome';
import Sorting from './components/SortingComponents/Sorting';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      houses: [
        {
          name: 'Gryfindor',
          founder: 'Godric Gryffindor',
          colors: 'Scarlet and gold',
          mascot: 'Lion',
          ghost: 'Nearly Headless Nick',
          commonRoom: 'Gryffindor Tower',
          values: ['bravery', 'daring', 'nerve', 'chivalry']
        },
        {
          name: 'Hufflepuff',
          founder: 'Helga Hufflepuff',
          colors: 'Yellow and black',
          mascot: 'Badger',
          ghost: 'Fat Friar',
          commonRoom: 'Hufflepuff Basement',
          values: ['hard work', 'dedication', 'patience', 'loyalty']
        },
        {
          name: 'Ravenclaw',
          founder: 'Rowena Ravenclaw',
          colors: 'Blue and bronze',
          mascot: 'Eagle',
          ghost: 'Grey Lady',
          commonRoom: 'Ravenclaw Tower',
          values: ['intelligence', 'knowledge', 'wit']
        },
        {
          name: 'Slytherin',
          founder: 'Salazar Slytherin',
          colors: 'Green and silver',
          mascot: 'Snake',
          ghost: 'Bloody Baron',
          commonRoom: 'Slytherin Dungeon',
          values: ['ambition', 'cunning', 'resourcefulness']
        }
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <Welcome />
        <Sorting />
      </div>
    );
  }
}

export default App;
