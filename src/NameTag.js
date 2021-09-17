import React from "react";

/* write an arrow function called "NameTag" that returns JSX
The JSX returned should consist of:
  - a div element with className attribute of "name-tag" and three nested children elements:
    - an h3 element with className attribute of "title" and the inner text of "HELLO"
    - a p element with className attribute of "subtitle" and the inner text of "my name is"
    - a h2 element with className attribute of "name" and the inner text of your name
*/
// why does this have parenthesis instead of curly braces? Because it is an implicit return equivalent to => { return ()}. The parenthesis are used when there is a multiline/multi expression return value. Could avoid parenthesis if it fits on a single line.
const NameTag = (props) => {
    const deleteByIndex = () => props.removeName(props.index);
    return (
      <div className="name-tag">
        <h3 className="title">HELLO</h3>
        <p className="subtitle">my name is</p>
        <h2 className="name">{props.name}</h2>
        <span onClick={deleteByIndex} className="name-tag__delete">
          x
        </span>
      </div>
    );
  };
  
  export default NameTag;
/* export our functional component definition to be 
imported then rendered within another module */
