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
      searched: [],
      total: 0,
    }
  }

  async componentDidMount() {
    let result = await fetch('http://localhost:8082/api/books')
    let data = await result.json()
    this.setState({
      books: data,
      searched: data, 
    })
  }

  addItem = (title, price) => {
    let cartItems = this.state.checkoutItemsList
    let newItem = {
      id: this.state.checkoutItemsList.length +1,
      title: title, 
      price: Number(price), 
    }
    const newCartList = [...cartItems, newItem]
    let total = this.state.total
      total += newCartList[newCartList.length-1].price
    this.setState({
      checkoutItemsList: newCartList, 
      total: total 
    })
  }

  handleSearch = (event) => {
    event.preventDefault()
    const value = event.target.value
    const searched = this.state.searched
    const books = this.findBooks(value, searched)
    this.setState({
      books: books
    })
  }

  findBooks(words, searched) {
    return this.state.searched.filter(item => {
      const regex = new RegExp(words, 'gi')
      return item.title.match(regex) || item.author.match(regex)
    })
  }

  clear = (event) => {
    event.preventDefault()
    this.setState({
      checkoutItemsList: [],
      total: 0,
    })
  }

  render() {
    return (
      <div className="App">
        <Search handleSearch={this.handleSearch} />
        <div className="row">
        <div className="cardContainer">
            {this.state.books.map((book) => {
              return (
              <Card book={book} addItem={this.addItem}/>
              )
            })}
        </div>
        <Checkout total={this.state.total} checkoutItemsList={this.state.checkoutItemsList} clear={this.clear}/>
        </div>
      </div>
    );
  }
}

export default App;