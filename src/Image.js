import React from 'react';
export default function Image(props) {
  return (
    <div  key={props.photo.id} className="image">
      <img src={props.photo.url} alt={props.photo.id} width='400' height='400'/>
      <h3>{props.photo.caption}</h3>
      <button className="close" onClick={()=>props.remove(props.photo.id)}>X</button>
    </div>
  );
}
