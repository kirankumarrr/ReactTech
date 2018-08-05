import React, { Component } from 'react';

const SearchBtn=(props)=>{
    //console.log(props.value);
    return(
        <div>
            <input type="text" value={props.value} onChange={props.handleChange}/>
            <button onClick={props.SearchData} >Btn</button>
        </div>
    )
}
const SearchResult=(props)=>{
    console.log(props.Result);
    return(
        <div>
         <table>
             <tbody>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Role</th>
                </tr>
                {
                  props.Result.map(user=>{
                      return(
                        <tr key={user.name}>
                            <td>{user.name}</td>
                            <td>{user.age}</td>
                            <td>{user.role}</td>
                        </tr>
                      )
                  })  
                }
               </tbody>
                </table>
        </div>
    )
}

class Search extends Component {
    constructor(props){
        super(props);
        this.state = {
            value : "",
            user : [
              {name:"kiran kumar Reddy",age : 24,role : "UI Developer"
              },
              {name:"Robert",age : 35,role : "Java Developer"
              },
              { name:"K",age : 30,role : "Php Developer"
              },
            ],
            userSearchResult : [],
            name : ""
            
          }
          this.SearchData = this.SearchData.bind(this) 
          this.handleChange= this.handleChange.bind(this) 
    }
    SearchData=()=>{
        const userDetails = this.state.user
        const userSearchResult = this.state.userSearchResult
        const inputVal = this.state.value;
        let indexuser;
        
        userDetails.map((user,index)=>{
            if(inputVal === user.name){
                indexuser = index
            }
            //console.log(this.userSearchResult);
        })
        
        if(userSearchResult.length == 0 ){
            userSearchResult.push(userDetails[indexuser]);
        }       
        console.log(userDetails[indexuser])
        this.setState({
            userSearchResult : userSearchResult
           })
        console.log(this.state.userSearchResult)
    }
    handleChange(event) {
    
     this.setState({value: event.target.value});
    }
  render() {
    return (
      <div className="App">
        <h1>Search</h1>
        <SearchBtn 
                handleChange ={this.handleChange}
                SearchData = {this.SearchData}
                value={this.state.value}/>
        <SearchResult Result={this.state.userSearchResult}/>
      </div>
    );
  }
}

export default Search;
