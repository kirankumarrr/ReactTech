import React, { Component } from 'react';
import logo from './logo.svg';


class App extends Component {
  state= {
    user : [
      {
        name:"kiran kumar Reddy",
        age : 24,
        role : "UI Developer"
      },
      {
        name:"Robert",
        age : 24,
        role : "Java Developer"
      },
      {
        name:"Pallab",
        age : 24,
        role : "Php Developer"
      },
    ]
  }
  render() {
    return (
      <div className="App">

        {
          this.state.user.map( (user) => {
              return(
                <ul> 
                  <li key={user.name}>{user.name}</li>
                  <li key={user.age}>{user.age}</li>
                  <li key={user.role}>{user.role}</li>
                </ul>
              )
            }
          )
        }
      
      </div>
    );
  }
}

export default App;
