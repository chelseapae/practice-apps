import React from 'react';

class Entry extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      word: this.props.wordAndDef.word,
      definition: this.props.wordAndDef.definition,
      edited: false
    }
    this.edit = this.edit.bind(this);
    this.editWord = this.editWord.bind(this);
    this.editDef = this.editDef.bind(this);
    this.submitEdit = this.submitEdit.bind(this);
  }

  edit() {
    this.setState({edited: true})
  }

  editWord(e) {
    this.setState({
      word: e.target.value
    })
  }

  editDef(e) {
    this.setState({
      definition: e.target.value
    })
  }

  submitEdit() {
    this.props.editWordObj( {'_id': this.props.wordAndDef._id, 'definition': this.state.definition} );
    this.setState({edited: false})
  }


  render () {
    if (!this.state.edited) {
      return (
        <li>
          <b>Word:</b> {this.state.word} <br/>
          <b>Definition:</b> {this.state.definition} <br/>
          <button type="edit" onClick={this.edit}> Edit </button><br/>
          <button type="delete" onClick={() => this.props.delete(this.props.wordAndDef.word)}> Delete </button>
          <br/><br/>
        </li>
      )
    } else {
      return (
        <li>
          <b>Word:</b> {this.state.word} <br/>
          <b>Definition:</b> {this.state.definition} <br/>
          <input type="text" onChange={this.editWord} value={this.state.word}/><br/>
          <input type="text" onChange={this.editDef} value={this.state.definition}/>
          <button onClick={this.submitEdit}> Edit </button>
          <br/><br/>
      </li>
      )
    }

  }
}

export default Entry;



// const Entry = (props) => {
//   return (
//     <li>
//     <b>Word:</b> {props.entry.word} <br/>
//     <b>Definition:</b> {props.entry.definition}<br/>
//       <input type="text" name="edited" placeholder="Edit your definition"/>
//      <button type="edit" onClick={() => console.log('edited')}> Edit </button><br/>
//      <button type="delete" onClick={() => props.delete(props.entry.word)}> Delete </button>
//     <br/><br/>
//   </li>
//   )
// }

// export default Entry;