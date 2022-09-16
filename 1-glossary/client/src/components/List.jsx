import React from 'react';
import $ from 'jquery';
import Entry from './Entry.jsx'

const List = (props) => {
  console.log('PROPS IN LIST', props.wordsAndDefinitions)
    return (
    <div>
      <hr/>
      <h2> Words and Definitions </h2>
        {props.wordsAndDefinitions.map((wordAndDef) =>
          <Entry entry={wordAndDef} delete={props.delete} />
        )}
    </div>
    )
  }
export default List;


  // componentDidMount(){
  //   this.getWords();
  // }

  // getWords() {
  //   $.ajax({
  //     type: 'GET',
  //     url: '/glossary',
  //     success: (data) => this.setState({wordsAndDefinitions: data})
  //   })
  //     // .done(data => {
  //     //   console.log('DATA FROM GET WORDS', data)
  //     //   this.setState({wordsAndDefinitions: data})
  //     // })
  // }
  // getWords(){
  //   axios.get('/glossary')
  //   .then((data) => this.setState({wordsAndDefinitions: data}))
  //   .catch((err)=> console.log('axios error', err))
  // }


  // delete(word){
  //   $.ajax({
  //     type: 'DELETE',
  //     url: '/glossary',
  //     data: {word: word},
  //     success: () => {return this.getWords()},
  //     error: (err)=>{console.log('ajax error', err)}
  //   })
  // }