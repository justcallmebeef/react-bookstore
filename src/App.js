import React, { Component } from 'react';
import Card from './components/Card';
import Search from './components/Search';
import Checkout from './components/Checkout';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      checkoutItemsList: [],
      books: [], 
      total: 0,
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
    this.setState({
      books: data
    })
  }

  addItem = (e) => {
    e.preventDefault()
    let cartItems = this.state.checkoutItemsList
    let newItem = {
      id: this.state.checkoutItemsList.length +1,
      title: this.state.books.title, 
      price: this.state.books.price, 
    }
    const newCartList = [...cartItems, newItem]
    console.log(newCartList)
    // this.setState({
    //   checkoutItemsList: newCartList, 
    }

  render() {
    return (
      <div className="App">
        <Search />
        <div className="row">
        <div className="cardContainer">
            {this.state.books.map((book) => {
              return (
              <Card book={book} addItem={this.addItem}/>
              )
            })}
        </div>
        <Checkout />
        </div>
      </div>
    );
  }
}

export default App;