import React from 'react';
import Entry from './Entry.jsx'

const List = (props) => {
  console.log('PROPS IN LIST', props)
    return (
    <div>
      <hr/>
      <h2> Words and Definitions </h2>
        {props.wordsAndDefinitions.map((wordAndDef) =>
           <Entry
           key={props._id}
           wordAndDef={wordAndDef}
           delete={props.delete}
           editWordObj={props.editWordObj}
           />
        )}
    </div>
    )
  }
export default List;
