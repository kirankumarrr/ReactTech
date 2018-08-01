import React, { Component } from 'react';
import uniqueId from 'react-html-id';
class App extends Component {
  constructor(props){
      super();
      uniqueId.enableUniqueIds(this)
        this.state= {
          users : []
      }
      console.log(this.state);


  }
  componentDidMount() {
     this.getItems();
  };
/*  Proper way to fetch the data */
 getItems(){
      fetch('https://api.github.com/users')
            .then(results => { return results.json(); })
            .then((data) => {
                this.setState({
                    users:data,
                })
                console.log(data);
                console.log(this.state.users);
            })
   } 



  render() {
    const usersDetails = this.state.users;
    return (
      <div className="App">
      <table>
        <tbody>
            <tr>
              <th>login</th>
              <th>id</th>
              <th>node_id</th>
              <th>avatar</th>
            </tr>
        {
          usersDetails.map(data => {
            return(
                  <tr key={data.id}>
                    <td>{data.login}</td>
                    <td>{data.id}</td>
                    <td>{data.node_id}</td>
                    <td><img src={data.avatar_url} alt="avatar_img"/></td>
                  </tr>
                
            )
          })
        }
        </tbody>
        </table>
      </div>
    );
  }
}

export default App;
