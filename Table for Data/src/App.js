import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    data: []
  }
    addData=()=> {
      fetch ( 'https://jsonplaceholder.typicode.com/todos' )
      .then(response => response.json())
      .then( res => { this.setState({data: res})})

      .catch (err => console.log(err))
      }
  
  render() {
    let date = this.state.data;
    let cont = document.getElementById('cont');
    
    for(let i = 0; i < date.length;i++){
      let tr = document.createElement("tr");
      let td1 = document.createElement("td");
      let td2 = document.createElement("td");
      let td3 = document.createElement("td");
      let td4 = document.createElement("td");
      td1.innerHTML = date[i].id;
      td2.innerHTML = date[i].userId;
      td3.innerHTML = date[i].title;
      td4.innerHTML = date[i].completed;
      tr.appendChild(td1)
      tr.appendChild(td2)
      tr.appendChild(td3)
      tr.appendChild(td4)
      cont.appendChild(tr)
    } 
    
    return (
      <div id = "main">
        <p id="p">Table for data</p>
        <button onClick={this.addData} type="button" id="but"> GET </button>
        
        <table id = "cont">

        </table>
        
      </div>
    )
  }
}
export default App;