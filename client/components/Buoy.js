import React from 'react';

const Buoy = (props) => {
  console.log(props.desc)
  return (
    <div>
      <h4>{props.title}</h4>
      <p>{props.date}</p>
      {props.desc}
    </div>
  )
}

export default Buoy;
