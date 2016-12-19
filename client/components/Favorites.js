import React from 'react';

const Favorites = (props) => {
  return (
    <div>
      { props.children.appState.favorites }
    </div>
  );
};

export default Favorites;
