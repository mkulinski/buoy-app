import React from 'react';
import style from '../styles/styles';

const Favorites = (props) => {
  return (
    <div style={style.topContainer}>
      <div style={style.container}>
        <h1 style={style.heading}>Buoys</h1>
        { props.children.appState.favorites }
      </div>
    </div>
  );
};

export default Favorites;
