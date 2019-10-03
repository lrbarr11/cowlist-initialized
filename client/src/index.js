import React from "react";
import ReactDOM from "react-dom";
import Search from "./search";
import axios from "axios";
import List from "./listcows";
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      cows: []
    }  
  }


  newCow(name, description){
    axios.post('/cows', {name, description})
    .then(() => {
      console.log('new cow made');
      return axios.get('/cows')
    })
    .then((cows) => {
      this.setState({
        cows: cows
      })
    })
    .catch((err) => console.log('failed new cow'))
  }

  edit(id){
    axios.put('/cows', {_id: id})
    .then(() => {
      return axios.get('/cows')
    })
    .then((cows) => {
      this.setState({
        cows: cows
      })
    })
    .catch((err) => console.log('failed update cow'))
  }

  remove(id){
    axios.delete('/cows', {_id: id})
    .then(() => {
      return axios.get('/cows')
    })
    .then((cows) => {
      this.setState({
        cows: cows
      })
    })
    .catch((err) => console.log('failed delete cow'))
  }
  




  render() {
    return (
      <>
      <div>Cows</div>
    <Search addNew={this.newCow.bind(this)}/>
    <List cows={this.state.cows} edit={this.edit.bind(this)} remove={this.remove.bind(this)}/>
    </>
    )
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App/>, mountNode);