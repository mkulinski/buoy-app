import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import style from '../styles/styles';

export default class Login extends Component {
  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(evt) {
    evt.preventDefault();
    // grab username from form
    const username = this.refs.username.value;
    // go to buoy-list
    if (username) browserHistory.push('/buoy-list');
    // reset form
    this.refs.username.value = '';
  }

  render() {
    return (
      <div style={style.topContainer}>
        <div style={style.container}>
          <h1 style={style.heading}>Login</h1>
          <form onSubmit={this.onSubmit} style={style.form}>
            <label style={style.label}>Username</label>
            <input type="text" ref="username" style={style.input} />
            <button type="submit" className="submit-button" style={style.buttonStyle}>Submit</button>
          </form>
        </div>
      </div>
    )
  }
}
