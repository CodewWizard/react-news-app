import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News';
import Spinner from './components/Spinner';

export class App extends Component {
  render() {
    return (
      <>
        <Navbar/>  
        <News pageSize={5}/>
      </>
    );
  }
}

export default App