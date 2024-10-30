import React from "react"
import Header from "./Components/Header"
import ALLPROJECt from "./Components/table_of_project"
import Futer from "./Components/Fouter";

class ListProject extends React.Component {
  render(){
    return (<div className="name">
      <Header title="header of site" />
        <ALLPROJECt />
        <Futer />
    </div>)
  }
}

export default ListProject 