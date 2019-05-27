import React from 'react';
import { NavLink } from "react-router-dom";
import TextButton from '../UI-elems/TextButton.js';
/*
class Home extends React.Component {
  constructor(props){
    super(props);
    //this.state = {};
  }

  render(){
    return (
      <React.Fragment>
        <div>
          <NavLink to="/Share">
            <TextButton body="Share a song" styling="Main-UI-Btn"/>
          </NavLink>
        </div>
        <div>
          <NavLink to="/Scan">
            <TextButton body="Scan a song" styling="Main-UI-Btn"/>
          </NavLink>
        </div>
      <a
        className="App-link"
        href="#"
        target="_blank"
        rel="noopener noreferrer"
      >
        About Me
      </a>
      </ React.Fragment>
    );
  }
}
*/

function Home(props){
  return (
    <React.Fragment>
      <div>
        <NavLink to="/Share">
          <TextButton body="Share a song" defaultStyle={true}/>
        </NavLink>
      </div>
      <div>
        <NavLink to="/Scan">
          <TextButton body="Scan a song" defaultStyle={true}/>
        </NavLink>
      </div>
    </ React.Fragment>
  );
}

export default Home;