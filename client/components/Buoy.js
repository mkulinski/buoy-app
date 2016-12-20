import React from 'react';
import style from '../styles/styles';

const Buoy = (props) => {
  return (
    <div style={style.buoyBorder}>
      <h4><span onClick={(e) => props.fav(e, props.id)} className='star'>&#9734; </span> {props.title}</h4>
      <p>{props.date}</p>
      {props.desc.map(item => <p>{item[0]}: {item[1]}</p>)}
    </div>
  )
}

export default Buoy;
