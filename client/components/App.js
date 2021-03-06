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
  // grab all buoys from database
  componentDidMount() {
    axios.get('/allBuoys')
    .then((data) => {
      const arr = data.data.map((item, index) => {
        const desc = this.descParse(item.description);
        return <Buoy id={item._id} title={item.title} date={item.date} desc={desc} fav={this.onFav} key={index} />
      });
      this.setState({ buoys: arr });
    });
  }
  // adds the favorited buoys to the favorites state array
  onFav(e, id) {
    e.preventDefault();
    const currBuoys = this.state.buoys.filter(item => item.props.id === id);
    const newFavorites = this.state.favorites.concat(currBuoys);
    this.setState({ favorites: newFavorites });
  }
  // helper function to create array of arrays with key/value pairs of description data
  descParse(desc) {
    return Object.keys(desc).map((item) => {
      return [item, desc[item]];
    });
  }

  render() {
    return (
      <div>
        <Nav />
        { React.cloneElement(
            this.props.children,
            this.props,
            { appState: this.state, onFav: this.onFav },
          )
        }
      </div>
    );
  }
}
