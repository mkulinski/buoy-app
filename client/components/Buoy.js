import React from 'react';

const Buoy = (props) => {
  return (
    <div style={{'border': '1px, solid, black', 'backgroundColor': 'blue'}}>
      <h4><span onClick={(e) => props.fav(e, props.id)}>&#9734; </span> {props.title}</h4>
      <p>{props.date}</p>
      {props.desc.map(item => <p>{item[0]}: {item[1]}</p>)}
    </div>
  )
}

export default Buoy;
