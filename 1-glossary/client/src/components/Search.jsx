import React from 'react';
import {useState} from 'react';

const Search = (props) => {
  const [searchTerm, setSearchTerm] = useState('')
  return (
    <div>
      <hr/>
      <input type="text" placeholder="Search..." onChange={event => {setSearchTerm(event.target.value)}}/>
      <ul>
        {props.wordsAndDefinitions.filter((val) => {
          if (searchTerm == '') {
            return val
          } else if (val.word.toLowerCase().includes(searchTerm.toLowerCase())) {
            return val
          }
        }).map((item) => {
          return <li key={item.definition}> {item.word}: {item.definition}</li>
        })}
      </ul>
    </div>
  )
}

export default Search


{/* <ul>
{props.wordsAndDefinitions.map((item) => {
  return <li key={item.definition}> {item.word}: {item.definition}</li>
})}
</ul> */}

// class Search extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       word: ''
//     }
//   }

//   onChange(e) {
//     this.setState({
//       word: e.target.value
//     });
//   }

//   searchWord(event) {
//     event.preventDefault()
//     this.props.search(this.state.word)
//       .then(() => {
//         this.setState({
//           word: ''
//         })
//       })
//   }

//   render() {
//     return (
//       <form onSubmit={this.searchWord.bind(this)}>
//         <input onChange={this.onChange.bind(this)} type="text" value={this.state.word}/>
//         <input type="submit" value="search"></input>
//       </form>
//     )
//   }
// }