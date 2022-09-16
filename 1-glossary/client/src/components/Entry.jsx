import React from 'react';

const Entry = (props) => {
  return (
    <li>
    <b>Word:</b> {props.entry.word} <br/>
    <b>Definition:</b> {props.entry.definition}<br/>
     <button type="edit"> Edit </button>
     <button type="delete" onClick={() => props.delete(props.entry.word)}> Delete </button>
    <br/><br/>
  </li>
  )
}

export default Entry;