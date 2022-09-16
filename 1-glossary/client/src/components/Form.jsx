import React from 'react';
import $ from 'jquery';
import axios from 'axios';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      word: '',
      definition: ''
    }
    this.onChangeWord = this.onChangeWord.bind(this);
    this.onChangeDef = this.onChangeDef.bind(this);
    this.submit = this.submit.bind(this);
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

  // submit(){
  //   event.preventDefault()
  //   console.log('submitted!', this.state.word, this.state.definition)
  //     $.ajax({
  //       type: "POST",
  //       url: "/glossary",
  //       data: JSON.stringify({word: this.state.word, definition: this.state.definition}),
  //       contentType: 'application/json',
  //       success: () => {this.getWords()},
  //       error: (err)=>{console.log('ajax error', err)}
  //     })
  //     .then((data) => {
  //       console.log('SUBMIT THEN', data)
  //     })
  // }

  submit(){
    event.preventDefault()
    axios.post(
      '/glossary',
      {word: this.state.word, definition: this.state.definition}
      )
      .then(this.props.getWords())
      .catch((err)=> console.log('axios submit error', err))
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
              <input type="text" name="definition" placeholder="Insert your definition"  value={this.state.definition} onChange={this.onChangeDef}/>
            </label><br/><br/>
          <input type="submit" value="Submit" onClick={this.submit}/>
          </form>
        </div>
    )
  }
}

export default Form;
