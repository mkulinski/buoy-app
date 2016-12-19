import React from 'react';
import Buoy from './Buoy';

const BuoyList = (props) => {
  return (
    <div>
      { props.children.appState.buoys }
    </div>
  );
};

export default BuoyList;
