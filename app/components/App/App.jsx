import React , {Component} from 'react';

import HomePage from '../HomePage'
require('./App.css');

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
     <div>
          <HomePage/>
      </div>
    );
  }
}
