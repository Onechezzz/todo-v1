import React, {Component} from 'react'
import './App.css'
import TodoList from './TodoList'
import TodoItems from './TodoItems'



class App extends Component {
  inputElement = React.createRef()
  constructor(){
    super()
    this.state = {
      items: [],
      currentItem: {text:'', key:''},
    }
  }
  handleInput = e => {
    const itemText = e.target.value
    const currentItem = { text: itemText, key: Date.now() }
    this.setState({
      currentItem,
    })
  }


  addItem = e => {
    e.preventDefault()
    const newItem = this.state.currentItem
    if(newItem.text!==''){
      console.log('New Item')
      const items = [...this.state.items, newItem]//Плюсує до самого себе новий таск
      this.setState({
        items:items,
        currentItem: { text:'', key:'' },
      })
    }
    console.log('Hello Item')
  }



  deleteItem = key => {
    const filteredItems = this.state.items.filter(item => {
      return item.key !== key
    })
    this.setState({
      items: filteredItems,
    })
  }


  render(){
    return(
      <div className="App">
        <h1 id="task_id">Список завдань</h1>
        <TodoList
                    addItem={this.addItem}//Долучення Таску
                    inputElement={this.inputElement}//
                    handleInput={this.handleInput}//Обробник даних після вводу при зміні
                    currentItem={this.state.currentItem}//Показує значення стейту
                   />
        <TodoItems entries={this.state.items}deleteItem={this.deleteItem}/>
      </div>
    )
  }
}

export default App
