import React, { Component } from 'react';
import axios from 'axios';

export default class App extends Component {
  constructor() {
    super();
    this.state = { buoys: [] };
  }
  componentDidMount() {
    axios.get('/allBuoys')
    .then((data) => {
      console.log(data.data);
      const arr = data.data.map((item) => {
        return [item.title, item.description];
      });
      this.setState({ buoys: arr });
    });
  }

  render() {
    return (
      <div>
        { this.state.buoys }
      </div>
    );
  }
}
