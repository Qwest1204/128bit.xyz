import React from "react"
import Header from "./Components/Header"
import Systemprint from "./Components/SystemPrint";
import Intresting from "./Components/Intresting"
import SomeFact from "./Components/Some_about";
import MyFact from "./Components/I_vladeu";
import Futer from "./Components/Fouter";
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
      <SomeFact />
      <Systemprint />
      <MyFact />
      <Intresting />
      <Futer />
    </div>)
  }
}

export default App 