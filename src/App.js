import React, { Component } from 'react';
import Card from './components/Card';
import Search from './components/Search';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      books: []
    }
  }

  async componentDidMount() {
    console.log("time to fetch!")
    // fetch("http://localhost:8082/api/books").then(function(thing){
    //   console.log("here is a thing", thing)
    //   return thing.json()
    // }).then(function(data){
    //   console.log("data", data)
    // })
    let result = await fetch("http://localhost:8082/api/books")
    let data = await result.json()
    console.log("data", data)
    this.setState({
      books: data
    })
  }

  render() {
    return (
      <div className="App">
        <Search />
            {this.state.books.map(function(book){
              return <Card book={book}/>
            })}
      </div>
    );
  }
}

export default App;
