import React from 'react';
import $ from 'jquery';

const List = (props) => (

  <div>
    <h4> Words and Definitions </h4>
      {props.wordsAndDefinitions.map((wordAndDef) =>
        <li>
          Word: {wordAndDef.word}
          Definition: {wordAndDef.definition}
        </li>
      )}
  </div>
)

export default List;