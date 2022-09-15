import React from 'react';

const List = (props) => (
  <div>
    {/* {console.log('PROPS IN LIST', props)} */}
    <h4> Words and Definitions </h4>
      {props.wordsAndDefinitions.map((wordAndDef) =>
        <li key={wordAndDef}>
          Word: {wordAndDef.word} <br/>
          Definition: {wordAndDef.definition}
          <br/>
        </li>
      )}
  </div>
)

export default List;