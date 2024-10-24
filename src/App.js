import React from "react"
import Header from "./Components/Header"
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

class App extends React.Component {
  hello = "hello"
  render(){
    return (<div className="name">
      <Header title="header of site" />
      <h1>{this.hello}</h1>  
    </div>)
  }
}

export default App 