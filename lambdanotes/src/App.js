import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

import NotesList from './components/NotesList'
import CreateNewNote from './components/CreateNewNote'
import Home from './components/Home'

import { Route, Link } from 'react-router-dom'
import NoteView from './components/NoteView'

import UpdateNote from './components/UpdateNote'

import styled from "styled-components"

//subroutes - menu
import UnSorted from './components/subroutes/unsorted'
import AzSort from './components/subroutes/azsort'
import ZaSort from './components/subroutes/zasort'
import IdSort from './components/subroutes/idsort'


const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
`



class App extends Component {
  constructor(){
    super();
    this.state = {
      notes: [],
    }
  }

  // componentDidMount(){
  //   axios
  //   .get(`https://fe-notes.herokuapp.com/note/get/all`)
  //   .then(response => {
  //       this.setState({ notes: response.data })
  //   })
  //   .catch(err => {
  //     console.log("Fail to GET notes from server", err)
  //   })
  // }

  // handleAddNewNote = note => {
  //   axios 
  //   .post(`https://fe-notes.herokuapp.com/note/create`, note)
  //   .then(response => {
  //           axios
  //             .get(`https://fe-notes.herokuapp.com/note/get/all`)
  //             .then(response => {
  //                 this.setState({ notes: response.data })
  //             })
  //             .catch(err => {
  //               console.log("Fail to GET notes from server", err)
  //             })
  //   })
  //   .catch(err => {
  //     console.log("Fail to POST a note to the server", err)
  //   })
  // }

  // handleDeleteNote = id => {
  //   //alert("Are you sure you want to delete?")
  //   axios 
  //   .delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
  //   .then(response => {
  //     //this.setState({ notes: response.data })
  //           axios
  //             .get(`https://fe-notes.herokuapp.com/note/get/all`)
  //             .then(response => {
  //                 this.setState({ notes: response.data })
  //             })
  //             .catch(err => {
  //               console.log("Fail to GET notes from server", err)
  //             })
  //   })
  //   .catch(err => {
  //     console.log("Fail to DELETE a note", err)
  //   })
  // }

  // handleUpdateNote = updatedNote => {
  //   axios 
  //   .put(`https://fe-notes.herokuapp.com/note/edit/${updatedNote.id}`, updatedNote)
  //   .then(response => {
  //     //this.setState({ notes: response.data })
  //     console.log(response.data)
  //           axios
  //           .get(`https://fe-notes.herokuapp.com/note/get/all`)
  //           .then(response => {
  //               this.setState({ notes: response.data })
  //           })
  //           .catch(err => {
  //             console.log("Fail to GET notes from server", err)
  //           })
  //   })
  //   .catch(err => {
  //     console.log("Fail to UPDATE a note", err)
  //   })
  // }

  handleLogOut = event => {
    localStorage.setItem('user', '')
    window.location.reload();
  }
  
  // myFunction = () => {
  //   document.getElementById("myDropdown").classList.toggle("show");
  // }

  
  


  render() {

   
    return (
      <div className="App">
        <header className="App-header"> 
          <h1> Lambda Notes </h1>
          <button onClick={this.handleLogOut}>Log Out </button>
          <ul>
            <li>
              <StyledLink to="/home"><div className="button">Home</div></StyledLink>
            </li>
            <li>
              <StyledLink to="/create"><div className="button"> +Create New Notes</div></StyledLink>
            </li>
            <li>
              <StyledLink to="/notes"><div className="button">View Your Notes</div></StyledLink>
            </li>

            <li>
                <div>
                  <button onClick={this.myFunction} class="dropbtn">Dropdown</button>
                    <div id="myDropdown" class="dropdown-content">
                      <Link to="/unsorted">Unsorted</Link>
                      <Link to="/azsort">A-Z</Link>
                      <Link to="/zasort">Z-A</Link>
                      <Link to="/idsort">ID</Link>
                    </div>
                </div>
            </li>


           
          </ul>
        </header>

        <div className="Container">

              {/* <Route exact path="/home" component={Home} /> */}

              <Route exact path="/notes" 
                render={props => <NotesList {...props} notes={this.state.notes}
                handleDeleteNote={this.handleDeleteNote}/> }
              />

              
              <Route path="/unsorted"
                render={props => <UnSorted {...props}/>}
              />

              <Route path="/azsort"
                render={props => <AzSort {...props}/>}
              />

              <Route path="/zasort"
                render={props => <ZaSort {...props}/>}
              />

               <Route path="/idsort"
                render={props => <IdSort {...props}/>}
              />


              <Route exact path="/create" 
                render={props => <CreateNewNote {...props} handleAddNewNote={this.handleAddNewNote} />}
              />

      
              <Route path="/notes/:id"
                render={props => <NoteView {...props} handleDeleteNote={this.handleDeleteNote}/>}
              />

              <Route path="/edit/:id"
                render={props => <UpdateNote {...props} handleUpdateNote={this.handleUpdateNote} notes={this.state.notes}/>}
              />

              <p>
                Edit View (update).
              </p>
              <p>
                Delete Modal
              </p>
        </div>

      </div>
    );
  }
}

export default App;
