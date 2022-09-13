import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      word: '',
      definition: ''
    }
    this.onChangeWord = this.onChangeWord.bind(this);
    this.onChangeDef = this.onChangeDef.bind(this);
  }

  onChangeWord(e){
    console.log('word', e.target.value)
    this.setState({
      word: e.target.value
    })
  }

  onChangeDef(e){
    console.log('definition', e.target.value)
    this.setState({
      definition: e.target.value
    })
  }

  render() {
    return(
        <div>
          Enter your word and definition: <br/><br/>
          <form>
            <label>
              Word:<br/>
              <input type="text" name="word" placeholder="Insert your word" value={this.state.word} onChange={this.onChangeWord}/>
            </label><br/><br/>
            <label>
              Definition:<br/>
              <input type="text" name="definition" placeholder="Insert your defintiion"  value={this.state.definition} onChange={this.onChangeDef}/>
            </label><br/><br/>
          <input type="submit" value="Submit" />
          </form>
        </div>
    )
  }
}

export default Form;
