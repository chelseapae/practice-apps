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
    this.editDef = this.editDef.bind(this);
    this.submitEdit = this.submitEdit.bind(this);
  }

  edit(){
    this.setState({edited: true})
  }

  editDef(e){
    this.setState({
      definition: e.target.value
    })
  }

  submitEdit(){
    //submitting both existing ID and NEW definition
    this.props.editWordObj({'_id': this.props.wordAndDef._id, 'definition': this.state.definition});
    this.setState({edited: false})
  }


  render () {
    if (!this.state.edited) {
      return (
        <li>
          <b>Word:</b> {this.state.word} <br/>
          <b>Definition:</b> {this.state.definition} <br/>
          <button type="edit" onClick={this.edit}> Edit definition </button><br/>
          <button type="delete" onClick={() => this.props.delete(this.props.wordAndDef.word)}> Delete </button>
          <br/><br/>
        </li>
      )
    } else {
      return (
        <li>
          <b>Word:</b> {this.state.word} <br/>
          <b>Definition:</b> {this.state.definition} <br/>
          <input type="text" onChange={this.editDef} value={this.state.definition}/>
          <button onClick={this.submitEdit}> Edit </button>
          <br/><br/>
      </li>
      )
    }

  }
}

export default Entry;