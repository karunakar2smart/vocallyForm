import React from "react";

const Heading = (props) => {
 return (
  <div className={props.className}>
   <h1>{props.text}</h1>
  </div>
 );
};

export default Heading;
