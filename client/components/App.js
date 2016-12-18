import React, { Component } from 'react';
import axios from 'axios';
import Buoy from './Buoy';

export default class App extends Component {
  constructor() {
    super();
    this.state = { buoys: [] };
    this.descParse = this.descParse.bind(this);
  }
  componentDidMount() {
    axios.get('/allBuoys')
    .then((data) => {
      const arr = data.data.map((item) => {
        const desc = this.descParse(item.description);
        return <Buoy title={item.title} date={item.date} desc={desc} />
      });
      this.setState({ buoys: arr });
    });
  }
  descParse(desc) {
    const outDesc = Object.keys(desc).map((item) => {
      return <p>{item}: {desc[item]}</p>
    });
    return outDesc;
  }

  render() {
    return (
      <div>
        <h1>App</h1>
        { this.state.buoys }
      </div>
    );
  }
}
