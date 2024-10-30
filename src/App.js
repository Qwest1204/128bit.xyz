import React from "react"
import HomePage from "./Home_page";
import ListProject from "./list_project";
import VDB from "./Components/articls/VDB_articl"

import First_art from "./Components/articls/First_articl"

import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

class App extends React.Component {
  hello = "hello"
  render(){
    return (
      <Router>
            <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route path="/projects" element={<ListProject />} />
                <Route path="/projects/articl1" element={<First_art />} />
                <Route path="/projects/articl2" element={<VDB />} />
            </Routes>
        </Router>
    )
  }
}

export default App 