import React, { Component } from 'react';
import axios from 'axios';
import Nav from './Nav';
import Buoy from './Buoy';

export default class App extends Component {
  constructor() {
    super();
    this.state = { buoys: [], favorites: [] };
    this.descParse = this.descParse.bind(this);
    this.onFav = this.onFav.bind(this);
  }
  componentDidMount() {
    axios.get('/allBuoys')
    .then((data) => {
      const arr = data.data.map((item) => {
        const desc = this.descParse(item.description);
        return <Buoy id={item._id} title={item.title} date={item.date} desc={desc} fav={this.onFav} />
      });
      this.setState({ buoys: arr });
    });
  }
  onFav(e, id) {
    e.preventDefault();
    const currBuoys = this.state.buoys.filter(item => item.props.id === id);
    const newFavorites = this.state.favorites.concat(currBuoys);
    this.setState({ favorites: newFavorites });
    console.log('state updated', this.state.favorites);
  }

  descParse(desc) {
    return Object.keys(desc).map((item) => {
      return [item, desc[item]];
    });
  }

  render() {
    return (
      <div>
        <Nav />
        { React.cloneElement(this.props.children, this.props, {
          appState: this.state,
          onFav: this.onFav
        })
        }
      </div>
    );
  }
}
