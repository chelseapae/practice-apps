import React from 'react';
import $ from 'jquery';
class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wordsAndDefinitions: []
    }
    this.getWords = this.getWords.bind(this);
    this.delete = this.delete.bind(this);
  }

  componentDidMount(){
    this.getWords();
  }

  getWords() {
    $.ajax({
      type: 'GET',
      url: '/glossary'
    })
      .then(data => {
        console.log('DATA FROM GET WORDS', data)
        this.setState({wordsAndDefinitions: data})
      })
  }

  delete(){
    $.ajax({
      type: 'DELETE',
      url: '/glossary'
    })
  }

  render () {
    return (
    <div>
      {/* {console.log('PROPS IN LIST', props)} */}
      <hr/>
      <h2> Words and Definitions </h2>
        {this.props.wordsAndDefinitions.map((wordAndDef) =>
          <li key={wordAndDef.definition}>
            <b>Word:</b> {wordAndDef.word} <br/>
            <b>Definition:</b> {wordAndDef.definition}<br/>
             <button type="edit"> Edit </button>
             <button type="delete" onClick={this.}> Delete </button>
            <br/><br/>
          </li>
        )}
    </div>
    )
  }
}
export default List;