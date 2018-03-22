import React, { Component } from 'react';
import './App.css';
import PoemList from './PoemList'
import ChooseButton from './ChooseButton'


class App extends Component {
  state = {PoemList}
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">SAD-LIBS</h1>
        </header>
        <main>
        <p> Choose a Poet </p>
         <ChooseButton PoemList = {this.state.PoemList} />
        </main>
      </div>
    );
  } 
}

export default App;
