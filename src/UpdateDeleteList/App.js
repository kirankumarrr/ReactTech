import React, { Component, Fragment } from 'react';
import User from './Components/user';
import uniqueId from 'react-html-id';

const Temp = (props)=>{
  return(
    <Fragment>
      <div>Hi</div>
      <div>Hello</div>
      {
        props.greetings === 'hi'
        ? <Fragment>&lt;div&gt; {props.greetings}  &lt;/div&gt;</Fragment>
        : props.greetings
      }
    </Fragment>
  )
}

class App extends Component {
  constructor(props){
      super(props);
      uniqueId.enableUniqueIds(this)
        this.state= {
          users : [
            {
              id : this.nextUniqueId(),
              name:"kiran kumar Reddy",
              age : 24,
              role : "UI Developer"
            },
            {
              id : this.nextUniqueId(),
              name:"Robert",
              age : 24,
              role : "Java Developer"
            },
            {
              id : this.nextUniqueId(),
              name:"Pallab",
              age : 24,
              role : "Php Developer"
            },
          ],
          'items' : []
      }
      this.deleteUser = this.deleteUser.bind(this)
    //  this.changeUserName = this.changeUserName.bind(this)
      console.log(this.state);


  }
  componentDidMount() {
     this.getItems();
  };
/*  Proper way to fetch the data
 getItems(){
      fetch('https://api.github.com/users')
            .then(result =>{ return result.json(); })
            .then(data =>{  console.log(data); })
   }
*/changeEvent =()=>{

}
 getItems(){
      fetch('https://api.github.com/users')
            .then(results => { return results.json(); })
            .then(data => this.setState({'items':data}))
   }

  deleteUser=(index,e)=>{
    const users = Object.assign([],this.state.users);
    //Create a new duplicate array
    users.splice(index,1);
    this.setState({
      users :users
    })
  }
  changeUserName = (id , e)=>{
      const index = this.state.users.findIndex((user)=> {
        return user.id === id
      });
      const user = Object.assign({},this.state.users[index]);
      user.name = e.target.value;

      const users = Object.assign([],this.state.users);
      users[index] = user;

      this.setState({
        users : users
      })
  }

  render() {
    return (
      <div className="App">
      <Temp greetings="hi"/>
      <ul>
        {
          this.state.users.map( (user) => {
              return(
                 <User  delEvent = {this.deleteUser}
                        changeEvent = {this.changeUserName.bind(this, user.id)}
                        key = {user.id}
                        name= {user.name}
                        age= {user.age}
                        role= {user.role} />
              )
            }
          )
        }
       </ul>
      </div>
    );
  }
}

export default App;
