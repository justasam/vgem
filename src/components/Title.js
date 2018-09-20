import React from 'react';

const Title = (props) => (
  <div className="titleWrapper" style={{width: props.width, position: 'relative'}}>
    <h2 className={`title ${props.classes}`} style={{
      textAlign: "center",
      fontSize: 27,
      color: "#9B9B9B"
    }}>{props.title}</h2>
  </div>
);

export default Title;