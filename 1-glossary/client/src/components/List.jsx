import React from 'react';
import Entry from './Entry.jsx'

const List = (props) => {
    return (
    <div>
      <hr/>
      <h2> Words and Definitions </h2>
        {props.wordsAndDefinitions.map((wordAndDef) =>
           <Entry
           key={props.definition}
           entry={wordAndDef}
           delete={props.delete} />
        )}
    </div>
    )
  }
export default List;
