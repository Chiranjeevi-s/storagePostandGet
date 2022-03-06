// import logo from './logo.svg';
import { Button, TextField } from '@material-ui/core';
import axios from 'axios';
import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      userName : '',
      userEmail : '',
      userfromDB : []
    }
  }

  componentDidMount(){
    axios.get('http://localhost:8001/getsubmit').then( (response) => console.log(this.setState({userfromDB: response.data})))
  }

  handleOnSubmit= () => {
    if(this.state.userName && this.state.userEmail){
      axios.post('http://localhost:8001/submit',{
        userName: this.state.userName,
        userEmail: this.state.userEmail
      } ).then( () => alert('success'))
    }else{
      alert('Fields cant be empty')
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className='container'>
            <div className='line'>user name : <TextField value={this.state.userName} onChange={(e) => this.setState({userName: e.target.value})} variant="outlined" /></div>
            <div className='line'>E-mail : <TextField value={this.state.userEmail} onChange={(e) => this.setState({userEmail: e.target.value})} variant="outlined" /></div>
            <div><Button variant="contained" color='primary' onClick={this.handleOnSubmit}>Submit</Button></div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
