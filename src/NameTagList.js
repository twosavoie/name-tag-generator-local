import React from "react";
import NameTag from "./NameTag.js";
import "./styles.css";

//props used to pass a reference to the removeName method to the event listener in the NameTag component that calls the removeName method (in App component (?) NameTag component (?))
const NameTagList = (props) => {
  const renderNameTag = (name, index) => (
    <NameTag
      name={name}
      key={name}
      removeName={props.removeName}
      index={index}
    />
  );
  const NameTagElements = props.names.map(renderNameTag);
  return <main>{NameTagElements}</main>;
};

export default NameTagList;
