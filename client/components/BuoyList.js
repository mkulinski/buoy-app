import React from 'react';
import style from '../styles/styles';

const BuoyList = (props) => {
  return (
    <div style={style.topContainer}>
      <div style={style.container}>
        <h1 style={style.heading}>Buoys</h1>
        { props.children.appState.buoys }
      </div>
    </div>
  );
};

export default BuoyList;
