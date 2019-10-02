import React from "react";
import ReactDOM from "react-dom";
import Search from "./search";
import axios from "axios";

class App extends React.Component {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     cows: []
  //   }  
  // }

  render() {
    return (
      <>
      <div>Cows</div>
    <Search />
    </>
    )
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App/>, mountNode);